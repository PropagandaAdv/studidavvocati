"use client";

import { useId, useState } from "react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { IconPlus } from "./icons";

const FAQS = [
  {
    q: "Come si svolge una prima consulenza?",
    a: "Un primo colloquio, in studio alla Spezia o a distanza, per inquadrare la questione, valutarne i margini concreti e indicare i passi successivi — prima di qualsiasi impegno.",
  },
  {
    q: "Lo studio segue anche clienti privati e studi legali esteri?",
    a: "Sì. Accanto ai clienti privati, lo studio collabora con colleghi e studi legali italiani ed esteri su pratiche di diritto internazionale, UE e commercio internazionale, grazie anche alle competenze specifiche in europrogettazione e international relations management.",
  },
  {
    q: "In quali lingue è possibile essere assistiti?",
    a: "L'attività si svolge principalmente in italiano e in inglese, incluse la revisione e redazione di contratti in lingua inglese per operazioni commerciali e internazionali.",
  },
  {
    q: "Come vengono definiti i compensi professionali?",
    a: "In base alla natura e alla complessità della pratica, con un preventivo chiaro concordato prima dell'avvio dell'incarico — nel rispetto dei parametri forensi vigenti.",
  },
  {
    q: "È possibile richiedere una consulenza a distanza?",
    a: "Sì, la maggior parte dei primi colloqui e degli aggiornamenti sullo stato delle pratiche può avvenire da remoto, per videochiamata o telefono.",
  },
  {
    q: "Lo studio tratta anche pratiche di diritto amministrativo davanti a TAR e Consiglio di Stato?",
    a: "Sì, insieme al diritto civile, penale, commerciale, tributario, bancario, del lavoro, previdenziale, della navigazione e del pubblico impiego.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  const panelId = useId();

  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="font-display text-lg font-medium text-navy sm:text-xl">{q}</span>
        <IconPlus
          className={`h-5 w-5 shrink-0 text-ember transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        id={panelId}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-24 md:py-32">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">04 — Domande frequenti</p>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Le domande che ci fanno più spesso.
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
