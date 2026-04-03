import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppIcon, MapPinIcon, ArrowLeftIcon } from "../components/ui/icons";

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
  breadcrumb,
  localInfo,
}: ServicePageProps) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header onNavClick={handleNavClick} />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden"
        aria-label={`Page dédiée — ${breadcrumb}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label={heroImageAlt}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
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
              <p className="text-sm">
                {localInfo}
              </p>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://cal.com/line-simon"
              target="_blank"
              rel="noopener noreferrer"
              id={`cta-hero-${breadcrumb.toLowerCase().replace(/\s/g, "-")}`}
              className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block shadow-lg animate-pulse"
            >
              {ctaText}
            </a>
            <a
              href="https://wa.me/33649653186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block text-center flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
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

        {/* FAQ Section avec Schema.org FAQPage */}
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

        {/* CTA Bottom */}
        <section className="py-20 bg-brand-dark text-white text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Prêt(e) à réserver votre séance ?
            </h2>
            <p className="text-gray-300 text-lg mb-10">
              Line vous reçoit en cabinet au 4 rue de Givrandville à Gerponville,
              ou en consultation téléphonique partout en France.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/line-simon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95"
              >
                {ctaText}
              </a>
              <Link
                to="/"
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 border border-white/20 flex items-center justify-center gap-2"
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
