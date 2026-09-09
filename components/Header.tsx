"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Container } from "./ui/Container";
import { IconClose, IconMenu } from "./icons";

const NAV_LINKS = [
  { href: "#studio", label: "Studio" },
  { href: "#competenze", label: "Aree di pratica" },
  { href: "#attivita", label: "Attività" },
  { href: "#faq", label: "FAQ" },
  { href: "#contatti", label: "Contatti" },
];

export function Header() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setCompact(latest > 48);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          paddingTop: compact ? 10 : 22,
          paddingBottom: compact ? 10 : 22,
          backgroundColor: compact ? "rgba(245,246,248,0.92)" : "rgba(245,246,248,0)",
          backdropFilter: compact ? "blur(10px)" : "blur(0px)",
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="hairline"
        style={{ backgroundSize: compact ? "100% 1px" : "100% 0px" }}
      >
        <Container className="flex items-center justify-between">
          {/* Placeholder wordmark — sostituire con il file logo ufficiale (sigillo GC&R&PD + wordmark) */}
          <a href="#top" className="font-display text-lg font-medium tracking-tight text-navy">
            Studi Di Avvocati
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] text-ink/75 transition-colors hover:text-ember"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contatti"
              className="hidden rounded-full bg-ember px-5 py-2.5 text-[15px] font-medium text-paper transition-colors hover:bg-ember-dark md:inline-block"
            >
              Richiedi una consulenza
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-navy lg:hidden"
            >
              {menuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-b border-line bg-paper lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-line/60 py-4 font-display text-2xl font-light text-navy last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setMenuOpen(false)}
                className="mt-4 rounded-full bg-ember px-5 py-3 text-center text-[15px] font-medium text-paper"
              >
                Richiedi una consulenza
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
