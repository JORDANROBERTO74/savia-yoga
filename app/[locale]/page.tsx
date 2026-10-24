import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { Header } from "@/components/sections/header";
import { Features } from "@/components/sections/features";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Team } from "@/components/sections/team";
import { Pricing } from "@/components/sections/pricing";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const studio = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: site.legalName,
    url: `${site.url}/${locale}`,
    email: site.email,
    telephone: site.phone,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
  };

  return (
    <>
      <Header dict={dict} locale={locale} />
      <Features dict={dict} />
      <WhyUs dict={dict} />
      <Testimonials dict={dict} />
      <Team dict={dict} />
      <Pricing dict={dict} />
      <Contact dict={dict} />
      <Footer dict={dict} />
      <JsonLd data={studio} />
    </>
  );
}
