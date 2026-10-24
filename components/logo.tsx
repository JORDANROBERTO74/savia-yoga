import { cn } from "@/lib/utils";

export function SaviaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M26 5c-8 0-16 3-19 9-2.5 5-.8 11 2.5 13.5 3.3 2.5 8.8 1 11.5-3C23.5 20 26 13 26 5Z"
        fill="currentColor"
      />
      <path
        d="M7.5 23c4-2 8.5-7 11-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * Brand lockup: a sap/leaf mark plus the "Savia" wordmark set in Crimson Pro.
 * `onLight` renders dark-green text for light surfaces; `onDark` renders white
 * text with a lime mark for the dark footer.
 */
export function Logo({
  variant = "onLight",
  className,
}: {
  variant?: "onLight" | "onDark";
  className?: string;
}) {
  const onDark = variant === "onDark";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <SaviaMark
        className={cn(
          "h-6 w-6 shrink-0",
          onDark ? "text-[#84FA6C]" : "text-[#083700]",
        )}
      />
      <span
        className={cn(
          "text-[22px] font-semibold leading-none tracking-tight",
          onDark ? "text-white" : "text-[#083700]",
        )}
        style={{ fontFamily: '"Crimson Pro", serif' }}
      >
        Savia
      </span>
    </span>
  );
}
