"use client";

import { useEffect, useState } from "react";
import { dict } from "@/lib/ui";
import type { Locale } from "@/lib/i18n";

/**
 * The thinnest line on the site and the one that does the most work: it says
 * this is a running system, not a brochure. The clock is real Luxembourg time,
 * rendered only after mount so the server and the client never disagree.
 */
export default function StatusRail({ locale }: { locale: Locale }) {
  const t = dict(locale);
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Luxembourg",
          hour12: false,
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [locale]);

  return (
    <div className="rule-b jolt bg-void">
      <div className="mx-auto flex h-8 max-w-[90rem] items-center gap-4 px-4 sm:px-8">
        <span className="mono flicker flex items-center gap-2 text-dim">
          <span className="dot dot-live" aria-hidden />
          {t.rail.status}
        </span>
        <span className="mono ml-auto hidden text-faint sm:inline">{t.rail.location}</span>
        <span className="mono tnum text-faint" suppressHydrationWarning>
          {time ? `${t.rail.local} ${time}` : t.rail.location}
        </span>
      </div>
    </div>
  );
}
