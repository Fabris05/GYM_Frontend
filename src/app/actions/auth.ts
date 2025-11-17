"use server";

import { cookies } from "next/headers";

export async function setRolCookie(rol: string) {
    const cookieStore = await cookies();

    cookieStore.set({
        name: "rol",
        value: rol,
        httpOnly: true,
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 24,
    });
}
