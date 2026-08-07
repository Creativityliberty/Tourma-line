import React from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { localCities } from "../../data/cities";
import { WhatsAppIcon, GlobeIcon, MapPinIcon } from "../ui/icons";

const localServiceLinks = [
  { slug: "cartomancie", label: "Voyance & cartomancie" },
  { slug: "numerologie", label: "Numérologie" },
  { slug: "soin-lahochi", label: "Soin énergétique" },
];

const nearbySlugs = new Set([
  "fecamp",
  "valmont",
  "cany-barville",
  "ourville-en-caux",
  "saint-riquier-es-plains",
  "yvetot",
]);

const nearbyCities = localCities.filter((city) => nearbySlugs.has(city.slug));

export const CityLinks = () => {
  return (
    <section id="consultations-france" className="py-20 bg-white overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center mb-3">
              <MapPinIcon className="w-6 h-6 text-brand-lilas mb-2" />
              <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest">
                Secteur du cabinet
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
              Voyance, numérologie & soins énergétiques près de Gerponville
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le cabinet Tourma-Line est à Gerponville. Retrouvez les pages locales utiles
              pour Fécamp, Valmont, Cany-Barville et les communes proches, sans prétendre
              disposer d'un cabinet dans chaque ville.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {nearbyCities.map((city) => (
              <article
                key={city.slug}
                className="rounded-2xl border border-brand-lilas/30 bg-brand-lilas/10 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span aria-hidden="true">{city.flag}</span>
                  <h3 className="font-display text-xl text-brand-dark">{city.name}</h3>
                </div>
                <div className="space-y-2">
                  {localServiceLinks.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/${service.slug}-${city.slug}`}
                      className="block text-sm font-medium text-brand-dark hover:text-brand-purple transition-colors"
                    >
                      {service.label} près de {city.name} →
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 text-center text-white">
            <GlobeIcon className="w-7 h-7 text-brand-lilas mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Vous habitez plus loin ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Certaines prestations sont proposées à distance par téléphone, visioconférence
              ou selon les modalités précisées lors de la réservation. Tourma-Line reste basé à Gerponville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/prestations"
                className="bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95"
              >
                Voir les prestations
              </Link>
              <a
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
