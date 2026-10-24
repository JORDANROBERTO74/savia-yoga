"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export function Contact({ dict }: { dict: Dictionary }) {
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

  const contactInfo = [
    {
      label: dict.contact.studioLabel,
      value: `${site.address.street}, ${site.address.city}`,
    },
    { label: dict.contact.emailLabel, value: site.email },
    { label: dict.contact.phoneLabel, value: site.phone },
  ];

  const socials = [
    { name: "Instagram", short: "IG", href: site.social.instagram },
    { name: "YouTube", short: "YT", href: site.social.youtube },
    { name: "LinkedIn", short: "IN", href: site.social.linkedin },
  ];

  return (
    <section id="contact" className="flex w-full justify-center bg-[#ECFBEA]">
      <motion.div
        className="flex w-full max-w-[1440px] flex-col items-start justify-between gap-10 px-6 py-[80px] md:px-[135px] md:py-[120px] lg:flex-row md:gap-[80px]"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex w-full flex-col gap-6 lg:max-w-[520px]">
          <motion.h2
            variants={itemVariants}
            className="text-[36px] font-bold leading-[120%] tracking-[-0.3px] text-[#093700] md:text-[48px]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            {dict.contact.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[16px] leading-[24px] text-[#093700] opacity-80"
          >
            {dict.contact.subtitle}
          </motion.p>

          <motion.div variants={itemVariants} className="mt-4 flex flex-col">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start justify-between border-b border-[#DCEADC] py-4 sm:flex-row sm:items-center"
              >
                <span className="text-[16px] font-medium text-[#093700] opacity-60">
                  {item.label}
                </span>
                <span className="max-w-[300px] text-left text-[16px] font-normal text-[#093700] sm:text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-4 flex items-center gap-4">
            <span className="text-[16px] font-bold text-[#093700]">
              {dict.contact.follow}:
            </span>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs font-bold text-[#093700]"
                >
                  {social.short}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col gap-5 rounded-[24px] bg-white p-6 shadow-sm md:p-8 lg:w-[520px]"
        >
          <h3
            className="text-[24px] font-semibold text-[#093700]"
            style={{ fontFamily: '"Crimson Pro", serif' }}
          >
            {dict.contact.formTitle}
          </h3>

          <form
            className="flex flex-col gap-5"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full flex-col gap-2">
                <label className="text-[14px] font-medium text-[#093700]">
                  {dict.contact.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={dict.contact.namePlaceholder}
                  className="w-full rounded-[12px] bg-[#ECFBEA] px-4 py-[14px] text-[14px] outline-none placeholder:opacity-60"
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <label className="text-[14px] font-medium text-[#093700]">
                  {dict.contact.phoneLabel}
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder={dict.contact.phonePlaceholder}
                  className="w-full rounded-[12px] bg-[#ECFBEA] px-4 py-[14px] text-[14px] outline-none placeholder:opacity-60"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#093700]">
                {dict.contact.emailLabel}
              </label>
              <input
                type="email"
                name="email"
                placeholder={dict.contact.emailPlaceholder}
                className="w-full rounded-[12px] bg-[#ECFBEA] px-4 py-[14px] text-[14px] outline-none placeholder:opacity-60"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-[#093700]">
                {dict.contact.messageLabel}
              </label>
              <textarea
                name="message"
                placeholder={dict.contact.messagePlaceholder}
                className="h-[120px] w-full resize-none rounded-[12px] bg-[#ECFBEA] px-4 py-[14px] text-[14px] outline-none placeholder:opacity-60"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ boxShadow: "0px 10px 24px rgba(0,0,0,0.12)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#85FA6C] py-4 font-semibold text-[#093700]"
            >
              {dict.contact.submit}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
