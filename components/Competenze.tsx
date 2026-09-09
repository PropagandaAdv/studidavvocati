"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const AREAS = [
  {
    n: "01",
    title: "Civile",
    text: "Lo studio si occupa prevalentemente di diritto di famiglia e condominio, ma è in grado di assicurare consulenza accurata anche nelle altre branche del diritto civile, direttamente o con gli of counsels.",
    tags: ["Famiglia", "Condominio", "Infortunistica", "Recupero crediti", "Contrattualistica"],
  },
  {
    n: "02",
    title: "Penale",
    text: "Le competenze maturate negli anni coprono ogni ambito del diritto penale, dal penale ordinario alle materie più specialistiche.",
    tags: ["Penale militare", "Penale ambientale"],
  },
  {
    n: "03",
    title: "Internazionale / UE",
    text: "Lo studio si occupa di casi e progetti di diritto estero, diritto dell’Unione Europea e commercio internazionale.",
    tags: ["Commercio internazionale", "Diritto UE", "Europrogettazione"],
  },
  {
    n: "04",
    title: "Commerciale",
    text: "Revisione contratti — anche in lingua inglese — diritto d’impresa, dalla start-up all’e-commerce, sino alla gestione della crisi.",
    tags: ["Contrattualistica EN", "Start-up", "E-commerce", "Crisi d'impresa"],
  },
  {
    n: "05",
    title: "Consulenza",
    text: "Nuove forme di collaborazione con i clienti, orientate a soluzioni concrete: tecnologia, strategia e consulenti di altre materie, non solo l’aspetto legale.",
    tags: ["Bancario e finanziario", "Lavoro", "Previdenziale", "Tributario"],
  },
  {
    n: "06",
    title: "Altri Casi",
    text: "Non hai trovato il tuo caso? Prova a chiedere: magari lo abbiamo già affrontato.",
    tags: ["Amministrativo — TAR/CDS", "Navigazione", "Pubblico impiego", "Brevetti & IP", "Privacy", "Appalti"],
  },
];

export function Competenze() {
  return (
    <section id="competenze" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-[0.35] mix-blend-multiply sm:h-80">
        <Image
          src="/generated/competenze-linee.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-mono object-cover object-right"
        />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 border-b border-line pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">02 — Competenze</p>
              <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
                Sei aree, un solo metodo.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-muted">
              Diritto civile, penale, commerciale, amministrativo, tributario,
              bancario, del lavoro, previdenziale, della navigazione e pubblico
              impiego: ogni pratica trova la competenza giusta.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.n} delay={(i % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group h-full rounded-[24px] border border-line bg-card/40 p-8"
              >
                <span className="font-display text-sm font-bold text-ember">{area.n}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-navy transition-colors group-hover:text-ember">
                  {area.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{area.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
