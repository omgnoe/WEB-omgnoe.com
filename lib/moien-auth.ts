import crypto from "crypto";
import { cookies } from "next/headers";

export const MOIEN_COOKIE = "moien_admin";

export function adminPassword(): string {
  return process.env.MOIEN_ADMIN_PASSWORD || "moien-admin";
}

export function tokenFor(pw: string): string {
  const secret = process.env.MOIEN_ADMIN_SECRET || "moien-secret-salt";
  return crypto.createHmac("sha256", secret).update(pw).digest("hex");
}

export function expectedToken(): string {
  return tokenFor(adminPassword());
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(MOIEN_COOKIE)?.value;
  if (!c) return false;
  const exp = expectedToken();
  try {
    return crypto.timingSafeEqual(Buffer.from(c), Buffer.from(exp));
  } catch {
    return false;
  }
}
