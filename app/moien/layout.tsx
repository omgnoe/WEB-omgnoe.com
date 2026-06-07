import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./moien.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE = "https://moien.omgnoe.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Moien — Léier Lëtzebuergesch | Gëff deng Stëmm",
  description:
    "Moien ass déi nei App fir Lëtzebuergesch ze léieren. Maach mat: hëllef der App eng Stëmm ze ginn — huel A1.1-Wierder op, direkt am Browser. Merci!",
  alternates: { canonical: SITE },
  icons: {
    icon: "/moien/appicon-180.png?v=2",
    apple: "/moien/appicon-180.png?v=2",
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Moien",
    title: "Moien — Léier Lëtzebuergesch. Gëff der App deng Stëmm.",
    description:
      "Hëllef Moien, déi cutste App fir Lëtzebuergesch ze léieren. Huel Wierder op — direkt am Browser, an e puer Minutten.",
    images: ["/moien/appicon.png?v=2"],
  },
  robots: { index: true, follow: true },
};

export default function MoienLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`moien-root ${baloo.variable}`}>{children}</div>
  );
}
