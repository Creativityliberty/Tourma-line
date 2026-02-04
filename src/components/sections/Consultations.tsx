import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { consultations } from "../../data/consultations";
import { SparklesIcon } from "../ui/icons";

export const Consultations = () => {
    return (
        <section id="consultations" className="py-20 bg-brand-green">
            <AnimateOnScroll>
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-display text-brand-dark mb-4 text-center">
                        Mes Services
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 text-center">
                        Je vous accompagne à travers des consultations alliant numérologie, guidance intuitive et soins énergétiques Lahochi, pour vous aider à mieux comprendre la période que vous traversez et avancer avec plus de clarté dans vos choix. Chaque séance est un moment d'écoute, d'échange et d'éclairage, dans un cadre bienveillant, confidentiel et respectueux de votre rythme.
                    </p>

                    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                        {consultations.map((consultation, index) => (
                            <AnimateOnScroll
                                key={consultation.id}
                                animationClass="animate-fadeInUp"
                                delay={index * 150}
                            >
                                <div className="shiny-card-container rounded-[2rem]">
                                    <div className="shiny-card-border"></div>
                                    <div className="shiny-card-content bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl">
                                        <div className="md:w-2/5 relative h-64 md:h-auto">
                                            <div className="absolute inset-0 bg-brand-purple/10 z-10"></div>
                                            <img
                                                src={consultation.imageUrl}
                                                alt={consultation.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-between">
                                            <div>
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="bg-brand-lilas/30 text-brand-purple px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                                                        ⏱️ {consultation.duration}
                                                    </span>
                                                    <span className="bg-brand-lilas/30 text-brand-purple px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                                                        📍 {consultation.location}
                                                    </span>
                                                    <span className="bg-brand-lilas/30 text-brand-purple px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                                                        💡 {consultation.type}
                                                    </span>
                                                </div>

                                                <h3 className="text-2xl md:text-3xl font-display text-brand-dark mb-2">
                                                    {consultation.title}
                                                </h3>

                                                <p className="text-gray-700 mb-6 leading-relaxed">
                                                    {consultation.description}
                                                </p>

                                                <ul className="space-y-3 mb-8">
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

                                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-lilas pt-6">
                                                <div className="text-center sm:text-left">
                                                    <p className="text-3xl font-bold text-brand-purple">{consultation.price}</p>
                                                </div>
                                                <a
                                                    href="https://calendly.com/tourma-line/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-brand-purple hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 text-center w-full sm:w-auto"
                                                >
                                                    Réserver
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
