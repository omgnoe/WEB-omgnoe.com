import { allWork } from "@/lib/projects";
import { services } from "@/lib/services";

const SITE = "https://omgnoe.com";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    "# Noe Nei (omgnoe.com)",
    "",
    "> Noe Nei is a full-stack developer and founder based in Luxembourg. He designs,",
    "> builds and operates digital products end to end: iOS and Android apps, websites,",
    "> online shops, web platforms, app publishing, IT support, cybersecurity and",
    "> managed EU hosting. He runs his own products (Salonify, LUXPOS, BoxBee,",
    "> Doctomap, DepotGest, TTA Technologies) and takes on client projects across",
    "> Luxembourg and Europe. Contact via the form at https://omgnoe.com/#contact.",
    "",
    "Languages: English, German, French, Luxembourgish.",
    "Biography: born 9 March 2002 in Luxembourg. Started paid creative work at 14,",
    "founded his media agency Fapic at 18 (2020 to 2024), launched the 24/7 delivery",
    "service Umarket, lost the company and rebuilt as a developer. Head Developer at",
    "DSP Invest Sarl since 2024, leading Doctomap. Full story: " + SITE + "/about.",
    "Clients and organisations he has worked with include Wolt, the Government of the",
    "Grand Duchy of Luxembourg, OGBL, SaniSure, Cepa, LTPS, Vinoteca, Promopharm,",
    "Dynapharm, Luxtex and DSP.",
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.title}](${SITE}/services/${s.slug}): ${s.short}`),
    "",
    "## Own products",
    "",
    ...allWork
      .filter((w) => w.kind === "personal")
      .map((w) => `- [${w.name}](${SITE}/work/${w.slug}): ${w.description}${w.url ? ` Live: ${w.url}` : ""}`),
    "",
    "## Client work",
    "",
    ...allWork
      .filter((w) => w.kind === "client")
      .map((w) => `- [${w.name}](${SITE}/work/${w.slug}): ${w.description}`),
    "",
    "## Key pages",
    "",
    `- [Home](${SITE}/): overview, portfolio and contact form`,
    `- [Services](${SITE}/services): all services with scope and FAQ`,
    `- [Work](${SITE}/work): full portfolio with case studies`,
    `- [About & CV](${SITE}/about): full biography, career timeline, experience, stack, education and certifications`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
