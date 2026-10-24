"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Pricing({ dict }: { dict: Dictionary }) {
  const [activeCardId, setActiveCardId] = React.useState(2);
  const plans = dict.pricing.plans;

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
      id="pricing"
      className="flex w-full items-center justify-center overflow-hidden bg-white px-4 py-[120px] md:px-[135px]"
    >
      <motion.div
        className="flex w-full max-w-[1440px] flex-col items-center gap-[80px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex max-w-[720px] flex-col items-center gap-4">
          <motion.h2
            variants={itemVariants}
            className="text-center text-[48px] font-bold leading-[120%] tracking-[-0.3px] text-[#083700]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            {dict.pricing.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-[18px] font-normal leading-[28px] text-[#083700] opacity-80"
          >
            {dict.pricing.subtitle}
          </motion.p>
        </div>

        <div
          className="grid w-full max-w-[1170px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          onMouseLeave={() => setActiveCardId(2)}
        >
          {plans.map((plan) => {
            const active = activeCardId === plans.indexOf(plan) + 1;

            return (
              <motion.div
                key={plan.title}
                variants={itemVariants}
                onMouseEnter={() => setActiveCardId(plans.indexOf(plan) + 1)}
                whileHover={{ y: -6, boxShadow: "0px 20px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className={
                  "flex flex-col justify-between rounded-[24px] border p-8 transition-all duration-500 ease-in-out " +
                  (active
                    ? "border-transparent bg-[#083700] text-white"
                    : "border-[#E5E7EA] bg-white text-[#083700]")
                }
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-[22px] font-semibold"
                      style={{ fontFamily: '"Crimson Pro", serif' }}
                    >
                      {plan.title}
                    </h3>
                    <p className="text-[16px] opacity-80">{plan.subtitle}</p>
                  </div>

                  <div
                    className={
                      "h-[1px] w-full transition-colors duration-500 " +
                      (active ? "bg-white/10" : "bg-black/10")
                    }
                  />

                  <div className="flex flex-col gap-3">
                    <h4 className="text-[16px] font-semibold">{dict.pricing.included}:</h4>
                    <ul className="flex flex-col gap-4">
                      {plan.features.map((feature) => (
                        <li key={feature.text} className="flex items-center gap-3">
                          {feature.included ? (
                            <CheckCircle2
                              size={20}
                              className={
                                "transition-colors duration-500 " +
                                (active ? "text-[#84FA6C]" : "text-[#083700]")
                              }
                            />
                          ) : (
                            <XCircle size={20} className="opacity-40" />
                          )}
                          <span
                            className={
                              "text-[16px] transition-opacity duration-500 " +
                              (!feature.included ? "opacity-40" : "opacity-100")
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[14px] opacity-60">{dict.pricing.startFrom}</span>
                    <span
                      className="text-[36px] font-semibold"
                      style={{ fontFamily: '"Crimson Pro", serif' }}
                    >
                      {dict.common.currency}
                      {plan.price}
                    </span>
                    <span className="text-[14px] opacity-60">{dict.pricing.perMonth}</span>
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: active
                        ? "0px 12px 24px rgba(133, 250, 109, 0.4)"
                        : "0px 12px 24px rgba(0,0,0,0.12)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    whileTap={{ scale: 0.98 }}
                    className={
                      "group flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-[14px] text-[16px] font-medium transition-all duration-500 ease-in-out " +
                      (active
                        ? "bg-[#84FA6C] text-[#083700]"
                        : "bg-[#EDFAEA] text-[#083700]")
                    }
                  >
                    {plan.buttonText}
                    {active ? (
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    ) : (
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-500 group-hover:translate-x-1"
                      />
                    )}
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
