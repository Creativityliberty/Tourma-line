import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Testimonials } from "../components/sections/Testimonials";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";
import {
  WhatsAppIcon,
  HashIcon,
  LayersIcon,
  WavesIcon,
  CalendarIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowLeftIcon,
} from "../components/ui/icons";
import { localCities } from "../data/cities";
import type { City } from "../data/cities";
import { getLocalSeoDecision } from "../data/localSeoStrategy.mjs";
import { getPremiumLocalContent } from "../data/premiumLocalContent.mjs";
import { getTerritoryHubForCity } from "../data/territorialHubs.mjs";
import { ConversionLink } from "../components/ui/ConversionLink";

interface CityPageProps {
  city: City;
  service: "numerologie" | "cartomancie" | "lahochi";
  serviceLabel: string;
}

const serviceDetails = {
  numerologie: {
    title: "Numérologie",
    role: "Numérologue",
    slug: "numerologie",
    icon: <HashIcon className="w-6 h-6" />,
    what:
      "Je m'appuie sur votre date de naissance pour explorer votre chemin de vie, votre année personnelle, vos cycles et certains schémas de votre parcours.",
    cta: "Réserver ma consultation de numérologie",
    metaIntent: "chemin de vie, année personnelle et cycles",
  },
  cartomancie: {
    title: "Cartomancie",
    role: "Cartomancienne",
    slug: "cartomancie",
    icon: <LayersIcon className="w-6 h-6" />,
    what:
      "J'utilise les cartes comme support de guidance pour approfondir une situation précise et vous apporter un éclairage adapté à votre question.",
    cta: "Réserver ma séance de cartomancie",
    metaIntent: "tirage de cartes, guidance, relation, travail et décisions",
  },
  lahochi: {
    title: "Lahochi",
    role: "Praticienne Lahochi",
    slug: "soin-lahochi",
    icon: <WavesIcon className="w-6 h-6" />,
    what:
      "Je propose le Lahochi comme un temps de détente, de recentrage et de bien-être, au cabinet ou à distance selon la prestation choisie.",
    cta: "Réserver ma séance Lahochi",
    metaIntent: "Lahochi, détente et recentrage",
  },
};

