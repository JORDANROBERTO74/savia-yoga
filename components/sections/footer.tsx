"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { Logo } from "@/components/logo";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Footer({ dict }: { dict: Dictionary }) {
  const followLinks = [
    { label: dict.footer.followUs[0].label, href: site.social.instagram },
    { label: dict.footer.followUs[1].label, href: site.social.youtube },
    { label: dict.footer.followUs[2].label, href: site.social.linkedin },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#083700]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bg-footer.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9, 54, 0, 0.00) 0%, #083700 80%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-0 pt-[130px] md:px-[135px]">
        <div className="mb-[130px] flex w-full flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-[42px] font-semibold leading-[1.2] tracking-[-0.8px] text-white md:text-[52px] md:leading-[56px]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            {dict.footer.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-[520px] text-[16px] leading-[1.5] text-white/70 md:text-[18px]"
          >
            {dict.footer.ctaSubtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#85FB6C] px-7 py-3 text-[15px] font-bold text-[#0e1a0e] no-underline transition-all hover:bg-[#5fda48] hover:shadow-[0_8px_28px_rgba(133,250,109,0.30)] sm:w-auto md:py-4"
            >
              {dict.footer.ctaButton}
              <span className="flex h-4 flex-col items-center overflow-hidden" aria-hidden="true">
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
                <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-full" />
              </span>
            </a>
          </motion.div>
        </div>

        <div className="mb-[64px] flex w-full flex-col items-start justify-between gap-[64px] lg:flex-row lg:items-center">
          <div className="flex w-full flex-col items-start gap-4 lg:w-[275px] lg:shrink-0">
            <a href="#home" aria-label="Savia">
              <Logo variant="onDark" />
            </a>
            <p className="text-[16px] leading-[1.6] text-white/60">
              {dict.footer.about}
            </p>
          </div>

          <div className="flex w-full flex-1 flex-col items-start justify-start gap-12 sm:flex-row sm:gap-[64px] lg:justify-end">
            <div className="flex flex-row gap-8 sm:gap-[64px]">
              <div className="flex w-[164px] shrink-0 flex-col items-start gap-4">
                <h4 className="text-[20px] font-bold text-white">
                  {dict.footer.navigateTitle}
                </h4>
                <ul className="flex flex-col items-start gap-3">
                  {dict.footer.navigate.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[16px] text-white/70 transition-colors duration-200 hover:text-[#85FB6C]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-[164px] shrink-0 flex-col items-start gap-4">
                <h4 className="text-[20px] font-bold text-white">
                  {dict.footer.studioTitle}
                </h4>
                <ul className="flex flex-col items-start gap-3">
                  {dict.footer.studio.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[16px] text-white/70 transition-colors duration-200 hover:text-[#85FB6C]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex w-[164px] shrink-0 flex-col items-start gap-4">
              <h4 className="text-[20px] font-bold text-white">
                {dict.footer.followTitle}
              </h4>
              <ul className="flex flex-col items-start gap-3">
                {followLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[16px] text-white/70 transition-colors duration-200 hover:text-[#85FB6C]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-auto w-full max-w-[1280px]">
          <div className="mb-8 h-[1px] w-full bg-white/10" />
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:mb-[130px] md:flex-row">
            <p className="text-center text-[12px] tracking-wide text-white/40 md:text-left md:text-[14px]">
              {dict.footer.copyright}
            </p>
            <div className="flex items-center gap-6 md:gap-12">
              <a
                href="#contact"
                className="text-[12px] tracking-wide text-white/40 transition-colors hover:text-white md:text-[14px]"
              >
                {dict.footer.privacy}
              </a>
              <a
                href="#contact"
                className="text-[12px] tracking-wide text-white/40 transition-colors hover:text-white md:text-[14px]"
              >
                {dict.footer.terms}
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none mx-auto flex w-full max-w-[1170px] select-none items-center justify-center overflow-hidden">
          <span
            className="text-[120px] font-semibold leading-none tracking-tight text-white/10 md:text-[220px]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            Savia
          </span>
        </div>
      </div>
    </footer>
  );
}
