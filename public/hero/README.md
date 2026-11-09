# Hero plates

Two files, because one 16:9 image cropped into a tall phone hero keeps the empty
sky and throws away the subject.

| File                | Ratio | Used        | Needs                                   |
| ------------------- | ----- | ----------- | --------------------------------------- |
| `header.jpg`        | 16:9  | `sm` and up | left third near black, subject centre-right |
| `header-mobile.jpg` | 3:4   | phones      | top third near black, subject lower two thirds |

`.png` and `.webp` work too. `lib/hero.ts` picks whichever exists at build time;
with the mobile plate missing the wide one is used everywhere, and with both
missing the hero falls back to the gradient and still looks finished.

Both must be dark overall. The page background is `#0a0b0c`, so a plate that
sits in that family reads as one surface rather than as a pasted-in picture. The
near-black region is where the headline, the lead and the buttons sit, and a
scrim alone will not rescue a busy one. No text or logos in the image: the page
supplies all of those.

Current pair: Higgsfield Soul 2.0 on Noe's trained character, generated
2026-11-09. Export as JPEG around quality 86, not PNG: these ship in the hero of
a page that sells fast sites.
