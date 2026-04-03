import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { allCities, localCities } from "../../data/cities";
import { WhatsAppIcon, GlobeIcon } from "../ui/icons";

// Toutes les villes pour la banderolle
const marqueeItems = allCities.map(c => `${c.flag} ${c.name}`);

export const CityLinks = () => {
  return (
    <section id="consultations-france" className="py-20 bg-white overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-6xl">

          {/* Header */}
          <div className="text-center mb-14">
            <div className="flex flex-col items-center mb-3">
              <GlobeIcon className="w-6 h-6 text-brand-lilas mb-2" />
              <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest">
                Consultation à distance
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
              Où que vous soyez
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              En cabinet à Gerponville, par téléphone ou visio pour toute la France
              et le monde francophone — la même précision, quelle que soit la distance.
            </p>
          </div>

          {/* Banderolle défilante */}
          <div className="relative mb-14">
            {/* Gradient fade left */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            {/* Gradient fade right */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap gap-3 py-2">
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center bg-brand-lilas/20 text-brand-dark text-sm font-medium px-5 py-2.5 rounded-full border border-brand-lilas/30 flex-shrink-0"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>



          {/* CTA */}
          <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 text-center text-white">
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Peu importe où vous êtes — une séance est possible.
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Contactez-moi via WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
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
