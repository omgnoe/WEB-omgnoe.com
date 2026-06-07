import { NextRequest, NextResponse } from "next/server";
import { adminPassword, tokenFor, MOIEN_COOKIE } from "@/lib/moien-auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: { password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const pw = String(body.password || "");
  if (pw !== adminPassword()) {
    return NextResponse.json({ error: "Falscht Passwuert" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(MOIEN_COOKIE, tokenFor(pw), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
