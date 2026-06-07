import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/moien-auth";
import { getSubmission, readAudio } from "@/lib/moien-store";

export const runtime = "nodejs";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const sub = await getSubmission(id);
  if (!sub) return NextResponse.json({ error: "not found" }, { status: 404 });

  try {
    const buf = await readAudio(sub);
    return new NextResponse(new Uint8Array(buf), {
      headers: {
        "Content-Type": sub.mime || "application/octet-stream",
        "Content-Length": String(buf.length),
        "Cache-Control": "private, no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "file missing" }, { status: 404 });
  }
}
