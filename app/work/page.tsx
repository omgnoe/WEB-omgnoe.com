import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WorkGrid from "@/components/WorkGrid";
import { allWork } from "@/lib/projects";

const SITE = "https://omgnoe.com";

export const metadata: Metadata = {
  title: "Work: own products & client projects",
  description:
    "The full portfolio of Noe Nei: own products built and operated end to end (Salonify, LUXPOS, BoxBee, Doctomap, DepotGest, TTA) and client websites, shops and platforms across Luxembourg and Europe.",
  alternates: { canonical: `${SITE}/work` },
  openGraph: {
    type: "website",
    url: `${SITE}/work`,
    title: "Work | Noe Nei",
    description:
      "Own products and client websites, shops and platforms across Luxembourg and Europe.",
  },
};

export default function WorkIndex() {
  return (
    <main className="relative">
      <SiteHeader />

      <section className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pt-20">
          <p className="kicker rise">Portfolio</p>
          <h1 className="font-display rise mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Things I&apos;ve built
            <br />
            <span className="underline-swipe">and actually shipped.</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-muted">
            Own products I operate every day, and work delivered for clients across
            Luxembourg and Europe. Filter by type or technology.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Reveal>
          <WorkGrid items={allWork} />
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
