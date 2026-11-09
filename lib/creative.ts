/** Companies and organisations Noe has worked with or delivered for. */
export type TrustedLogo = {
  name: string;
  src: string;
  /** Rendered height in px inside the strip. Uniform: optical balance is baked
   *  into the assets, which are all fitted inside the same 520x140 canvas. */
  h: number;
};

/**
 * All raster logos are white-on-transparent, fitted inside a 520x140 canvas.
 *
 * They were regenerated for the dark substrate in Nov 2026. The previous set was
 * prepared for the light site with an edge-flood, which left interior and boxed
 * backgrounds opaque: under a CSS invert those turned into solid white slabs
 * (Luxtex, which is blue lettering on a yellow block, was the worst). Do not
 * re-run an edge-flood on these; they are already flat white with real alpha.
 */
export const trustedBy: TrustedLogo[] = [
  { name: "Wolt", src: "/trusted/wolt.png", h: 44 },
  { name: "Le Gouvernement du Grand-Duché de Luxembourg", src: "/trusted/gouvernement.png", h: 44 },
  { name: "OGBL", src: "/trusted/ogbl.svg", h: 44 },
  { name: "SaniSure", src: "/trusted/sanisure.png", h: 44 },
  { name: "Cepa asbl", src: "/trusted/cepa.png", h: 44 },
  { name: "LTPS", src: "/trusted/ltps.png", h: 44 },
  { name: "Vinoteca Luxembourg", src: "/trusted/vinoteca.png", h: 44 },
  { name: "Promopharm", src: "/trusted/promopharm.png", h: 44 },
  { name: "Dynapharm", src: "/trusted/dynapharm.png", h: 44 },
  { name: "Luxtex", src: "/trusted/luxtex.png", h: 44 },
  { name: "DSP", src: "/trusted/dsp.png", h: 44 },
];

/** Ad & social designs (Salonify campaigns) for the creative strip. */
export const designShots: string[] = [
  "/creative/design-01.jpg",
  "/creative/design-02.jpg",
  "/creative/design-03.jpg",
  "/creative/design-04.jpg",
  "/creative/design-05.jpg",
  "/creative/design-06.jpg",
  "/creative/design-07.jpg",
  "/creative/design-08.jpg",
  "/creative/design-09.jpg",
  "/creative/design-10.jpg",
];

export type VideoRef = {
  id: string;
  title: string;
  role: string;
};

export const videoRefs: VideoRef[] = [
  {
    id: "5aQN5VgnUiw",
    title: "Dany le loup & DJ Headmasta: Le chant des travailleurs",
    role: "Music video",
  },
  {
    id: "n9JHDdQ7yDY",
    title: "LUNA144: Vamonos",
    role: "Music video",
  },
];
