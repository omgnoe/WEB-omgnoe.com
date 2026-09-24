import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";
import { services } from "@/lib/services";

const SITE = "https://omgnoe.com";

export const metadata: Metadata = {
  title: "Services: apps, websites, security, hosting & IT",
  description:
    "Everything I offer as a developer in Luxembourg: iOS and Android apps, app publishing, websites and shops, IT support, cybersecurity, managed hosting and my own products.",
  alternates: { canonical: `${SITE}/services` },
  openGraph: {
    type: "website",
    url: `${SITE}/services`,
    title: "Services | Noe Nei",
    description:
      "iOS and Android apps, app publishing, websites, IT support, cybersecurity and managed hosting from Luxembourg.",
  },
};

export default function ServicesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services by Noe Nei",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE}/services/${s.slug}`,
    })),
  };

  return (
    <main className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <section className="stage relative overflow-hidden">
        <div className="dots absolute inset-0" />
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-14 sm:pt-20">
          <p className="kicker rise">Services</p>
          <h1 className="font-display rise mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Everything digital,
            <br />
            <span className="underline-swipe">from one person.</span>
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-muted">
            No agency overhead, no handoffs. I design, build, publish, secure and host,
            and you always talk to the person doing the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 80}>
              <Link href={`/services/${s.slug}`} className="card card-hover group flex h-full gap-5 p-6 sm:p-7">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-paper"
                  style={{ color: s.accent === "#171410" ? undefined : s.accent }}
                >
                  <ServiceIcon name={s.icon} className="h-5.5 w-5.5" />
                </span>
                <div className="flex flex-1 flex-col">
                  <h2 className="font-display text-xl font-bold">{s.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                  <p className="mt-3 text-xs text-muted">{s.proof}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    Details, scope & FAQ
                    <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform group-hover:translate-x-1" fill="none" aria-hidden>
                      <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="card-night relative overflow-hidden rounded-[2.25rem] px-6 py-14 text-center">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(55% 70% at 50% 120%, rgba(255,90,31,0.3), transparent 70%)" }}
            />
            <h2 className="font-display relative text-3xl font-bold text-white">Not sure which one you need?</h2>
            <p className="relative mx-auto mt-3 max-w-md text-white/65">
              Describe the problem in one email. I&apos;ll tell you what it takes, what it
              costs and how fast it ships.
            </p>
            <div className="relative mt-7">
              <ObfuscatedEmail className="btn btn-accent !px-7 !py-3.5" label="Email me" />
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
