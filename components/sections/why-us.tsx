"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, y: 32 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="w-full bg-[#ECFBEA] px-6 py-16 md:px-10 md:py-20 lg:px-0">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-10 text-center md:mb-[80px]"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-4 text-[32px] font-bold leading-[120%] tracking-[-0.04em] text-[#093700] md:text-[48px]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            {dict.whyUs.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-[554px] text-center text-[16px] font-normal leading-[26px] tracking-[-0.18px] text-[#093700]/80 md:text-[18px]"
          >
            {dict.whyUs.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 flex w-full flex-col gap-10 md:mb-16 lg:flex-row lg:gap-[56px]"
        >
          <motion.div
            variants={itemVariants}
            className="group relative aspect-[4/3] w-full flex-1 overflow-hidden rounded-[24px] md:rounded-[30px] lg:aspect-auto lg:max-w-[540px] lg:self-stretch"
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/feature-04-img-3.png"
                alt="A guided training session"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-1 flex-col gap-3">
            {dict.whyUs.stats.map((stat) => (
              <motion.div
                key={stat.number}
                variants={itemVariants}
                className="flex flex-col items-start justify-between gap-2 rounded-[16px] border border-[#ECFBEA] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:gap-4 md:px-8 md:py-5"
              >
                <h3
                  className="w-full text-[28px] font-semibold leading-[36px] tracking-[-0.2px] text-[#093700] sm:w-[100px] md:text-[30px]"
                  style={{ fontFamily: '"Crimson Pro", serif' }}
                >
                  {stat.number}
                </h3>
                <p className="max-w-full text-[16px] font-normal leading-[26px] tracking-[-0.18px] text-[#093700]/80 sm:max-w-[340px] md:text-[18px]">
                  {stat.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-8 md:gap-y-4"
        >
          {dict.whyUs.features.map((feature) => (
            <motion.div
              key={feature}
              variants={itemVariants}
              className="flex items-center gap-2"
            >
              <CheckCircle2 className="h-4 w-4 text-[#093700] md:h-5 md:w-5" />
              <span className="text-[14px] font-normal leading-[24px] tracking-[-0.4px] text-[#093700] md:text-[16px]">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