export const CityPage = ({ city, service }: CityPageProps) => {
  const svc = serviceDetails[service];
  const seoDecision = getLocalSeoDecision(city.slug, svc.slug);
  const isFecamp = city.slug === "fecamp";
  const isIndexableLocalPage = isFecamp || seoDecision?.tier === "A";
  const robotsDirective = isIndexableLocalPage ? "index, follow" : "noindex, follow";
  const premiumContent = seoDecision?.tier === "A" ? getPremiumLocalContent(city.slug, svc.slug) : null;
  const territoryHub = getTerritoryHubForCity(city.slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [city.slug, service]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) event.preventDefault();
  };

  const pageTitle = premiumContent?.pageTitle ?? `${svc.role} près de ${city.name} | Tourma-Line`;
  const headline = premiumContent?.headline ?? `${svc.role} près de ${city.name}`;
  const metaDescription =
    premiumContent?.metaDescription ??
    `${svc.role} près de ${city.name} : ${svc.metaIntent}. Cabinet Tourma-Line à Gerponville ou séance à distance selon la prestation.`;
  const locationIntro =
    premiumContent?.locationIntro ??
    `Vous habitez ${city.name} ou ses alentours ? Je vous reçois au cabinet Tourma-Line à Gerponville, en Seine-Maritime, et je propose également certaines séances à distance selon la prestation.`;
  const canonicalUrl = `https://www.tourma-line.fr/${svc.slug}-${city.slug}`;

  const relatedCities = localCities
    .filter((candidate) => candidate.slug !== city.slug)
    .filter((candidate) => getLocalSeoDecision(candidate.slug, svc.slug)?.tier === "A")
    .slice(0, 3);

  const faq = premiumContent?.faq ?? [
    {
      q: `Où se trouve Tourma-Line si j'habite ${city.name} ?`,
      a: `Le cabinet Tourma-Line se trouve au 4 résidence Les Peupliers, 76540 Gerponville. Vous pouvez venir sur rendez-vous ou choisir une modalité à distance lorsqu'elle est proposée.`,
    },
    {
      q: `Comment réserver une séance de ${svc.title.toLowerCase()} ?`,
      a: "Vous pouvez réserver en ligne ou me contacter directement sur WhatsApp. Les modalités sont précisées au moment de la réservation.",
    },
    {
      q: `Quels sont les tarifs pour ${svc.title.toLowerCase()} ?`,
      a: "Les tarifs dépendent de la prestation et de la formule choisie. La page Prestations présente les prix à jour.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content={robotsDirective} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${svc.title} près de ${city.name}`,
          "provider": { "@id": "https://www.tourma-line.fr/#business" },
          "areaServed": [
            { "@type": "City", "name": city.name },
            { "@type": "AdministrativeArea", "name": city.region },
            { "@type": "Country", "name": city.country },
          ],
          "description": metaDescription,
          "url": canonicalUrl,
        })}</script>
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <main>
        <section className="relative overflow-hidden bg-brand-dark pb-20 pt-32 text-white">
          <img
            src="/hero-tourma-line.jpg"
            alt={`Tourma-Line — ${svc.title} près de ${city.name}`}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/75 to-brand-dark" />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gray-400">
              <Link to="/" className="hover:text-brand-lilas">Accueil</Link>
              <span className="mx-2">/</span>
              <Link to={`/${svc.slug}`} className="hover:text-brand-lilas">{svc.title}</Link>
              <span className="mx-2">/</span>
              <span className="text-brand-lilas">{city.name}</span>
            </nav>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-lilas">
              Cabinet à Gerponville · séance à distance selon la prestation
            </p>
            <h1 className="mb-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {headline}
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {locationIntro}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ConversionLink kind="booking" placement="local-hero"
                href="https://cal.com/tourma-line"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lilas px-7 py-4 font-bold text-brand-dark"
              >
                <CalendarIcon className="h-5 w-5" />
                {svc.cta}
              </ConversionLink>
              <ConversionLink kind="whatsapp" placement="local-hero"
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-4 font-bold text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </ConversionLink>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-lilas/10">
          <AnimateOnScroll>
            <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="rounded-3xl border border-brand-lilas/30 bg-white p-8 sm:p-10">
                <div className="mb-5 text-brand-purple">{svc.icon}</div>
                <h2 className="mb-5 font-display text-3xl text-brand-dark">{svc.title}</h2>
                <p className="mb-6 text-lg leading-relaxed text-gray-700">{svc.what}</p>
                {premiumContent?.serviceAngle && (
                  <p className="rounded-2xl bg-brand-lilas/20 p-5 leading-relaxed text-gray-700">
                    {premiumContent.serviceAngle}
                  </p>
                )}
              </article>

              <aside className="rounded-3xl bg-brand-dark p-8 text-white">
                <MapPinIcon className="mb-5 h-8 w-8 text-brand-lilas" />
                <h2 className="mb-3 font-display text-2xl font-bold">Cabinet à Gerponville</h2>
                <p className="mb-4 leading-relaxed text-gray-300">
                  4 résidence Les Peupliers, 76540 Gerponville, Seine-Maritime.
                </p>
                <p className="mb-6 leading-relaxed text-gray-300">
                  Certaines prestations peuvent également être proposées à distance.
                </p>
                <ConversionLink kind="phone" placement="local-phone"
                  href="tel:+33649653186"
                  className="inline-flex items-center gap-2 font-semibold text-brand-lilas hover:underline"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Appeler Line · 06 49 65 31 86
                </ConversionLink>
              </aside>
            </div>
          </AnimateOnScroll>
        </section>

        {premiumContent?.localContext && (
          <section className="py-16">
            <div className="mx-auto max-w-4xl px-6">
              <h2 className="mb-5 font-display text-3xl text-brand-dark">
                {premiumContent.localHeading}
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">{premiumContent.localContext}</p>
              {premiumContent.directionsUrl && (
                <a
                  href={premiumContent.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex font-semibold text-brand-purple hover:underline"
                >
                  {premiumContent.directionsLabel} ↗
                </a>
              )}
            </div>
          </section>
        )}

        <section className="border-y border-brand-lilas/30 bg-brand-lilas/10 py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-8 text-center font-display text-3xl text-brand-dark">Questions fréquentes</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {faq.map((item) => (
                <article key={item.q} className="rounded-2xl bg-white p-6 border border-brand-lilas/30">
                  <h3 className="mb-3 font-semibold text-brand-dark">{item.q}</h3>
                  <p className="leading-relaxed text-gray-600">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {relatedCities.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="mb-8 text-center font-display text-3xl text-brand-dark">
                Retrouvez les informations pratiques pour votre secteur
              </h2>
              <div className="grid gap-4 md:grid-cols-3">
                {relatedCities.map((related) => (
                  <Link
                    key={related.slug}
                    to={`/${svc.slug}-${related.slug}`}
                    className="rounded-2xl border border-brand-lilas/30 bg-brand-lilas/10 p-6 text-center font-semibold text-brand-dark hover:border-brand-purple"
                  >
                    {svc.title} près de {related.name}
                  </Link>
                ))}
              </div>
              {territoryHub && (
                <p className="mt-8 text-center text-gray-600">
                  Voir aussi le secteur <Link to={territoryHub.path} className="font-semibold text-brand-purple hover:underline">{territoryHub.label}</Link>.
                </p>
              )}
            </div>
          </section>
        )}

        <Testimonials />

        <section className="py-20 bg-brand-dark text-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Vous souhaitez faire le point ?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Je vous reçois à Gerponville ou à distance selon la prestation choisie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionLink kind="booking" placement="local-bottom"
                href="https://cal.com/tourma-line"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-full text-lg"
              >
                Prendre rendez-vous
              </ConversionLink>
              <Link
                to="/"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full text-lg border border-white/20 flex items-center justify-center gap-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
