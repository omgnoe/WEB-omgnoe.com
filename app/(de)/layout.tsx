import type { Metadata } from "next";
import "../globals.css";
import { fontVars } from "@/lib/fonts";
import { rootMetadata } from "@/lib/metadata";
import { HTML_LANG } from "@/lib/i18n";
import { siteGraph } from "@/lib/schema";

const LOCALE = "de" as const;

export const metadata: Metadata = rootMetadata(LOCALE);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={HTML_LANG[LOCALE]} className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph(LOCALE)) }}
        />
        {children}
      </body>
    </html>
  );
}
