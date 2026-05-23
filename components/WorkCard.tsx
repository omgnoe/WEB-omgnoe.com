import Image from "next/image";
import Link from "next/link";
import type { WorkItem } from "@/lib/projects";

export default function WorkCard({ item }: { item: WorkItem }) {
  const isClient = item.kind === "client";

  return (
    <Link href={`/work/${item.slug}`} className="group block h-full">
      <article className="glass glass-hover relative flex h-full flex-col overflow-hidden rounded-2xl">
        <div
          className="pointer-events-none absolute -right-16 -top-16 z-0 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
          style={{ background: item.accent }}
        />

        {isClient && item.shot && (
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
            <Image
              src={item.shot}
              alt={`${item.name} — screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 380px"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
          </div>
        )}

        <div className="relative z-10 flex flex-1 flex-col p-6">
          <div className="flex items-center gap-4">
            {!isClient && item.logo && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-line bg-bg-soft">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold leading-tight">{item.name}</h3>
              <p className="text-sm" style={{ color: item.accent }}>
                {item.tagline}
              </p>
            </div>
          </div>

          <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {(isClient ? item.role : item.tags).map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-white/60"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/80">
            View case study
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      </article>
    </Link>
  );
}
