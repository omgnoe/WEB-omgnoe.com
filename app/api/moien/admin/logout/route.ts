import { NextResponse } from "next/server";
import { MOIEN_COOKIE } from "@/lib/moien-auth";

export const runtime = "nodejs";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(MOIEN_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
