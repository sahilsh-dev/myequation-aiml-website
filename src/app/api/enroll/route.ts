import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const enrollSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9+\-()\s]{7,20}$/,
      "Phone can include digits, spaces, +, -, () and must be 7-20 chars"
    ),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const data = enrollSchema.parse(json);

    // Demo persistence: log to server. Replace with DB, email, or webhook as needed.
    console.log("[Enrollment] New submission:", data);

    return NextResponse.json(
      { success: true, message: "Enrollment submitted successfully" },
      { status: 201 }
    );
  } catch (err: unknown) {
    if (err && typeof err === "object" && "issues" in (err as any)) {
      const zErr = err as z.ZodError;
      return NextResponse.json(
        { success: false, errors: zErr.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error("[Enrollment] Error:", err);
    return NextResponse.json(
      { success: false, message: "Unexpected server error" },
      { status: 500 }
    );
  }
}
