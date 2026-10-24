"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

type Coach = Dictionary["team"]["coaches"][number];

const social = [
  { label: "Instagram", short: "IG", href: site.social.instagram },
  { label: "YouTube", short: "YT", href: site.social.youtube },
  { label: "LinkedIn", short: "IN", href: site.social.linkedin },
];

function CoachCard({
  coach,
  isActive,
  onHover,
  onLeave,
}: {
  coach: Coach;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className="flex w-full flex-col items-start transition-all duration-300 ease-in-out md:w-[274px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <h3
        className="mb-5 text-[24px] font-semibold leading-[32px] tracking-[-0.2px] text-[#083700]"
        style={{ fontFamily: '"Crimson Pro", serif' }}
      >
        {coach.name}
      </h3>

      <div
        className={
          "relative w-full overflow-hidden rounded-[4px] transition-all duration-300 ease-in-out " +
          (isActive ? "h-[360px] scale-[1.03]" : "h-[260px] scale-100")
        }
      >
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        >
          <Image
            src={coach.image}
            alt={coach.name}
            fill
            sizes="(max-width: 768px) 80vw, 274px"
            className="object-cover"
          />
        </motion.div>
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-6"
            >
              <div className="flex gap-3">
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-200 hover:bg-[#85FB6C] hover:text-[#083700]"
                  >
                    <span className="text-[10px] font-bold">{item.short}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className={
          "overflow-hidden transition-all duration-300 " +
          (isActive ? "mt-3 h-auto opacity-70" : "mt-0 h-0 opacity-0")
        }
      >
        <p className="text-[16px] font-normal text-[#083700]">{coach.role}</p>
      </div>
    </div>
  );
}

export function Team({ dict }: { dict: Dictionary }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const coaches = dict.team.coaches;
  const coachesPerPage = 4;
  const totalPages = Math.ceil(coaches.length / coachesPerPage);
  const autoSlideInterval = 5000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentPage((prev) => (prev + newDirection + totalPages) % totalPages);
      setHoveredIndex(null);
    },
    [totalPages],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      paginate(1);
    }, autoSlideInterval);
  }, [paginate]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer, currentPage]);

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

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  const currentCoaches = coaches.slice(
    currentPage * coachesPerPage,
    (currentPage + 1) * coachesPerPage,
  );

  return (
    <section
      id="team"
      className="flex w-full items-center justify-center overflow-hidden bg-[#ECFAEA] px-4 py-[120px] md:px-[135px]"
    >
      <motion.div
        className="flex w-full max-w-[1440px] flex-col items-center gap-[80px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex max-w-[800px] flex-col items-center gap-4">
          <motion.h2
            variants={itemVariants}
            className="text-center text-[48px] font-bold leading-[120%] text-[#083700]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            {dict.team.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-[18px] font-normal leading-[28px] text-[#083700] opacity-80"
          >
            {dict.team.subtitle}
          </motion.p>
        </div>

        <div className="relative flex w-full max-w-[1170px] flex-col items-center gap-[48px]">
          <div className="relative h-[448px] w-full overflow-visible">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute inset-0 flex flex-row items-start justify-start gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory md:justify-between md:overflow-visible"
              >
                {currentCoaches.map((coach, index) => (
                  <div key={coach.name} className="min-w-[80%] snap-center md:min-w-0">
                    <CoachCard
                      coach={coach}
                      isActive={hoveredIndex === null ? index === 0 : hoveredIndex === index}
                      onHover={() => setHoveredIndex(index)}
                      onLeave={() => setHoveredIndex(null)}
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                aria-label={dict.team.previous}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-[#083700] opacity-50 transition-all duration-[0.25s] ease-in-out hover:scale-[1.05] hover:opacity-100"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label={dict.team.next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#083700] shadow-[0px_6px_16px_rgba(0,0,0,0.08)] transition-all duration-[0.25s] ease-in-out hover:scale-[1.05]"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="relative h-[2px] max-w-[800px] flex-1 overflow-hidden bg-[#083700]/10">
              <motion.div
                key={currentPage}
                className="absolute left-0 top-0 h-full bg-[#083700]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-[18px] font-semibold leading-[26px] tracking-[-0.18px] text-[#083700]">
                {Math.min((currentPage + 1) * coachesPerPage, coaches.length)}
              </span>
              <span className="text-[14px] font-normal leading-[22px] text-[#083700] opacity-70">
                / {coaches.length}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
