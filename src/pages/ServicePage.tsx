import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppIcon, MapPinIcon, ArrowLeftIcon } from "../components/ui/icons";
import { getPremiumLocalTargetsForService } from "../data/localSeoStrategy.mjs";
import { territorialHubs } from "../data/territorialHubs.mjs";
import { ConversionLink } from "../components/ui/ConversionLink";

interface ServicePageProps {
  title: string;
  headline: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  sections: {
    heading: string;
    content: string;
    icon?: React.ReactNode;
  }[];
  faq: { question: string; answer: string }[];
  ctaText: string;
  canonicalPath: string;
  breadcrumb: string;
  localInfo?: string;
  relatedGuides?: {
    title: string;
    description: string;
    path: string;
  }[];
}

export const ServicePage = ({
  title,
  headline,
  heroImage,
  heroImageAlt,
  intro,
  sections,
  faq,
  ctaText,
  canonicalPath,
  breadcrumb,
  localInfo,
  relatedGuides = [],
}: ServicePageProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
    }
  };

  const serviceSlug = canonicalPath.replace(/^\//, "");
  const priorityTargets = getPremiumLocalTargetsForService(serviceSlug);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header onNavClick={handleNavClick} />

      <section
        className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden"
        aria-label={`Page dédiée — ${breadcrumb}`}
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-brand-lilas transition-colors">
                  Accueil
                </Link>
              </li>
              <li className="text-gray-600">/</li>
              <li className="text-brand-lilas">{breadcrumb}</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
            {intro}
          </p>
          {localInfo && (
            <div className="flex items-center gap-2 text-brand-lilas font-medium">
              <MapPinIcon className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{localInfo}</p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <ConversionLink kind="booking" placement="hero"
              href="https://cal.com/tourma-line"
              target="_blank"
              rel="noopener noreferrer"
              id={`cta-hero-${breadcrumb.toLowerCase().replace(/\s/g, "-")}`}
              className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block shadow-lg animate-pulse"
            >
              {ctaText}
            </ConversionLink>
            <ConversionLink kind="whatsapp" placement="hero"
              href="https://wa.me/33649653186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block text-center flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </ConversionLink>
          </div>
        </div>
      </section>

      <main>
        <div className="container mx-auto px-6 max-w-4xl py-20">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <AnimateOnScroll key={index} animationClass="animate-fadeInUp">
                <article className="bg-brand-lilas/20 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <h2 className="text-2xl sm:text-3xl font-display text-brand-dark mb-4 flex items-center gap-4">
                    {section.icon && <div className="text-brand-purple flex-shrink-0">{section.icon}</div>}
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {priorityTargets.length > 0 && (
          <section className="py-16 bg-brand-lilas/10 border-y border-brand-lilas/30">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="text-center mb-10">
                <p className="text-brand-purple text-sm font-bold uppercase tracking-widest mb-3">
                  Priorités locales
                </p>
                <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
                  {title} dans les secteurs les plus pertinents
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Tourma-Line est installé à Gerponville. Ces pages locales répondent aux recherches
                  les plus utiles autour du cabinet, sans prétendre disposer d'un établissement dans
                  chacune de ces communes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {priorityTargets.map((target) => (
                  <Link
                    key={`${target.serviceSlug}-${target.citySlug}`}
                    to={`/${target.serviceSlug}-${target.citySlug}`}
                    className="rounded-2xl bg-white border border-brand-lilas/30 p-5 text-brand-dark hover:border-brand-purple hover:shadow-md transition-all"
                  >
                    <span className="block font-display text-xl mb-1">{target.cityLabel}</span>
                    <span className="text-sm text-gray-600">{title} près de {target.cityLabel} →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-white" aria-label="Zones couvertes">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-brand-purple text-sm font-bold uppercase tracking-widest mb-3">
                Zones couvertes
              </p>
              <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
                {title} dans le Pays de Caux et autour du cabinet
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Les communes secondaires sont regroupées dans des hubs territoriaux afin de couvrir le secteur sans multiplier des pages locales quasi identiques.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {territorialHubs.map((hub) => (
                <Link
                  key={hub.slug}
                  to={`/zones/${hub.slug}`}
                  className="rounded-2xl border border-brand-lilas/30 bg-brand-lilas/10 p-6 hover:border-brand-purple hover:shadow-md transition-all"
                >
                  <span className="block font-display text-xl text-brand-dark mb-2">{hub.label}</span>
                  <span className="text-sm leading-relaxed text-gray-600">
                    {hub.coverageExamples.slice(0, 4).join(" · ")}
                  </span>
                  <span className="mt-4 block text-sm font-semibold text-brand-purple">Explorer la zone →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {relatedGuides.length > 0 && (
          <section className="py-16 bg-brand-lilas/10 border-y border-brand-lilas/30" aria-label="Guides liés au service">
            <div className="container mx-auto px-6 max-w-5xl">
              <div className="max-w-3xl mb-10">
                <p className="text-brand-purple text-sm font-bold uppercase tracking-widest mb-3">
                  Ressources pratiques
                </p>
                <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
                  Guides pour aller plus loin
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Des réponses détaillées pour comparer les méthodes, préparer une consultation et comprendre les notions avant de réserver.
                </p>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {relatedGuides.map((guide) => (
                  <Link
                    key={guide.path}
                    to={guide.path}
                    className="group rounded-3xl border border-brand-lilas/30 bg-white p-7 transition hover:-translate-y-1 hover:border-brand-purple hover:shadow-lg"
                  >
                    <span className="block font-display text-2xl text-brand-dark mb-3 group-hover:text-brand-purple">
                      {guide.title}
                    </span>
                    <span className="block text-gray-600 leading-relaxed mb-5">{guide.description}</span>
                    <span className="font-semibold text-brand-purple">Lire le guide →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section
          className="py-20 bg-white"
          aria-label="Questions fréquentes"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-display text-brand-dark mb-12 text-center">
              Questions fréquentes sur {title.toLowerCase()}
            </h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div
                  key={index}
                  className="bg-brand-lilas/10 rounded-xl p-6 border border-brand-lilas/30"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <h3
                    className="text-lg font-semibold text-brand-dark mb-3"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600 leading-relaxed" itemProp="text">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-dark text-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Prêt(e) à réserver votre séance ?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Line vous reçoit en cabinet au 4 résidence Les Peupliers à Gerponville,
              ou en consultation téléphonique partout en France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionLink kind="booking" placement="bottom-cta"
                href="https://cal.com/tourma-line"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95"
              >
                {ctaText}
              </ConversionLink>
              <Link
                to="/"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Visiter le site internet
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
