import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

const contactInfo = {
  address: "4 résidence Les Peupliers",
  zipCode: "76540",
  city: "Gerponville",
  locationDetails: "Proche Saint-Riquier-ès-Plains",
};

export const LocalZone = () => {
  return (
    <section
      id="zone-consultation"
      aria-label="Zone géographique de consultation — Line, Cabinet en Normandie"
      className="py-20 bg-brand-dark text-white"
    >
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest mb-3">
              📍 Normandie & toute la France
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 leading-tight">
              Numérologue et cartomancienne{" "}
              <span className="text-brand-lilas">à votre écoute</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              Installée au <strong className="text-white">{contactInfo.address}</strong> à <strong className="text-white">{contactInfo.city} ({contactInfo.zipCode})</strong>, en
              Seine-Maritime, je vous reçois en cabinet
              sur rendez-vous pour un accompagnement personnalisé.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Pour les personnes éloignées, les consultations de{" "}
              <strong className="text-white">
                numérologie, cartomancie et soins Lahochi
              </strong>{" "}
              sont disponibles pour toute la France, sans déplacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://cal.com/line-simon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95"
              >
                Prendre rendez-vous en ligne
              </a>
            </div>

            {/* Contact Cards Centered */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="bg-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest mb-3">
                  📍 Cabinet
                </p>
                <p className="font-display font-bold text-white mb-1">{contactInfo.address}</p>
                <p className="text-gray-300">{contactInfo.zipCode} {contactInfo.city}</p>
                <p className="text-xs text-gray-400 mt-1 italic">{contactInfo.locationDetails}</p>
              </div>
              <div className="bg-brand-lilas/20 border border-brand-lilas/30 rounded-xl p-6 text-center flex flex-col justify-center">
                <p className="text-brand-lilas font-semibold">📞 Toute la France & International</p>
                <p className="text-xs text-gray-300 mt-1">
                  Consultation à distance — Téléphone ou visio
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
