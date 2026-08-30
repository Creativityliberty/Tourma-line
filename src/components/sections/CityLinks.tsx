import React from "react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { localCities } from "../../data/cities";
import { getPremiumLocalTargetsForCity } from "../../data/localSeoStrategy.mjs";
import { territorialHubs } from "../../data/territorialHubs.mjs";
import { WhatsAppIcon, GlobeIcon, MapPinIcon } from "../ui/icons";
import { ConversionLink } from "../ui/ConversionLink";

const serviceLabels: Record<string, string> = {
  cartomancie: "Voyance & cartomancie",
  numerologie: "Numérologie",
  "soin-lahochi": "Soin énergétique Lahochi",
};

const nearbySlugs = new Set([
  "fecamp",
  "valmont",
  "cany-barville",
  "ourville-en-caux",
  "saint-riquier-es-plains",
  "yvetot",
]);

const priorityCities = localCities
  .filter((city) => nearbySlugs.has(city.slug))
  .map((city) => ({
    city,
    targets: getPremiumLocalTargetsForCity(city.slug),
  }))
  .filter(({ targets }) => targets.length > 0);

export const CityLinks = () => {
  return (
    <section id="consultations-france" className="py-20 bg-white overflow-hidden">
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex flex-col items-center mb-3">
              <MapPinIcon className="w-6 h-6 text-brand-lilas mb-2" />
              <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest">
                Autour de Gerponville
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
              Voyance, numérologie & soins énergétiques dans votre secteur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Le cabinet Tourma-Line est à Gerponville. Retrouvez les accompagnements les plus
              recherchés autour de Fécamp, Valmont, Cany-Barville, Yvetot et la Côte d'Albâtre,
              avec une adresse de cabinet clairement indiquée et la possibilité de consulter à distance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {priorityCities.map(({ city, targets }) => (
              <article
                key={city.slug}
                className="rounded-2xl border border-brand-lilas/30 bg-brand-lilas/10 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span aria-hidden="true">{city.flag}</span>
                  <h3 className="font-display text-xl text-brand-dark">{city.name}</h3>
                </div>
                <div className="space-y-2">
                  {targets.map((target) => (
                    <Link
                      key={target.serviceSlug}
                      to={`/${target.serviceSlug}-${city.slug}`}
                      className="block text-sm font-medium text-brand-dark hover:text-brand-purple transition-colors"
                    >
                      {serviceLabels[target.serviceSlug] ?? target.serviceSlug} près de {city.name} →
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mb-14 rounded-3xl border border-brand-lilas/30 bg-brand-lilas/10 p-7 sm:p-9">
            <div className="mb-7 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-purple">
                Zones couvertes
              </p>
              <h3 className="font-display text-2xl text-brand-dark sm:text-3xl">
                Explorer les secteurs autour de Gerponville
              </h3>
              <p className="mx-auto mt-3 max-w-3xl text-gray-600">
                Retrouvez les principaux secteurs desservis autour du cabinet et les villes depuis lesquelles
                vous pouvez venir à Gerponville ou choisir une consultation à distance selon la prestation.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {territorialHubs.map((hub) => (
                <Link
                  key={hub.slug}
                  to={`/zones/${hub.slug}`}
                  className="rounded-2xl border border-white bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-purple">
                    {hub.eyebrow}
                  </p>
                  <h4 className="mb-2 font-display text-xl text-brand-dark">{hub.label}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {hub.coverageExamples.slice(0, 4).join(" · ")}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-purple">
                    Explorer la zone →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-brand-dark rounded-3xl p-8 sm:p-10 text-center text-white">
            <GlobeIcon className="w-7 h-7 text-brand-lilas mx-auto mb-3" />
            <h3 className="text-2xl sm:text-3xl font-display font-bold mb-3">
              Vous habitez plus loin ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Voyance et cartomancie, numérologie et Lahochi peuvent être proposés à distance
              selon la prestation. Le cabinet Tourma-Line se trouve uniquement à Gerponville ;
              si vous êtes plus loin, choisissez la modalité à distance qui vous convient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation-a-distance"
                className="bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95"
              >
                Voir les consultations à distance
              </Link>
              <ConversionLink kind="whatsapp" placement="city-links"
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </ConversionLink>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
