import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

const cities = [
  { name: "Fécamp", distance: "15 min", tag: "Cabinet & Domicile" },
  { name: "Valmont", distance: "10 min", tag: "Domicile" },
  { name: "Cany-Barville", distance: "20 min", tag: "Domicile" },
  { name: "Ourville-en-Caux", distance: "18 min", tag: "Domicile" },
  { name: "Saint-Riquier-ès-Plains", distance: "5 min", tag: "Cabinet" },
  { name: "Yvetot", distance: "30 min", tag: "Domicile" },
];

export const LocalZone = () => {
  return (
    <section
      id="zone-consultation"
      aria-label="Zone géographique de consultation — Line Simon, voyante Normandie"
      className="py-20 bg-brand-dark text-white"
    >
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text content */}
            <div>
              <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest mb-3">
                📍 Normandie & toute la France
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 leading-tight">
                Voyante et numérologue{" "}
                <span className="text-brand-lilas">autour de vous</span>
              </h2>
              <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                Installée à <strong className="text-white">Gerponville (76540)</strong>, en
                Seine-Maritime, je reçois en cabinet ou me déplace à domicile dans
                un rayon de 25 km autour de Fécamp — Valmont, Cany-Barville,
                Ourville-en-Caux, Saint-Riquier-ès-Plains.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Pour les personnes éloignées, les consultations de{" "}
                <strong className="text-white">
                  numérologie, cartomancie et voyance par téléphone
                </strong>{" "}
                sont disponibles pour toute la France, sans déplacement.
              </p>
              <a
                href="https://cal.com/line-simon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95"
              >
                Prendre rendez-vous en ligne
              </a>
            </div>

            {/* Right: City cards */}
            <div>
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest font-semibold">
                Villes desservies
              </p>
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city) => (
                  <div
                    key={city.name}
                    className="bg-white/10 hover:bg-white/15 transition-colors duration-200 rounded-xl p-4 border border-white/10"
                  >
                    <p className="font-semibold text-white">{city.name}</p>
                    <p className="text-xs text-brand-lilas mt-1">{city.tag}</p>
                    <p className="text-xs text-gray-400">{city.distance} de Gerponville</p>
                  </div>
                ))}
                <div className="col-span-2 bg-brand-lilas/20 border border-brand-lilas/30 rounded-xl p-4 text-center">
                  <p className="text-brand-lilas font-semibold">📞 Toute la France</p>
                  <p className="text-xs text-gray-300 mt-1">
                    Consultation à distance — Téléphone ou visio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
