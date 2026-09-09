import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Studio } from "@/components/Studio";
import { Competenze } from "@/components/Competenze";
import { Numeri } from "@/components/Numeri";
import { Aggiornamenti } from "@/components/Aggiornamenti";
import { Faq } from "@/components/Faq";
import { Contatti } from "@/components/Contatti";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Studi Di Avvocati",
  founder: "Nicola Giusteschi Conti",
  url: "https://studidiavvocati.com",
  telephone: "+39-0187-777181",
  email: "ngconti@studidiavvocati.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Persio, 3",
    postalCode: "19121",
    addressLocality: "La Spezia",
    addressCountry: "IT",
  },
  openingHours: "Mo-Fr 08:30-12:30,15:00-19:00",
  areaServed: ["IT", "EU"],
  knowsAbout: [
    "Diritto civile",
    "Diritto penale",
    "Diritto internazionale",
    "Diritto commerciale",
    "Diritto amministrativo",
    "Diritto tributario",
    "Diritto bancario",
    "Diritto del lavoro",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main">
        <Hero />
        <Studio />
        <Competenze />
        <Numeri />
        <Aggiornamenti />
        <Faq />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
