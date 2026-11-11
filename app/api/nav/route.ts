import { NextResponse } from "next/server";
import { getAllWork } from "@/lib/projects";
import { getServices } from "@/lib/services";
import {
  aboutPath,
  contactPath,
  homePath,
  locales,
  servicePath,
  servicesPath,
  workItemPath,
  workPath,
  type Locale,
} from "@/lib/i18n";
import { dict } from "@/lib/ui";

export const dynamic = "force-static";

/**
 * The jump index behind the header's command palette.
 *
 * Served from a route rather than imported into the header, which is a client
 * component: importing the service and project data there would ship the whole
 * localised content layer in the client bundle to power a keyboard shortcut.
 * This way it costs one small request, and only when somebody opens it.
 */
export function GET(request: Request) {
  const asked = new URL(request.url).searchParams.get("locale");
  const locale: Locale = (locales as readonly string[]).includes(asked ?? "")
    ? (asked as Locale)
    : "en";

  const t = dict(locale);
  const body = {
    groups: [
      {
        label: t.nav.services,
        items: [
          { href: servicesPath(locale), label: t.common.allServices },
          ...getServices(locale).map((s) => ({ href: servicePath(locale, s.slug), label: s.name })),
        ],
      },
      {
        label: t.nav.work,
        items: [
          { href: workPath(locale), label: t.common.allWork },
          ...getAllWork(locale).map((w) => ({ href: workItemPath(locale, w.slug), label: w.name })),
        ],
      },
      {
        label: t.menu.home,
        items: [
          { href: homePath(locale), label: t.common.home },
          { href: aboutPath(locale), label: t.nav.about },
          { href: contactPath(locale), label: t.nav.contact },
        ],
      },
    ],
  };

  return NextResponse.json(body, {
    headers: { "cache-control": "public, max-age=3600, s-maxage=86400" },
  });
}
