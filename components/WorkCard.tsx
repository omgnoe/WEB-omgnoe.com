import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/lib/projects";

function hostOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

export default function WorkCard({ item }: { item: WorkItem }) {
  const own = item.kind === "personal";
  const host = hostOf(item.url);

  return (
    <Link href={`/work/${item.slug}`} className="group block h-full">
      <article className="card card-hover relative flex h-full flex-col overflow-hidden">
        {/* Screenshot in a browser frame */}
        <div className="p-2.5 pb-0">
          <div className="overflow-hidden rounded-[1.15rem] border border-line">
            <div className="browser-bar">
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-dot" />
              {host && (
                <span className="ml-2 truncate font-mono text-[0.65rem] text-muted">{host}</span>
              )}
            </div>
            <div className="shot-frame relative aspect-[16/10] w-full">
              {item.shot ? (
                <Image
                  src={item.shot}
                  alt={`${item.name} website screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              ) : (
                <div
                  className="absolute inset-0 grid place-items-center"
                  style={{ background: `linear-gradient(135deg, ${item.accent}22, ${item.accent}08)` }}
                >
                  {item.logo && (
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={72}
                      height={72}
                      className="h-16 w-16 object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {item.logo && (
                <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-paper">
                  <Image
                    src={item.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-6 w-6 object-contain"
                  />
                </span>
              )}
              <div>
                <h3 className="font-display text-lg font-bold leading-tight">{item.name}</h3>
                <p className="text-xs text-muted">{item.tagline}</p>
              </div>
            </div>
            <span
              className={`pill shrink-0 !text-[0.65rem] font-semibold uppercase tracking-wide ${
                own ? "!border-transparent !bg-accent !text-white" : "!bg-paper text-muted"
              }`}
            >
              {own ? "Own product" : "Client work"}
            </span>
          </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.slice(0, 4).map((t) => (
              <span key={t} className="pill pill-muted !py-1 !text-[0.7rem]">
                {t}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
            View case study
            <span className="grid h-6 w-6 place-items-center rounded-full bg-paper transition-all group-hover:bg-accent group-hover:text-white">
              <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" aria-hidden>
                <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
