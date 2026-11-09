import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

/**
 * The hero background plates.
 *
 * Two of them, because a 16:9 plate cropped into a tall phone hero throws away
 * the subject and keeps the empty sky. Art direction, not just a resize: the
 * wide plate keeps its left third near black for the headline, the tall plate
 * keeps its top third near black for the same reason.
 *
 * Each URL carries a hash of the file's own bytes. Without it, replacing a
 * plate under the same filename changes nothing anyone can see: next/image
 * serves it through `/_next/image?url=/hero/header.jpg&w=...`, which is byte for
 * byte the same URL for every version of the file, and that URL is cached by
 * the image optimizer, by Cloudflare for four hours, and by the visitor's
 * browser. Replacing the file silently ships the old picture. The hash makes
 * every new plate a genuinely new URL, so no cache anywhere can hold the old
 * one and no purge is needed (the Cloudflare token has no purge permission).
 *
 * Either file can be absent. With nothing there the hero falls back to the
 * lit-panel gradient and still reads as finished rather than as a broken image.
 * See public/hero/README.md for what the layout needs from a replacement.
 */
function find(names: string[]): string | null {
  for (const name of names) {
    const file = path.join(process.cwd(), "public", "hero", name);
    try {
      const bytes = fs.readFileSync(file);
      const hash = crypto.createHash("sha1").update(bytes).digest("hex").slice(0, 8);
      return `/hero/${name}?v=${hash}`;
    } catch {
      /* missing or unreadable: try the next extension, then the gradient */
    }
  }
  return null;
}

/** Wide plate, used from the `sm` breakpoint up. */
export const heroPlate = find(["header.jpg", "header.png", "header.webp"]);

/** Tall plate for phones. Falls back to the wide one if it is not there. */
export const heroPlateMobile =
  find(["header-mobile.jpg", "header-mobile.png", "header-mobile.webp"]) ?? heroPlate;
