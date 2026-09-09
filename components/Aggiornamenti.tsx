import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { IconArrowUpRight } from "./icons";

const ARTICLES = [
  {
    tag: "Legal",
    date: "14 febbraio 2023",
    title: "Truffa su internet",
    excerpt:
      "Come tutelarsi in caso di truffa online: l'atto di denuncia-querela alla Procura della Repubblica presso il Tribunale della Spezia e i passi da seguire.",
    href: "https://studidiavvocati.com/2023/02/14/truffa-su-internet/",
  },
  {
    tag: "Legal",
    date: "9 febbraio 2023",
    title: "L'avvocato e gli ADR: profili deontologici e compenso",
    excerpt:
      "Appunti dall'intervento al convegno su ADR — risoluzione alternativa delle controversie — tra profili deontologici e determinazione del compenso professionale.",
    href: "https://studidiavvocati.com/2023/02/09/lavvocato-e-gli-adr-profili-deontologici-e-compenso/",
  },
  {
    tag: "Legal",
    date: "20 novembre 2019",
    title: "Giudizio di Legittimità Costituzionale in via Incidentale",
    excerpt:
      "Presidente Lattanzi, redattore Morelli. Udienza pubblica del 18 giugno 2019: decisione, deposito e pubblicazione in Gazzetta Ufficiale.",
    href: "https://studidiavvocati.com/2019/11/20/giudizio-di-legittimita-costituzionale-in-via-incidentale-2/",
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
              <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-light leading-tight text-navy sm:text-4xl">
                Aggiornamenti dal nostro tavolo di lavoro.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-1 gap-x-8 md:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Reveal key={article.title} delay={i * 0.08}>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col border-b border-line py-10 md:py-12"
              >
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em] text-ember">
                  <span>{article.tag}</span>
                  <span className="h-1 w-1 rounded-full bg-ember/50" />
                  <span className="text-muted">{article.date}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium leading-snug text-navy transition-colors group-hover:text-ember">
                  {article.title}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">
                  {article.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-ink">
                  Leggi l&rsquo;articolo
                  <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
