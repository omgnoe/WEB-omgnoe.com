/** Companies and organisations Noe has worked with or delivered for. */
export type TrustedLogo = {
  name: string;
  src: string;
  /** Rendered height in px inside the strip (logos vary wildly in ratio). */
  h: number;
};

/** All raster logos are normalised to a transparent 520x200 canvas. */
export const trustedBy: TrustedLogo[] = [
  { name: "Wolt", src: "/trusted/wolt.png", h: 56 },
  { name: "Le Gouvernement du Grand-Duché de Luxembourg", src: "/trusted/gouvernement.png", h: 56 },
  { name: "OGBL", src: "/trusted/ogbl.svg", h: 36 },
  { name: "SaniSure", src: "/trusted/sanisure.png", h: 56 },
  { name: "Cepa asbl", src: "/trusted/cepa.png", h: 56 },
  { name: "LTPS", src: "/trusted/ltps.png", h: 56 },
  { name: "Vinoteca Luxembourg", src: "/trusted/vinoteca.png", h: 56 },
  { name: "Promopharm", src: "/trusted/promopharm.png", h: 56 },
  { name: "Dynapharm", src: "/trusted/dynapharm.png", h: 56 },
  { name: "Luxtex", src: "/trusted/luxtex.png", h: 56 },
  { name: "DSP", src: "/trusted/dsp.png", h: 56 },
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
