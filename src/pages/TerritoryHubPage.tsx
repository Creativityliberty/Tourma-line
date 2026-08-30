import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";
import {
  CalendarIcon,
  HashIcon,
  LayersIcon,
  MapPinIcon,
  WavesIcon,
  WhatsAppIcon,
} from "../components/ui/icons";
import { getPremiumLocalTargetsForCity } from "../data/localSeoStrategy.mjs";
import { ConversionLink } from "../components/ui/ConversionLink";

interface TerritoryCity {
  slug: string;
  label: string;
}

interface TerritoryHub {
  slug: string;
  path: string;
  label: string;
  shortLabel: string;
  pageTitle: string;
  headline: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  localContext: string;
  boundaryNote: string;
  facts: string[];
  featuredCities: TerritoryCity[];
  coverageExamples: string[];
  officialSourceLabel: string;
  officialSourceUrl: string;
}

interface TerritoryHubPageProps {
  hub: TerritoryHub;
}

const services = [
  {
    slug: "cartomancie",
    title: "Voyance & cartomancie",
    description: "Voyante, cartomancie, tirage de cartes et guidance, au cabinet de Gerponville ou à distance.",
    icon: <LayersIcon className="h-7 w-7" />,
  },
  {
    slug: "numerologie",
    title: "Numérologie",
    description: "Chemin de vie, année personnelle, cycles et lecture numérologique avec Line Simon.",
    icon: <HashIcon className="h-7 w-7" />,
  },
  {
    slug: "soin-lahochi",
    title: "Soin énergétique Lahochi",
    description: "Séance énergétique de bien-être, de détente et de recentrage, sans promesse thérapeutique.",
    icon: <WavesIcon className="h-7 w-7" />,
  },
];

const serviceLabelBySlug: Record<string, string> = {
  cartomancie: "Voyance & cartomancie",
  numerologie: "Numérologie",
  "soin-lahochi": "Soin énergétique Lahochi",
};

