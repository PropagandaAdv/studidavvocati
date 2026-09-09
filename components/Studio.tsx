import Image from "next/image";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { IconChevronRight, IconLinkedIn, IconMail, IconPhone } from "./icons";

const STUDIO_PHONE_HREF = "tel:+390187777181";
const STUDIO_EMAIL = "ngconti@studidiavvocati.com";

const TEAM = [
  {
    initials: "NGC",
    name: "Nicola Giusteschi Conti",
    roleLabel: "Avvocato, Fondatore",
    role: "Diritto civile, penale e amministrativo — giudice onorario dal 2016",
    photo: "/generated/nicola-conti.jpg",
    tone: "bg-ember/10 text-ember-dark",
    linkedin: "https://it.linkedin.com/in/nicolagiusteschiconti",
  },
  {
    initials: "AR",
    name: "Alberto Russo",
    roleLabel: "Avvocato",
    role: "Diritto internazionale, europrogettazione, international relations management",
    photo: null,
    tone: "bg-navy/10 text-navy",
    linkedin: null,
  },
  {
    initials: "RPD",
    name: "Raffaella Ponari Deslarzes",
    roleLabel: "Avvocata",
    role: "Diritto penale e tributario",
    photo: null,
    tone: "bg-ember/10 text-ember-dark",
    linkedin: null,
  },
];

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div className="flex h-full items-center gap-5 rounded-[24px] border border-line bg-card/40 p-6">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="80px"
            className="photo-mono object-cover object-top"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center font-display text-lg font-bold ${member.tone}`}
          >
            {member.initials}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-ember">{member.roleLabel}</p>
        <p className="mt-1 truncate font-display text-lg font-bold text-navy">{member.name}</p>
        <p className="mt-1 truncate text-[13px] leading-relaxed text-muted" title={member.role}>
          {member.role}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <a
            href={STUDIO_PHONE_HREF}
            aria-label={`Chiama lo studio per ${member.name}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ember text-paper transition-colors hover:bg-ember-dark"
          >
            <IconPhone className="h-3.5 w-3.5" />
          </a>
          <a
            href={`mailto:${STUDIO_EMAIL}`}
            aria-label={`Scrivi allo studio per ${member.name}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ember text-paper transition-colors hover:bg-ember-dark"
          >
            <IconMail className="h-3.5 w-3.5" />
          </a>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Profilo LinkedIn di ${member.name}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ember text-paper transition-colors hover:bg-ember-dark"
            >
              <IconLinkedIn className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      <a
        href="#contatti"
        aria-label={`Contatta lo studio per parlare con ${member.name}`}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-ember/10 hover:text-ember"
      >
        <IconChevronRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const CREDENTIALS = [
  "Avvocato dal 2000, esercita alla Spezia",
  "Giudice onorario, sezione penale del Tribunale di Parma, dal 2016",
  "Membro eletto del consiglio direttivo della Camera Civile della Spezia",
];

export function Studio() {
  return (
    <section id="studio" className="bg-paper py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-b border-line pb-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">01 — Chi siamo</p>
            <p className="hidden font-display text-sm text-muted sm:block">Lo studio</p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[0.55fr_0.45fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="text-balance font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.6rem]">
                Nato alla Spezia, con lo sguardo rivolto oltre i confini del Tribunale.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-col gap-6 text-lg leading-relaxed text-ink/75 sm:flex-row sm:gap-8">
                <div className="shrink-0 font-display text-5xl font-light text-ember/80">NGC</div>
                <div className="space-y-4">
                  <p>
                    Nicola Giusteschi Conti nasce e cresce alla Spezia, dove studia al
                    liceo classico prima di laurearsi in diritto urbanistico
                    all&rsquo;Università di Parma. Dal 2000 esercita la professione
                    forense nella sua città, portando nello studio un approccio che
                    unisce rigore accademico ed esperienza sul campo.
                  </p>
                  <p>
                    Dal 2016 affianca alla professione forense il ruolo di giudice
                    onorario presso la sezione penale del Tribunale di Parma — una
                    prospettiva che porta in studio la capacità di leggere ogni
                    vertenza anche dal lato di chi decide.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3 border-t border-line pt-8">
                {CREDENTIALS.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] text-ink/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <a
                href="https://it.linkedin.com/in/nicolagiusteschiconti"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex items-center gap-2 text-[15px] text-navy underline decoration-line underline-offset-4 transition-colors hover:text-ember hover:decoration-ember"
              >
                <IconLinkedIn className="h-4 w-4" />
                Profilo LinkedIn
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal delay={0.05}>
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="/generated/nicola-conti.jpg"
                  alt="Avv. Nicola Giusteschi Conti"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="photo-mono object-cover object-top"
                  priority={false}
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[24px] bg-navy px-8 py-10 text-paper sm:px-10 sm:py-12">
                <p className="font-display text-3xl font-light leading-snug sm:text-4xl">
                  &ldquo;Etica, Rispetto, Risultati.&rdquo;
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-paper/70">
                  La soluzione studiata e preparata da giuristi che collaborano per la
                  risoluzione delle vertenze, nel reciproco rispetto delle posizioni.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.08}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
