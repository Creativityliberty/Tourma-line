import React from "react";
import { consultations, type Consultation } from "../../data/consultations";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon, WhatsAppIcon, MapPinIcon, ClockIcon } from "../ui/icons";
import { ConversionLink } from "../ui/ConversionLink";

const coreConsultations = consultations.slice(0, 4);
const newLahochiOffers = consultations.slice(4);

const ConsultationCard = ({ consultation, index }: { consultation: Consultation; index: number }) => (
  <AnimateOnScroll animationClass="animate-fadeInUp" delay={index * 120}>
    <div className="shiny-card-container rounded-[2rem]">
      <div className="shiny-card-border"></div>
      <div className="shiny-card-content bg-white/60 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl hover:bg-white/85 border border-white/35">
        <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
          <img
            src={consultation.imageUrl}
            alt={consultation.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 z-10 pointer-events-none bg-brand-purple/10"></div>
        </div>

        <div className="p-6 sm:p-8 md:p-8 lg:p-10 md:w-3/5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-brand-lilas/30 text-brand-purple px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                <ClockIcon className="w-3.5 h-3.5" />
                {consultation.duration}
              </span>
              <span className="bg-brand-lilas/30 text-brand-purple px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                <MapPinIcon className="w-3.5 h-3.5" />
                {consultation.location}
              </span>
              <span className="bg-brand-lilas/30 text-brand-purple px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 uppercase tracking-wider">
                <SparklesIcon className="w-3.5 h-3.5" />
                {consultation.type}
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl md:text-3xl font-display text-brand-dark mb-2">
              {consultation.title}
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-wrap">
              {consultation.description}
            </p>

            <ul className="space-y-2 mb-8">
              {consultation.details.map((detail, i) => (
                <li key={i} className="flex items-start text-sm text-gray-600">
                  <SparklesIcon className="w-5 h-5 text-brand-purple flex-shrink-0 mr-2 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            {consultation.footerNote && (
              <p className="text-xs text-gray-500 italic mb-6">
                {consultation.footerNote}
              </p>
            )}
          </div>

          <div className="mt-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-t border-brand-lilas pt-5">
            <div className="text-center sm:text-left">
              <div className="text-base sm:text-lg lg:text-xl font-bold text-brand-purple leading-tight">
                {consultation.price.includes("·") ? (
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-center sm:justify-start">
                    {consultation.price.split("·").map((part, pIdx, arr) => (
                      <React.Fragment key={pIdx}>
                        <span className="whitespace-nowrap">{part.trim()}</span>
                        {pIdx < arr.length - 1 && (
                          <span className="text-brand-purple/60 text-sm sm:text-base font-normal">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  <span>{consultation.price}</span>
                )}
              </div>
            </div>
            <div className="flex flex-row items-center justify-center sm:justify-start lg:justify-end gap-2.5 w-full sm:w-auto shrink-0">
              {!consultation.contactOnly ? (
                <ConversionLink
                  kind="booking"
                  placement={`consultation-${consultation.id}`}
                  href="https://cal.com/tourma-line"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-purple hover:bg-opacity-90 text-white font-semibold py-2.5 px-5 rounded-full transition-transform transform hover:scale-105 active:scale-95 text-center text-xs sm:text-sm whitespace-nowrap shadow-sm"
                >
                  Réserver
                </ConversionLink>
              ) : null}
              <ConversionLink
                kind="whatsapp"
                placement={`consultation-${consultation.id}`}
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 px-4 rounded-full transition-transform transform hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-1.5 text-xs sm:text-sm whitespace-nowrap shadow-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {consultation.whatsappLabel ?? "WhatsApp"}
              </ConversionLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AnimateOnScroll>
);

export const Consultations = () => {
  return (
    <section id="consultations" className="py-20 bg-brand-green">
      <div className="container mx-auto px-6">
        <AnimateOnScroll>
          <div className="text-center">
            <h2 className="text-4xl font-display text-brand-dark mb-4">
              Mes Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16">
              Je vous accompagne à travers des consultations alliant numérologie, guidance intuitive et soins énergétiques Lahochi, pour vous aider à mieux comprendre la période que vous traversez et avancer avec plus de clarté dans vos choix. Chaque séance est un moment d'écoute, d'échange et d'éclairage, dans un cadre bienveillant, confidentiel et respectueux de votre rythme.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {coreConsultations.map((consultation, index) => (
            <ConsultationCard key={consultation.id} consultation={consultation} index={index} />
          ))}
        </div>

        <AnimateOnScroll>
          <div className="max-w-4xl mx-auto text-center mt-24 mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple mb-3">
              Nouvelles prestations
            </p>
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4">
              Le Lahochi autrement
            </h2>
            <p className="text-gray-700 text-lg">
              Je propose désormais également des séances Lahochi adaptées aux animaux ainsi qu'un travail autour de certains objets personnels.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {newLahochiOffers.map((consultation, index) => (
            <ConsultationCard key={consultation.id} consultation={consultation} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
