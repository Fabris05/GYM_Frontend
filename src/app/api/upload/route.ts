import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file = data.get("file") as File;

        if (!file) {
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        const fileName = `${Date.now()}_${file.name}`;
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        await fs.mkdir(uploadDir, { recursive: true });

        const bytes = await file.arrayBuffer();
        await fs.writeFile(path.join(uploadDir, fileName), Buffer.from(bytes));

        const publicPath = `/uploads/${fileName}`;

        return NextResponse.json({ imageUrl: publicPath });
    } catch (error) {
        console.error("Error en la subida:", error);
        return NextResponse.json({ message: "Error en la subida" }, { status: 500 });
    }
}