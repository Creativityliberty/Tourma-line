import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { nationalCities, internationalCities, localCities } from "../../data/cities";
import { WhatsAppIcon } from "../ui/icons";

export const CityLinks = () => {
  const featuredNational = nationalCities.slice(0, 8);
  const featuredInternational = internationalCities.slice(0, 5);

  return (
    <section id="consultations-france" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest mb-3">
              🌍 Consultation à distance
            </p>
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
              Où que vous soyez en France{" "}
              <span className="text-brand-lilas">& dans le monde francophone</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Que vous soyez à Paris, Nice, Bordeaux, Bruxelles ou Genève —
              les consultations de numérologie, cartomancie et soins Lahochi
              se font par <strong>téléphone ou visio</strong>, avec la même précision
              qu'une séance en cabinet.
            </p>
          </div>

          {/* Cabinet local */}
          <div className="mb-12 bg-brand-lilas/20 rounded-2xl p-6 border border-brand-lilas/30">
            <p className="text-sm font-semibold text-brand-dark uppercase tracking-widest mb-4">
              📍 Cabinet en Normandie — Consultations en présentiel
            </p>
            <div className="flex flex-wrap gap-2">
              {localCities.map((city) => (
                <a
                  key={city.slug}
                  href={`/numerologie-${city.slug}`}
                  className="bg-white text-brand-dark text-sm font-medium px-4 py-2 rounded-full border border-brand-lilas hover:bg-brand-lilas hover:text-brand-dark transition-all duration-200 hover:scale-105"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>

          {/* France nationale */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              🇫🇷 France — Par téléphone ou visio
            </p>
            <div className="flex flex-wrap gap-3">
              {featuredNational.map((city) => (
                <a
                  key={city.slug}
                  href={`/numerologie-${city.slug}`}
                  className="group flex items-center gap-2 bg-gray-50 hover:bg-brand-purple text-gray-700 hover:text-white text-sm font-medium px-5 py-2.5 rounded-full border border-gray-200 hover:border-brand-purple transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  <span>{city.flag}</span>
                  <span>{city.name}</span>
                  <span className="text-gray-400 group-hover:text-white/70 text-xs">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* International francophone */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-4">
              🌍 International francophone
            </p>
            <div className="flex flex-wrap gap-3">
              {featuredInternational.map((city) => (
                <a
                  key={city.slug}
                  href={`/numerologie-${city.slug}`}
                  className="group flex items-center gap-2 bg-brand-dark/5 hover:bg-brand-dark text-brand-dark hover:text-white text-sm font-medium px-5 py-2.5 rounded-full border border-brand-dark/20 hover:border-brand-dark transition-all duration-200 hover:scale-105 hover:shadow-md"
                >
                  <span>{city.flag}</span>
                  <span>{city.name}</span>
                  <span className="text-xs opacity-50 group-hover:opacity-70">{city.country}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 text-center text-white">
            <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest mb-3">
              Votre ville n'est pas listée ?
            </p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4">
              Peu importe où vous êtes — une séance est possible.
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              La numérologie et la cartomancie se pratiquent à distance avec la même
              précision. Contactez directement via WhatsApp pour un premier échange gratuit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Contacter sur WhatsApp
              </a>
              <a
                href="https://cal.com/line-simon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95"
              >
                Réserver en ligne
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
