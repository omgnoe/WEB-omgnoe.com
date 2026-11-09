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
 * Either file can be absent. With nothing there the hero falls back to the
 * lit-panel gradient and still reads as finished rather than as a broken image.
 * See public/hero/README.md for what the layout needs from a replacement.
 */
function find(names: string[]): string | null {
  for (const name of names) {
    try {
      if (fs.existsSync(path.join(process.cwd(), "public", "hero", name))) {
        return `/hero/${name}`;
      }
    } catch {
      /* a read failure is the same as no plate: fall through to the gradient */
    }
  }
  return null;
}

/** Wide plate, used from the `sm` breakpoint up. */
export const heroPlate = find(["header.jpg", "header.png", "header.webp"]);

/** Tall plate for phones. Falls back to the wide one if it is not there. */
export const heroPlateMobile =
  find(["header-mobile.jpg", "header-mobile.png", "header-mobile.webp"]) ?? heroPlate;
