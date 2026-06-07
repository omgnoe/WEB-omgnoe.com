import { NextRequest, NextResponse } from "next/server";

// Serve the Moien microsite on moien.omgnoe.com while it physically lives
// under /moien in the omgnoe Next.js app. Internal links use /moien/... so they
// resolve on both omgnoe.com/moien and moien.omgnoe.com/moien/...
export function proxy(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  if (!host.startsWith("moien.")) return NextResponse.next();

  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/moien") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/moien${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
