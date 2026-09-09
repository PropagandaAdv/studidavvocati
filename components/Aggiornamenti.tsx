import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { IconArrowUpRight, IconPlus } from "./icons";

const ARTICLES = [
  {
    tag: "Penale",
    date: "14 febbraio 2023",
    title: "Truffa su internet",
    href: "https://studidiavvocati.com/2023/02/14/truffa-su-internet/",
    image: "/generated/news-truffa.jpg",
  },
  {
    tag: "Civile",
    date: "9 febbraio 2023",
    title: "L'avvocato e gli ADR: profili deontologici e compenso",
    href: "https://studidiavvocati.com/2023/02/09/lavvocato-e-gli-adr-profili-deontologici-e-compenso/",
    image: "/generated/news-adr.jpg",
  },
  {
    tag: "Amministrativo",
    date: "20 novembre 2019",
    title: "Giudizio di Legittimità Costituzionale in via Incidentale",
    href: "https://studidiavvocati.com/2019/11/20/giudizio-di-legittimita-costituzionale-in-via-incidentale-2/",
    image: "/generated/news-costituzionale.jpg",
  },
];

export function Aggiornamenti() {
  return (
    <section id="attivita" className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">03 — Attività dello studio</p>
              <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                Aggiornamenti dal nostro tavolo di lavoro.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.08} className={i === 2 ? "sm:col-span-2" : undefined}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`group relative isolate flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[24px] p-7 sm:p-8 ${
                  i === 2 ? "sm:aspect-[21/9]" : ""
                }`}
              >
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="photo-mono -z-10 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy/90 via-navy/25 to-navy/5" />

                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ember px-3.5 py-1.5 text-xs font-medium text-paper">
                    <IconPlus className="h-3 w-3" />
                    {article.tag}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-paper/80">
                    {article.date}
                  </span>
                </div>

                <div>
                  <h3 className="max-w-sm text-balance font-display text-xl font-bold leading-snug text-paper sm:text-2xl">
                    {article.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-paper/90">
                    Leggi l&rsquo;articolo
                    <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-8 flex justify-end">
            <a
              href="https://studidiavvocati.com"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-navy transition-colors hover:text-ember"
            >
              Vedi tutti gli aggiornamenti
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
