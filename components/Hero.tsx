"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Container } from "./ui/Container";
import { IconArrowUpRight } from "./icons";

function ScrollCue() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-3 sm:flex lg:right-10">
      <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-paper/60 [writing-mode:vertical-rl]">
        Scorri
      </span>
      <div className="relative h-16 w-px overflow-hidden bg-paper/25">
        <motion.div
          className="absolute inset-x-0 top-0 h-6 bg-ember"
          initial={{ y: -24 }}
          animate={reduceMotion ? { y: 0 } : { y: [-24, 64] }}
          transition={reduceMotion ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-navy">
      <video
        className="photo-mono absolute inset-0 hidden h-full w-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        poster="/generated/hero-poster.jpg"
      >
        <source src="/generated/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* Static poster on small screens — avoids shipping the video payload on mobile */}
      <Image
        src="/generated/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="photo-mono absolute inset-0 object-cover md:hidden"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/45 to-navy/55" />

      <ScrollCue />

      <Container className="relative z-10 flex w-full flex-col gap-10 py-24 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-16">
        <div className="max-w-2xl lg:min-w-0 lg:flex-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-paper/70"
          >
            Studio legale — La Spezia, dal 2000
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-[2.65rem] font-bold leading-[1.08] tracking-tightest text-paper sm:text-[3.4rem] lg:text-[4rem]"
          >
            Il mondo cambia più
            <br className="hidden sm:block" /> in fretta della giustizia.
            <br className="hidden sm:block" />
            <span className="text-ember-light">Noi colmiamo la distanza.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-paper/80"
          >
            Dal 2000 un team di avvocati alla Spezia che affianca privati e studi
            legali, in Italia e all&rsquo;estero, con un metodo fondato su etica,
            rispetto e risultati concreti — non su promesse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-paper/60"
          >
            <span>Avvocato dal 2000</span>
            <span className="hidden sm:inline">·</span>
            <span>Giudice onorario, Tribunale di Parma dal 2016</span>
            <span className="hidden sm:inline">·</span>
            <span>Consiglio direttivo Camera Civile della Spezia</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md shrink-0 rounded-[24px] bg-ember p-7 sm:p-8 lg:w-[380px] lg:max-w-none"
        >
          <p className="font-display text-xl font-bold leading-snug text-paper">
            Serve un consulto? Raccontaci il tuo caso.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#contatti"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-navy-light"
            >
              Richiedi una consulenza
              <IconArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#studio"
              className="inline-flex items-center gap-2 rounded-full border border-paper/50 px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:border-paper"
            >
              Scopri lo studio
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
