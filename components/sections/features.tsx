"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Features({ dict }: { dict: Dictionary }) {
  const [activeTab, setActiveTab] = useState(0);
  const programs = dict.features.programs;
  const active = programs[activeTab];

  return (
    <section
      id="programs"
      aria-label="Wellness programs"
      className="flex w-full flex-col items-center gap-16 bg-white px-6 py-20 md:gap-[80px] md:px-[120px] md:py-[120px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex max-w-[680px] flex-col items-center gap-5 text-center"
      >
        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#083700] sm:text-4xl md:text-5xl lg:text-[52px]">
          {dict.features.title}
        </h2>
        <p className="text-base leading-relaxed tracking-tight text-[#083700]/60 sm:text-lg">
          {dict.features.subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex w-full max-w-[1170px] flex-col items-center gap-6 rounded-[30px] bg-[#EDFBEA] p-6 md:p-8 lg:flex-row"
      >
        <nav
          aria-label={dict.features.categories}
          className="flex w-full items-center gap-1 overflow-x-auto pb-4 scrollbar-hide lg:w-auto lg:flex-1 lg:flex-col lg:items-start lg:overflow-visible lg:pb-0"
        >
          {programs.map((program, i) => (
            <button
              key={program.tag}
              onClick={() => setActiveTab(i)}
              className={
                "whitespace-nowrap rounded-full px-5 py-3.5 text-center text-sm font-semibold transition-all sm:text-base lg:text-left " +
                (activeTab === i
                  ? "bg-[#84FA6C] text-[#083700]"
                  : "bg-transparent text-[#083700] hover:bg-[#84FA6C]/25")
              }
            >
              {program.tag}
            </button>
          ))}
        </nav>

        <div className="relative flex min-h-[340px] w-full flex-col justify-between self-stretch overflow-hidden rounded-[20px] bg-[#1b2e16] px-6 py-8 lg:w-[473px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0"
            >
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 473px"
                className="object-cover"
              />
              <div className="absolute inset-0 z-[1] bg-black/30" />
            </motion.div>
          </AnimatePresence>

          <span className="relative z-[2] text-sm font-medium tracking-tight text-white/90">
            {active.tag}
          </span>
          <h3 className="relative z-[2] w-full max-w-[264px] text-[30px] font-semibold leading-[36px] tracking-[-0.2px] text-[#EDFBEA]">
            {active.titleLines[0]}
            <br />
            {active.titleLines[1]}
          </h3>
        </div>

        <div className="flex flex-[1_0_0] flex-col items-end justify-between self-stretch rounded-[30px] bg-white px-6 py-8">
          <a
            href="#pricing"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#083700]/15 transition-all hover:rotate-45 hover:border-[#84FA6C] hover:bg-[#84FA6C]"
            aria-label={dict.features.viewProgram}
          >
            <ArrowUpRight className="h-[18px] w-[18px] text-[#083700]" />
          </a>
          <div className="mt-6 flex w-full flex-col gap-1.5 text-left lg:mt-0">
            <p className="text-[52px] font-semibold leading-[56px] tracking-[-0.8px] text-[#083700]">
              <span className="align-super text-[32px] font-semibold">
                {dict.common.currency}
              </span>
              {active.price}
            </p>
            <p className="text-sm leading-relaxed text-[#083700]/55">
              {active.label}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="flex w-full max-w-[1170px] flex-wrap content-center items-start justify-center gap-6">
        {dict.features.highlights.map((highlight, i) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
            className="flex w-full items-start gap-6 sm:max-w-[374px]"
          >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center">
              <Image
                src="/images/check-verified.svg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 flex-shrink-0 object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-[20px] font-semibold leading-[28px] tracking-[-0.04px] text-[#083700]">
                {highlight.title}
              </p>
              <p className="text-[15px] leading-relaxed tracking-tight text-[#083700]/55">
                {highlight.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
