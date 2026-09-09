import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const siteUrl = "https://studidiavvocati.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Studi Di Avvocati — Avv. Nicola Giusteschi Conti | La Spezia",
    template: "%s | Studi Di Avvocati",
  },
  description:
    "Studio legale a La Spezia dal 2000. Diritto civile, penale, commerciale, internazionale e amministrativo. Etica, rispetto, risultati — per clienti privati e studi legali italiani ed esteri.",
  keywords: [
    "studio legale La Spezia",
    "avvocato La Spezia",
    "Nicola Giusteschi Conti",
    "diritto civile La Spezia",
    "diritto penale La Spezia",
    "diritto internazionale",
    "avvocato diritto commerciale",
  ],
  authors: [{ name: "Studi Di Avvocati" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Studi Di Avvocati",
    title: "Studi Di Avvocati — Avv. Nicola Giusteschi Conti | La Spezia",
    description:
      "Studio legale a La Spezia dal 2000. Etica, rispetto, risultati — per clienti privati e studi legali italiani ed esteri.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studi Di Avvocati — La Spezia",
    description: "Studio legale a La Spezia dal 2000. Etica, rispetto, risultati.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0E2A4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={roboto.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Vai al contenuto
        </a>
        {children}
      </body>
    </html>
  );
}