export const TerritoryHubPage = ({ hub }: TerritoryHubPageProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hub.slug]);

  const canonicalUrl = `https://www.tourma-line.fr${hub.path}`;
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) event.preventDefault();
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: hub.headline,
    url: canonicalUrl,
    description: hub.metaDescription,
    isPartOf: { "@id": "https://www.tourma-line.fr/#website" },
    about: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      provider: { "@id": "https://www.tourma-line.fr/#business" },
    })),
    spatialCoverage: { "@type": "Place", name: hub.label },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: hub.featuredCities.map((city, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: city.label,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.tourma-line.fr/" },
      { "@type": "ListItem", position: 2, name: "Zones couvertes", item: "https://www.tourma-line.fr/#consultations-france" },
      { "@type": "ListItem", position: 3, name: hub.label, item: canonicalUrl },
    ],
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>{hub.pageTitle}</title>
        <meta name="description" content={hub.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tourma-Line" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content={hub.pageTitle} />
        <meta property="og:description" content={hub.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.tourma-line.fr/hero-tourma-line.jpg" />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <main>
        <section className="relative overflow-hidden bg-brand-dark pb-20 pt-32 text-white">
          <img
            src="/hero-tourma-line.jpg"
            alt={`Tourma-Line — ${hub.label}`}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/75 to-brand-dark" />
          <div className="relative z-10 mx-auto max-w-5xl px-6">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm text-gray-400">
              <Link to="/" className="hover:text-brand-lilas">Accueil</Link>
              <span className="mx-2">/</span>
              <span>Zones couvertes</span>
              <span className="mx-2">/</span>
              <span className="text-brand-lilas">{hub.label}</span>
            </nav>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-lilas">
              {hub.eyebrow}
            </p>
            <h1 className="mb-6 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              {hub.headline}
            </h1>
            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {hub.intro}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ConversionLink kind="booking" placement="hero"
                href="https://cal.com/tourma-line"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-lilas px-7 py-4 font-bold text-brand-dark"
              >
                <CalendarIcon className="h-5 w-5" />
                Réserver une séance
              </ConversionLink>
              <ConversionLink kind="whatsapp" placement="hero"
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

        <section className="border-b border-brand-lilas/20 bg-brand-lilas/10 py-16">
          <AnimateOnScroll>
            <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.35fr_0.65fr]">
              <article className="rounded-3xl border border-brand-lilas/30 bg-white p-8 sm:p-10">
                <h2 className="mb-5 font-display text-3xl text-brand-dark">Comprendre la zone</h2>
                <p className="mb-5 text-lg leading-relaxed text-gray-700">{hub.localContext}</p>
                <p className="rounded-2xl bg-brand-lilas/20 p-5 leading-relaxed text-gray-700">
                  {hub.boundaryNote}
                </p>
              </article>

              <aside className="rounded-3xl bg-brand-dark p-8 text-white">
                <MapPinIcon className="mb-5 h-8 w-8 text-brand-lilas" />
                <h2 className="mb-3 font-display text-2xl font-bold">Cabinet à Gerponville</h2>
                <p className="mb-5 leading-relaxed text-gray-300">
                  4 résidence Les Peupliers, 76540 Gerponville. C'est l'unique adresse physique de Tourma-Line.
                </p>
                <Link to="/consultation-a-distance" className="font-semibold text-brand-lilas hover:underline">
                  Vous êtes plus loin ? Voir les consultations à distance →
                </Link>
              </aside>
            </div>
          </AnimateOnScroll>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">3 accompagnements</p>
              <h2 className="font-display text-3xl text-brand-dark sm:text-4xl">Que recherchez-vous dans {hub.shortLabel} ?</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="group rounded-3xl border border-brand-lilas/30 bg-brand-lilas/10 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 text-brand-purple">{service.icon}</div>
                  <h3 className="mb-3 font-display text-2xl text-brand-dark group-hover:text-brand-purple">{service.title}</h3>
                  <p className="leading-relaxed text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-brand-lilas/30 bg-brand-lilas/10 py-14">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-3xl border border-brand-lilas/30 bg-white p-8 sm:p-10 md:flex md:items-center md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">Guide Seine-Maritime</p>
                <h2 className="mb-4 font-display text-3xl text-brand-dark">Choisir entre le cabinet et la consultation à distance</h2>
                <p className="leading-relaxed text-gray-600">
                  Selon votre lieu de résidence et la prestation choisie, notre guide vous aide à décider s'il est plus simple de venir à Gerponville ou de réserver une séance à distance.
                </p>
              </div>
              <Link
                to="/blog/consulter-seine-maritime-cabinet-distance"
                className="mt-6 inline-flex shrink-0 items-center justify-center rounded-full bg-brand-purple px-7 py-4 font-bold text-white transition hover:bg-brand-dark md:mt-0"
              >
                Lire le guide →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-brand-dark py-20 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-lilas">Près de chez vous</p>
              <h2 className="mb-4 font-display text-3xl font-bold sm:text-4xl">Villes et secteurs autour de {hub.shortLabel}</h2>
              <p className="leading-relaxed text-gray-300">
                Vous habitez dans ce secteur ? Retrouvez les pages dédiées lorsqu'elles sont disponibles, ou consultez directement les trois prestations principales de Tourma-Line.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {hub.featuredCities.map((city) => {
                const priorityTargets = getPremiumLocalTargetsForCity(city.slug);
                return (
                  <article key={city.slug} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                    <h3 className="mb-4 font-display text-xl font-bold">{city.label}</h3>
                    {priorityTargets.length > 0 ? (
                      <div className="space-y-2">
                        {priorityTargets.map((target) => (
                          <Link
                            key={`${target.serviceSlug}-${target.citySlug}`}
                            to={`/${target.serviceSlug}-${target.citySlug}`}
                            className="block text-sm font-semibold text-brand-lilas hover:underline"
                          >
                            {serviceLabelBySlug[target.serviceSlug] ?? target.serviceSlug} près de {city.label} →
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm leading-relaxed text-gray-300">
                        Vous habitez {city.label} ? Les trois prestations restent accessibles depuis le cabinet de Gerponville ou à distance selon la formule.
                      </p>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-7">
              <h3 className="mb-4 font-display text-2xl font-bold">Communes couvertes dans ce secteur</h3>
              <p className="leading-relaxed text-gray-300">{hub.coverageExamples.join(" · ")}</p>
              <p className="mt-4 text-sm text-gray-400">Liste indicative, non exhaustive. Si votre commune n'apparaît pas, contactez Line pour vérifier la modalité la plus simple.</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 font-display text-3xl text-brand-dark">Source territoriale</h2>
            <p className="mb-6 text-gray-600">
              Les informations de périmètre et de communes s'appuient sur la source territoriale indiquée ci-dessous. Le cabinet Tourma-Line reste situé à Gerponville.
            </p>
            <a
              href={hub.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-purple hover:underline"
            >
              {hub.officialSourceLabel} ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
