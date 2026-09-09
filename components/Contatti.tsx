"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { IconArrowUpRight, IconClock, IconMail, IconPhone, IconPin } from "./icons";

const AREE = [
  "Civile",
  "Penale",
  "Internazionale / UE",
  "Commerciale",
  "Amministrativo (TAR/CDS)",
  "Tributario, bancario e finanziario",
  "Lavoro e previdenziale",
  "Altro",
];

const CONTACT_EMAIL = "ngconti@studidiavvocati.com";

const inputClass =
  "w-full rounded-xl border border-line bg-paper px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-ember focus:outline-none";

export function Contatti() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const nome = String(form.get("nome") || "");
    const email = String(form.get("email") || "");
    const telefono = String(form.get("telefono") || "");
    const area = String(form.get("area") || "");
    const messaggio = String(form.get("messaggio") || "");

    const subject = `Richiesta di consulenza — ${area || "area non specificata"}`;
    const body = [
      `Nome: ${nome}`,
      `Email: ${email}`,
      telefono ? `Telefono: ${telefono}` : null,
      `Area di interesse: ${area}`,
      "",
      messaggio,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
    window.location.href = mailto;
  }

  return (
    <section id="contatti" className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">05 — Contatti</p>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-light leading-tight text-navy sm:text-4xl">
            Raccontaci il tuo caso.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="mb-2 block text-sm text-ink/70">
                    Nome e cognome
                  </label>
                  <input id="nome" name="nome" required className={inputClass} placeholder="Mario Rossi" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-ink/70">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="nome@esempio.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="mb-2 block text-sm text-ink/70">
                    Telefono <span className="text-muted">(facoltativo)</span>
                  </label>
                  <input id="telefono" name="telefono" className={inputClass} placeholder="+39 000 0000000" />
                </div>
                <div>
                  <label htmlFor="area" className="mb-2 block text-sm text-ink/70">
                    Area di interesse
                  </label>
                  <select id="area" name="area" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Seleziona un&rsquo;area
                    </option>
                    {AREE.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="messaggio" className="mb-2 block text-sm text-ink/70">
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Descrivi brevemente la tua richiesta…"
                />
              </div>

              <label className="flex items-start gap-3 text-[13px] leading-relaxed text-muted">
                <input
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded border-line text-ember focus:ring-ember"
                />
                Acconsento al trattamento dei miei dati personali per essere ricontattato
                in merito alla mia richiesta.
              </label>

              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-ember-dark"
              >
                Invia richiesta
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <p className="text-xs text-muted" aria-live="polite">
                {status === "sent"
                  ? "Si sta aprendo il tuo programma di posta con il messaggio precompilato."
                  : `L'invio apre il tuo programma di posta predefinito, con il messaggio indirizzato a ${CONTACT_EMAIL}.`}
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-[24px] border border-line bg-card/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/generated/contatti-mappa.jpg"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-8 sm:p-10">
              <p className="font-display text-xl font-medium text-navy">Studi Di Avvocati</p>
              <ul className="mt-8 space-y-6 text-[15px] text-ink/80">
                <li className="flex gap-4">
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <a
                    href="https://www.google.com/maps/place/Via+Persio+Aulo+Flacco,+3,+19121+La+Spezia+SP"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-ember"
                  >
                    Via Persio, 3<br />19121 La Spezia
                  </a>
                </li>
                <li className="flex gap-4">
                  <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <a href="tel:+390187777181" className="hover:text-ember">
                    0187 777181
                  </a>
                </li>
                <li className="flex gap-4">
                  <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-ember">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex gap-4">
                  <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-ember" />
                  <span>
                    Lun&ndash;Ven
                    <br />
                    8:30&ndash;12:30 &middot; 15:00&ndash;19:00
                  </span>
                </li>
              </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
