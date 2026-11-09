import fs from "node:fs";
import path from "node:path";

/**
 * The hero background plate.
 *
 * Noe art-directs this image himself (cyberspace / cyberpunk, his persona in
 * it), so the site must not break while it does not exist yet. Drop a file at
 * one of the paths below, rebuild, and the hero picks it up. With nothing
 * there, the hero falls back to the lit-panel gradient and still reads as
 * finished rather than as a missing image.
 *
 * Wants a wide plate, 2400x1350 or larger, dark, with the left third close to
 * black: the headline sits over that side.
 */
const CANDIDATES = ["header.jpg", "header.png", "header.webp"];

function findPlate(): string | null {
  for (const name of CANDIDATES) {
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

export const heroPlate = findPlate();
