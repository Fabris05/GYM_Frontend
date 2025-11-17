import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const rol = req.cookies.get("rol")?.value;
    const pathname = req.nextUrl.pathname;

    if (!rol) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    const restrictedPath = [
        "/admin/dashboard",
        "/admin/usuarios",
        "/admin/pagos"
    ]

    if (rol === "RECEPCIONISTA" && restrictedPath.includes(pathname)) {
        return NextResponse.redirect(new URL("/admin/clientes", req.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*"],
}