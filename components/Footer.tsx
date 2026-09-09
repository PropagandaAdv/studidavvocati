import { Container } from "./ui/Container";
import { IconLinkedIn } from "./icons";

const QUICK_LINKS = [
  { href: "#studio", label: "Chi siamo" },
  { href: "#competenze", label: "Competenze" },
  { href: "#attivita", label: "Articoli" },
  { href: "#contatti", label: "Contatti" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-2xl font-bold">Studi Di Avvocati</p>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper/60">
              La soluzione studiata e preparata da giuristi che collaborano per la
              risoluzione delle vertenze, nel reciproco rispetto delle posizioni.
            </p>
            <a
              href="https://it.linkedin.com/in/nicolagiusteschiconti"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-paper/70 transition-colors hover:border-ember hover:text-ember"
              aria-label="Profilo LinkedIn di Nicola Giusteschi Conti"
            >
              <IconLinkedIn className="h-4 w-4" />
            </a>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/40">Quick links</p>
            <ul className="mt-6 space-y-3 text-[15px] text-paper/75">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-ember">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/40">Contatti</p>
            <ul className="mt-6 space-y-3 text-[15px] text-paper/75">
              <li>Via Persio, 3 &mdash; 19121 La Spezia</li>
              <li>
                <a href="tel:+390187777181" className="transition-colors hover:text-ember">
                  0187 777181
                </a>
              </li>
              <li>
                <a
                  href="mailto:ngconti@studidiavvocati.com"
                  className="transition-colors hover:text-ember"
                >
                  ngconti@studidiavvocati.com
                </a>
              </li>
              <li className="text-paper/50">Lun&ndash;Ven, 8:30&ndash;12:30 &middot; 15:00&ndash;19:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-line-dark pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-paper/40">
            Avvertenza: quanto pubblicato su questo sito non riveste carattere
            pubblicitario, ma ha lo scopo di informare sulle attività esercitate dallo
            studio. Tale informazione è resa possibile dall&rsquo;art. 17 del Codice
            Deontologico Forense, modificato dal Consiglio Nazionale Forense in data 16
            ottobre 1999.
          </p>
          <p className="mt-6 text-xs text-paper/40">
            &copy; {new Date().getFullYear()} Studi Di Avvocati &mdash; Nicola Giusteschi
            Conti. Tutti i diritti riservati.
          </p>
        </div>
      </Container>
    </footer>
  );
}
