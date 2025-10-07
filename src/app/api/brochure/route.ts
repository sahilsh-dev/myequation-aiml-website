import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "assets",
      "downloadBrocure",
      "roboai.b4257307e86d9f881a09.pdf"
    );

    const stat = fs.statSync(filePath);
    const file = fs.readFileSync(filePath);

    return new NextResponse(file, {
      status: 200,
      headers: new Headers({
        "Content-Type": "application/pdf",
        "Content-Length": String(stat.size),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": 'inline; filename="myequation-brochure.pdf"',
      }),
    });
  } catch (e) {
    console.error("Failed to serve brochure:", e);
    return NextResponse.json(
      { message: "Brochure not found" },
      { status: 404 }
    );
  }
}
