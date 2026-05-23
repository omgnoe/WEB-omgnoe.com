import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { allWork, getWork } from "@/lib/projects";

const SITE = "https://omgnoe.com";

export function generateStaticParams() {
  return allWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return {};

  const title = `${w.name} — ${w.tagline}`;
  const url = `${SITE}/work/${w.slug}`;
  const image = w.shot ?? "/opengraph-image";

  return {
    title,
    description: w.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: w.description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: w.description,
      images: [image],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();

  const others = allWork.filter((o) => o.slug !== w.slug && o.kind === w.kind).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: w.name,
    headline: `${w.name} — ${w.tagline}`,
    description: w.description,
    url: `${SITE}/work/${w.slug}`,
    ...(w.url ? { sameAs: w.url } : {}),
    creator: { "@type": "Person", name: "Noe Nei", url: SITE },
    keywords: w.tags.join(", "),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE}/work` },
      { "@type": "ListItem", position: 3, name: w.name, item: `${SITE}/work/${w.slug}` },
    ],
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
          <Link href="/" className="flex items-center" aria-label="omgnoe — home">
            <Image src="/omgnoe-logo.png" alt="omgnoe" width={144} height={34} className="h-6 w-auto" />
          </Link>
          <Link href="/work" className="text-sm text-muted transition-colors hover:text-fg">
            ← All work
          </Link>
        </div>
      </header>

      <article className="bg-aura relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
          {/* header */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: `${w.accent}1f`, color: w.accent }}
            >
              {w.kind === "client" ? "Client work" : "Product"}
            </span>
            {w.role.map((r) => (
              <span key={r} className="rounded-full border border-line px-3 py-1 text-xs text-white/60">
                {r}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            {w.kind !== "client" && w.logo && (
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-line bg-bg-soft">
                <Image src={w.logo} alt={`${w.name} logo`} fill sizes="56px" className="object-contain p-2" />
              </div>
            )}
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{w.name}</h1>
              <p className="mt-1 text-lg" style={{ color: w.accent }}>
                {w.tagline}
              </p>
            </div>
          </div>

          {/* visual */}
          {w.shot ? (
            <div className="glass mt-10 overflow-hidden rounded-2xl p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={w.shot}
                  alt={`${w.name} — screenshot`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          ) : null}

          {/* body */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {w.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-widest text-white/40">Scope</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.role.map((r) => (
                    <span key={r} className="rounded-full border border-line px-2.5 py-1 text-xs text-white/70">
                      {r}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs uppercase tracking-widest text-white/40">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-2.5 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
                {w.url && (
                  <a
                    href={w.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
                  >
                    Visit live site ↗
                  </a>
                )}
              </div>
            </aside>
          </div>

          {/* under the hood */}
          {w.highlights && w.highlights.length > 0 && (
            <div className="mt-16">
              <h2 className="text-sm font-mono uppercase tracking-widest text-muted">
                Under the hood
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {w.highlights.map((h, i) => (
                  <li key={i} className="glass flex items-start gap-3 rounded-2xl p-4">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: w.accent }}
                    />
                    <span className="text-sm leading-relaxed text-white/80">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      {/* more work */}
      {others.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-20">
          <h2 className="mb-8 text-2xl font-semibold tracking-tight">More {w.kind === "client" ? "client work" : "products"}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/work/${o.slug}`}
                className="glass glass-hover group rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: o.accent }}>
                  {o.name}
                </div>
                <p className="mt-1 text-xs text-muted">{o.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            <span className="chrome">Have a project like this?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            I build websites, platforms, shops and apps end-to-end. Tell me what you have in mind.
          </p>
          <div className="mt-7">
            <ObfuscatedEmail
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
              label="Email me →"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
