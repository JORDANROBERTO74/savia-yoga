/**
 * Canonical origin for metadata, canonical links, hreflang, sitemap, robots and
 * Open Graph URLs. Set NEXT_PUBLIC_SITE_URL on the host (the Vercel production
 * domain, for example); the fallback keeps local builds pointing at the live site.
 */
const FALLBACK_URL = "https://savia-yoga.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Savia",
  legalName: "Savia Yoga Studio S.L.",
  domain: "savia-yoga.vercel.app",
  url: resolveSiteUrl(),
  email: "hola@savia.yoga",
  phone: "+34 910 123 456",
  address: {
    street: "Calle de la Paz 24",
    city: "Madrid",
    country: "Spain",
    countryCode: "ES",
    postalCode: "28001",
  },
  social: {
    instagram: "https://instagram.com/saviayoga",
    youtube: "https://youtube.com/@saviayoga",
    linkedin: "https://linkedin.com/company/saviayoga",
  },
} as const;
