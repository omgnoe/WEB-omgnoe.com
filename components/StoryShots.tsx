import Image from "next/image";
import type { Shot } from "@/lib/story";

/**
 * Archive strip for a story chapter. The source material is mostly low-res
 * press and campaign artwork, so the frames stay deliberately small and the
 * strip scrolls horizontally instead of stretching anything past its pixels.
 */

const FRAME: Record<Shot["kind"], string> = {
  photo: "aspect-[3/2] w-52 sm:w-60",
  square: "aspect-square w-40 sm:w-48",
  app: "aspect-[9/19.5] w-28 sm:w-32",
  logo: "aspect-[3/2] w-40 sm:w-48",
};

export default function StoryShots({ shots, dark = false }: { shots: Shot[]; dark?: boolean }) {
  return (
    <div className="no-scrollbar -mx-6 mt-7 overflow-x-auto px-6 sm:-mx-9 sm:px-9">
      <ul className="flex w-max items-end gap-3.5">
        {shots.map((s) => (
          <li key={s.src} className="shrink-0">
            <div
              className={`relative overflow-hidden rounded-2xl border ${FRAME[s.kind]} ${
                dark
                  ? "border-white/12 bg-white/5"
                  : s.kind === "logo"
                    ? "border-line bg-card"
                    : "border-line bg-paper-deep"
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 50vw, 260px"
                className={s.kind === "logo" ? "object-contain p-5" : "object-cover"}
              />
            </div>
            <p
              className={`mt-2 max-w-[13rem] font-mono text-[0.62rem] uppercase tracking-[0.14em] ${
                dark ? "text-white/40" : "text-muted"
              }`}
            >
              {s.caption}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
