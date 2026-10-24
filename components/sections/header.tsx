"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MoveRight, Menu, X } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { Logo } from "@/components/logo";
import { LocaleSwitcher } from "@/components/locale-switcher";

const press = [
  "The Daily Flow",
  "Wellness Weekly",
  "Mindful Living",
  "Breath & Balance",
  "Studio Journal",
  "Calm Magazine",
];

function Navbar({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const links = [
    { label: dict.nav.home, href: "#home" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.programs, href: "#programs" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="relative z-50 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 md:px-8">
      <a href="#home" className="flex-shrink-0" aria-label="Savia">
        <Logo />
      </a>

      <div className="hidden items-center gap-8 font-medium text-[#1a1b1a] md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-opacity hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <LocaleSwitcher locale={locale} label={dict.nav.language} />
        <a
          href="#contact"
          className="hidden rounded-full bg-[#99ff66] px-6 py-2.5 font-semibold text-[#1a1b1a] transition-all hover:shadow-lg active:scale-95 sm:block"
        >
          {dict.nav.bookCall}
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#1a1b1a] transition-colors hover:bg-black/5 md:hidden"
          aria-label={isOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-full flex flex-col overflow-hidden border-b border-black/5 bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4 p-6 font-medium text-[#1a1b1a]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-black/5 py-2 text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full rounded-full bg-[#99ff66] px-6 py-4 text-center font-bold text-[#1a1b1a] shadow-lg"
              >
                {dict.nav.bookCall}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function CoachCard({ dict }: { dict: Dictionary }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="group mt-8 flex w-full cursor-pointer items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md transition-all hover:bg-white/20 md:absolute md:bottom-8 md:right-8 md:mt-0 md:max-w-xs"
    >
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/images/avatar-01.jpg"
          alt={dict.hero.coachName}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-sm font-semibold text-white">{dict.hero.coachName}</h4>
        <p className="mb-2 text-xs text-white/70">{dict.hero.coachRole}</p>
        <div className="flex items-center gap-1 text-xs font-bold text-[#99ff66]">
          <span>{dict.hero.coachCta}</span>
          <MoveRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

function PressMarquee({ label }: { label: string }) {
  const doubled = [...press, ...press];

  return (
    <div className="group relative w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-12 whitespace-nowrap py-2 md:gap-20"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "fit-content" }}
      >
        {doubled.map((name, index) => (
          <span
            key={index}
            className="flex-shrink-0 text-xl font-bold tracking-tight text-[#1a1b1a] opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            {name}
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent md:w-24" />
    </div>
  );
}

export function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section id="home" className="w-full bg-white">
      <Navbar dict={dict} locale={locale} />

      <main className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex min-h-[600px] w-full flex-col justify-end overflow-hidden rounded-[32px] p-6 shadow-2xl md:min-h-[700px] md:rounded-[40px] md:p-12"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 53.43%, rgba(0, 0, 0, 0.52) 100%), linear-gradient(236deg, rgba(0, 0, 0, 0.00) 58.28%, rgba(0, 0, 0, 0.80) 96.47%), url(/images/bg-header.png) center / cover no-repeat",
          }}
        >
          <div className="relative z-10 flex w-full flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="flex max-w-3xl flex-col gap-4 md:gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-[68px] md:leading-[72px] md:tracking-[-1.6px]"
                style={{ fontFamily: '"Crimson Pro", serif', fontWeight: 600 }}
              >
                {dict.hero.title1} <br className="hidden sm:block" />
                <span className="italic">{dict.hero.title2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="max-w-[600px] text-base leading-relaxed text-white opacity-80 md:text-xl md:leading-[28px]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                {dict.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-4 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#programs"
                  className="group flex items-center justify-center gap-2 rounded-full bg-[#99ff66] px-8 py-4 font-bold text-[#1a1b1a] transition-all hover:shadow-[0_0_20px_rgba(153,255,102,0.4)] active:scale-95"
                >
                  {dict.hero.ctaPrimary}
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#pricing"
                  className="rounded-full bg-white px-8 py-4 font-bold text-[#1a1b1a] transition-all hover:bg-white/90 active:scale-95"
                >
                  {dict.hero.ctaSecondary}
                </a>
              </motion.div>
            </div>

            <CoachCard dict={dict} />
          </div>
        </motion.div>

        <section
          id="about"
          className="mt-24 grid grid-cols-1 items-start gap-8 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1a1b1a]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#99ff66]" />
              {dict.hero.aboutEyebrow}
            </div>
          </div>
          <div className="flex flex-col gap-12 md:col-span-9">
            <h2
              className="max-w-4xl text-xl leading-snug tracking-tight text-[#0A0C12] sm:text-2xl md:text-[30px] md:leading-[36px]"
              style={{ fontFamily: '"Crimson Pro", serif', fontWeight: 600 }}
            >
              {dict.hero.aboutText}
            </h2>

            <div className="flex w-full flex-col items-start gap-4 overflow-hidden sm:flex-row sm:items-center sm:gap-8">
              <span className="flex-shrink-0 whitespace-nowrap text-sm font-medium text-[#71707a]">
                {dict.hero.asSeenIn}
              </span>
              <PressMarquee label={dict.hero.asSeenIn} />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
