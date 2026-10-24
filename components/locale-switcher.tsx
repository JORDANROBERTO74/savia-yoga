"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeCookie, locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const suffix = pathname.split("/").slice(2).join("/");

  // Remember the locale the visitor is actually browsing so a later visit to
  // "/" does not override an explicit choice.
  useEffect(() => {
    document.cookie = `${localeCookie}=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  }, [locale]);

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={label}
      role="group"
    >
      {locales.map((code) => (
        <Link
          key={code}
          href={`/${code}${suffix ? `/${suffix}` : ""}`}
          hrefLang={code}
          aria-current={code === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
            code === locale
              ? "bg-[#083700] text-white"
              : "text-[#083700] hover:bg-[#083700]/10",
          )}
        >
          {code}
        </Link>
      ))}
    </div>
  );
}
