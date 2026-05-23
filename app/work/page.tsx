import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import { projects, clients } from "@/lib/projects";

const SITE = "https://omgnoe.com";

export const metadata: Metadata = {
  title: "Work — products & client projects",
  description:
    "Selected work by Noe Nei — products built end-to-end (Salonify, Luxpos, Doctomap, EchoChat, RookieJobs, SellOut AI) and client websites, shops and platforms across Luxembourg & Europe.",
  alternates: { canonical: `${SITE}/work` },
  openGraph: {
    type: "website",
    url: `${SITE}/work`,
    title: "Work — Noe Nei",
    description:
      "Products built end-to-end and client websites, shops and platforms across Luxembourg & Europe.",
  },
};

export default function WorkIndex() {
  return (
    <main className="relative">
      <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/" className="flex items-center" aria-label="omgnoe — home">
            <Image src="/omgnoe-logo.png" alt="omgnoe" width={144} height={34} className="h-6 w-auto" />
          </Link>
          <Link href="/" className="text-sm text-muted transition-colors hover:text-fg">
            ← Home
          </Link>
        </div>
      </header>

      <section className="bg-aura relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">All work</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="chrome">Products &amp; client projects</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Things I&apos;ve designed, built and shipped — my own products and work delivered for
            clients across Luxembourg and Europe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">Products</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.slug} item={p} />
          ))}
        </div>

        <h2 className="mb-8 mt-20 text-2xl font-semibold tracking-tight">Client work</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <WorkCard key={c.slug} item={c} />
          ))}
        </div>
      </section>
    </main>
  );
}
