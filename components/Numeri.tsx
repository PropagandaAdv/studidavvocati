import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

const STATS = [
  { value: "2000", label: "Anno di iscrizione all'Albo del fondatore" },
  { value: "2016", label: "Giudice onorario, Tribunale di Parma" },
  { value: "06", label: "Aree di competenza presidiate dallo studio" },
  { value: "01", label: "Sede storica, Via Persio 3 — La Spezia" },
];

export function Numeri() {
  return (
    <section className="bg-navy py-20 text-paper md:py-24">
      <Container>
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-paper/50">
            Vent&rsquo;anni di pratica, non di promesse
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-line-dark pt-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <p className="font-display text-4xl font-light text-ember-light sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[20ch] text-[15px] leading-snug text-paper/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
