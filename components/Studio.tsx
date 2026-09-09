import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { IconLinkedIn } from "./icons";

const TEAM = [
  {
    initials: "AR",
    name: "Alberto Russo",
    role: "Diritto internazionale, europrogettazione, international relations management",
    tone: "bg-navy/10 text-navy",
  },
  {
    initials: "RPD",
    name: "Raffaella Ponari Deslarzes",
    role: "Diritto penale e tributario",
    tone: "bg-ember/10 text-ember-dark",
  },
];

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
              <h2 className="text-balance font-display text-3xl font-light leading-tight text-navy sm:text-4xl lg:text-[2.6rem]">
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

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {TEAM.map((member, i) => (
                <Reveal key={member.name} delay={0.15 + i * 0.08}>
                  <div className="h-full rounded-[20px] border border-line bg-card/60 p-7">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-base font-medium ${member.tone}`}
                    >
                      {member.initials}
                    </div>
                    <p className="mt-5 font-display text-xl font-medium text-navy">{member.name}</p>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{member.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
