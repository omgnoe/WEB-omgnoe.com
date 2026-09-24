import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

/** Simple in-memory rate limit: max N submissions per IP per window. */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) {
    hits.set(ip, arr);
    return true;
  }
  arr.push(now);
  hits.set(ip, arr);
  return false;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 120);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const company = String(body.company ?? "").trim().slice(0, 120);
  const phone = String(body.phone ?? "").trim().slice(0, 40);
  const service = String(body.service ?? "").trim().slice(0, 80);
  const budget = String(body.budget ?? "").trim().slice(0, 60);
  const timeline = String(body.timeline ?? "").trim().slice(0, 60);
  const message = String(body.message ?? "").trim().slice(0, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please fill in name, a valid email and a message." },
      { status: 400 }
    );
  }

  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";
  if (limited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later or email me directly." },
      { status: 429 }
    );
  }

  if (!token || !chatId) {
    console.error("contact: TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID not configured");
    return NextResponse.json(
      { ok: false, error: "Sending is temporarily unavailable. Please email me directly." },
      { status: 500 }
    );
  }

  const text = [
    "<b>New project inquiry via omgnoe.com</b>",
    "",
    `<b>Name:</b> ${esc(name)}`,
    `<b>Email:</b> ${esc(email)}`,
    phone ? `<b>Phone:</b> ${esc(phone)}` : null,
    company ? `<b>Company:</b> ${esc(company)}` : null,
    service ? `<b>Needs:</b> ${esc(service)}` : null,
    budget ? `<b>Budget:</b> ${esc(budget)}` : null,
    timeline ? `<b>Timeline:</b> ${esc(timeline)}` : null,
    "",
    `<b>Message:</b>`,
    esc(message),
  ]
    .filter((l) => l !== null)
    .join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });

  if (!res.ok) {
    console.error("contact: telegram send failed", res.status, await res.text());
    return NextResponse.json(
      { ok: false, error: "Sending failed. Please email me directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
