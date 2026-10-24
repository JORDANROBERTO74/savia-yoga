"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

type Testimonial = Dictionary["testimonials"]["items"][number];

function TestimonialCard({
  testimonial,
  isActive,
  onHover,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  onHover: () => void;
}) {
  return (
    <motion.div
      onMouseEnter={onHover}
      layout
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={
        "relative flex h-[350px] min-w-0 flex-1 flex-col transition-all duration-700 " +
        (isActive
          ? "z-10 rounded-[20px] bg-[#083700] p-5 shadow-[0px_12px_30px_rgba(0,0,0,0.08)]"
          : "items-start opacity-90 hover:-translate-y-1 hover:opacity-100")
      }
    >
      <AnimatePresence mode="wait" initial={false}>
        {isActive ? (
          <motion.div
            key="active"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-full flex-col"
          >
            <div className="flex flex-col">
              <div className="mb-5 flex items-center gap-[10px]">
                <div className="flex items-center gap-[5px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#F9933A" stroke="#F9933A" />
                  ))}
                </div>
                <span className="text-[20px] font-bold leading-[28px] text-[#84FA6C]">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>
              <h3 className="mb-3 line-clamp-2 text-[20px] font-semibold leading-[28px] text-white">
                {testimonial.headline}
              </h3>
              <p className="line-clamp-4 text-[16px] font-normal leading-[24px] tracking-[-0.4px] text-white opacity-90">
                {testimonial.text}
              </p>
            </div>
            <div className="mt-auto flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-[1.2px] border-[#EDFAEA] bg-gray-200">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-semibold leading-[24px] text-white">
                  {testimonial.name}
                </span>
                <span className="text-[16px] font-normal leading-[24px] tracking-[-0.4px] text-white opacity-80">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="inactive"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-full w-full flex-col gap-4"
          >
            <div className="relative h-[310px] w-full overflow-hidden rounded-[20px]">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="text-[16px] font-semibold leading-[24px] text-[#083700]">
                {testimonial.name}
              </span>
              <span className="text-[14px] font-normal leading-[22px] text-[#083700] opacity-80">
                {testimonial.role}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Testimonials({ dict }: { dict: Dictionary }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const items = dict.testimonials.items;

  const containerVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="testimonials"
      className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[80px] overflow-hidden bg-white px-6 py-[120px] md:px-[135px]"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex w-full max-w-[1170px] flex-col items-center gap-10 md:flex-row md:items-end md:gap-[96px]"
      >
        <motion.h2
          variants={itemVariants}
          className="w-full shrink-0 text-center text-[40px] font-semibold leading-[48px] tracking-[-0.8px] text-[#083700] md:w-[605px] md:text-left md:text-[52px] md:leading-[56px]"
          style={{ fontFamily: '"Crimson Pro", serif' }}
        >
          {dict.testimonials.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="flex-1 text-center text-[18px] font-normal leading-[26px] tracking-[-0.18px] text-[#083700] opacity-80 md:text-left"
        >
          {dict.testimonials.subtitle}
        </motion.p>
      </motion.div>

      <div className="flex w-full flex-col items-center gap-[48px]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          onMouseLeave={() => setActiveIndex(1)}
          className="hidden w-full max-w-[1170px] gap-6 md:flex"
        >
          {items.map((testimonial, index) => (
            <div key={testimonial.name} className="min-w-0 flex-1">
              <TestimonialCard
                testimonial={testimonial}
                isActive={activeIndex === index}
                onHover={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </motion.div>

        <div className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:hidden">
          {items.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex w-[calc(100%-32px)] flex-shrink-0 snap-start flex-col gap-12 rounded-[20px] bg-[#083700] p-5"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-[10px]">
                  <div className="flex items-center gap-[5px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="#F9933A" stroke="#F9933A" />
                    ))}
                  </div>
                  <span className="text-[20px] font-bold leading-[28px] text-[#84FA6C]">
                    {testimonial.rating.toFixed(1)}
                  </span>
                </div>
                <h3 className="line-clamp-2 text-[20px] font-semibold leading-[28px] text-white">
                  {testimonial.headline}
                </h3>
                <p className="line-clamp-4 text-[16px] font-normal leading-[24px] tracking-[-0.4px] text-white opacity-90">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-[1.2px] border-[#EDFAEA]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold leading-[24px] text-white">
                    {testimonial.name}
                  </span>
                  <span className="text-[16px] font-normal leading-[24px] tracking-[-0.4px] text-white opacity-80">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.a
          href="#contact"
          variants={itemVariants}
          whileHover={{ backgroundColor: "#74E05D", boxShadow: "0px 8px 20px rgba(0,0,0,0.1)" }}
          className="group flex items-center justify-center gap-3 rounded-full bg-[#84FA6C] px-7 py-4 transition-all"
        >
          <span className="text-[18px] font-semibold text-[#083700]">
            {dict.testimonials.readMore}
          </span>
          <motion.div className="transition-transform duration-250 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={20} color="#083700" strokeWidth={2.5} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
