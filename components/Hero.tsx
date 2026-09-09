"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "./ui/Container";
import { IconArrowUpRight } from "./icons";

function HeroMark() {
  const reduceMotion = useReducedMotion();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.6, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <svg
      viewBox="0 0 560 560"
      className="h-full w-full"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="559" height="559" rx="1" stroke="rgba(43,43,43,0.12)" />
      <motion.path
        d="M40 210C120 170 160 250 240 210C320 170 360 250 440 210C480 190 500 195 520 205"
        stroke="#E66023"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        custom={0}
      />
      <motion.path
        d="M40 280C110 320 170 260 240 280C310 300 360 250 440 280C480 294 500 292 520 284"
        stroke="#0E2A4A"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        custom={1}
      />
      <motion.path
        d="M40 350C130 380 150 330 240 350C330 370 350 330 440 350C480 359 500 362 520 356"
        stroke="#0E2A4A"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={draw}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        custom={2}
      />
      <motion.line
        x1="80"
        y1="120"
        x2="480"
        y2="120"
        stroke="#2B2B2B"
        strokeOpacity="0.16"
        strokeWidth="1"
        variants={draw}
        initial={reduceMotion ? "visible" : "hidden"}
        animate="visible"
        custom={3}
      />
      <motion.circle
        cx="80"
        cy="120"
        r="4"
        fill="#E66023"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      />
      <motion.circle
        cx="480"
        cy="120"
        r="4"
        fill="#0E2A4A"
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      />
      <text
        x="40"
        y="460"
        fill="#0E2A4A"
        fontSize="15"
        style={{ fontFamily: "var(--font-roboto)", fontWeight: 500 }}
        opacity="0.55"
      >
        La Spezia — dal 2000
      </text>
      <text
        x="40"
        y="86"
        fill="#0E2A4A"
        fontSize="64"
        style={{ fontFamily: "var(--font-roboto)", fontWeight: 300 }}
        opacity="0.9"
      >
        §
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted"
            >
              Studio legale — La Spezia, dal 2000
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance font-display text-[2.65rem] font-light leading-[1.08] tracking-tightest text-navy sm:text-[3.4rem] lg:text-[4rem]"
            >
              Il mondo cambia più
              <br className="hidden sm:block" /> in fretta della giustizia.
              <br className="hidden sm:block" />
              <span className="font-normal text-ember">Noi colmiamo la distanza.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink/75"
            >
              Dal 2000 un team di avvocati alla Spezia che affianca privati e studi
              legali, in Italia e all&rsquo;estero, con un metodo fondato su etica,
              rispetto e risultati concreti — non su promesse.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#contatti"
                className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-ember-dark"
              >
                Richiedi una consulenza
                <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#studio"
                className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3.5 text-[15px] font-medium text-navy transition-colors hover:border-navy"
              >
                Scopri lo studio
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-8 text-sm text-muted"
            >
              <span>Avvocato dal 2000</span>
              <span className="hidden sm:inline">·</span>
              <span>Giudice onorario, Tribunale di Parma dal 2016</span>
              <span className="hidden sm:inline">·</span>
              <span>Consiglio direttivo Camera Civile della Spezia</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto aspect-square w-full max-w-md rounded-[28px] bg-card p-6 sm:p-8"
          >
            <HeroMark />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 overflow-hidden rounded-[28px] md:mt-28"
        >
          <video
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/generated/hero-poster.jpg"
          >
            <source src="/generated/hero-loop.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </Container>
    </section>
  );
}
