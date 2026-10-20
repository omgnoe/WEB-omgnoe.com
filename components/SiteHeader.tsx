"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  aboutPath,
  contactPath,
  homePath,
  locales,
  pathFor,
  servicesPath,
  workPath,
  LOCALE_LABEL,
  LOCALE_SHORT,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";

export default function SiteHeader({
  locale,
  pageKey,
}: {
  locale: Locale;
  /** Lets the language switcher point at the same page in the other language. */
  pageKey: PageKey;
}) {
  const [open, setOpen] = useState(false);
  const t = dict(locale);

  const nav = [
    { href: workPath(locale), label: t.nav.work },
    { href: servicesPath(locale), label: t.nav.services },
    { href: aboutPath(locale), label: t.nav.about },
    { href: contactPath(locale), label: t.nav.contact },
  ];

  const others = locales.filter((l) => l !== locale);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-14 items-center justify-between rounded-full border border-line bg-card/85 px-4 shadow-card backdrop-blur-xl sm:px-6">
          <Link
            href={homePath(locale)}
            className="flex items-center"
            aria-label={t.menu.home}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/omgnoe-logo.png"
              alt="omgnoe"
              width={144}
              height={34}
              priority
              className="logo-dark h-5 w-auto"
            />
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-muted sm:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="transition-colors hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {/* Language switcher: same page, other language. */}
            <div
              className="hidden items-center gap-1 rounded-full border border-line px-1.5 py-1 sm:flex"
              aria-label={t.menu.language}
            >
              <span className="px-1.5 text-xs font-bold text-ink">{LOCALE_SHORT[locale]}</span>
              {others.map((l) => (
                <Link
                  key={l}
                  href={pathFor(l, pageKey)}
                  hrefLang={l}
                  lang={l}
                  title={LOCALE_LABEL[l]}
                  className="rounded-full px-1.5 text-xs font-medium text-muted transition-colors hover:text-ink"
                >
                  {LOCALE_SHORT[l]}
                </Link>
              ))}
            </div>
            <Link
              href={contactPath(locale)}
              className="btn btn-ink !px-4 !py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              {t.nav.hire}
            </Link>
            <button
              type="button"
              aria-label={open ? t.menu.close : t.menu.open}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink sm:hidden"
            >
              <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" fill="none" aria-hidden>
                {open ? (
                  <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="card mt-2 overflow-hidden !rounded-3xl p-2 sm:hidden">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-paper"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-1 flex items-center gap-2 border-t border-line px-4 pt-3 pb-1">
              <span className="text-xs text-muted">{t.menu.language}</span>
              {locales.map((l) => (
                <Link
                  key={l}
                  href={pathFor(l, pageKey)}
                  hrefLang={l}
                  lang={l}
                  onClick={() => setOpen(false)}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
                    l === locale ? "bg-ink text-white" : "text-muted hover:text-ink"
                  }`}
                >
                  {LOCALE_SHORT[l]}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
