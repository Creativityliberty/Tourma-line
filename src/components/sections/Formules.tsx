import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";
import { formules } from "../../data/formules";

export const Formules = () => {
    return (
        <section id="formules" className="py-20 bg-brand-green">
            <AnimateOnScroll>
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl font-display text-brand-dark mb-4">
                        Les Formules d'Accompagnement
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        Chaque personne est unique. C'est pourquoi chaque séance commence
                        par une lecture énergétique pour un accompagnement juste, ciblé et
                        adapté à votre histoire.
                    </p>
                    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                        {formules.map((formule, index) => (
                            <AnimateOnScroll
                                key={formule.id}
                                animationClass="animate-fadeInUp"
                                delay={index * 150}
                            >
                                <div className="shiny-card-container rounded-[2rem]">
                                    <div className="shiny-card-border"></div>
                                    <div className="shiny-card-content bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse transition-all duration-300 hover:shadow-2xl border border-brand-lilas/50">
                                        {formule.imageUrl && (
                                            <div className="md:w-2/5 relative h-64 md:h-auto">
                                                <div className="absolute inset-0 bg-brand-purple/10 z-10"></div>
                                                <img
                                                    src={formule.imageUrl}
                                                    alt={formule.imageAlt || formule.title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                            </div>
                                        )}
                                        <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center gap-3 mb-4">
                                                    {React.createElement(formule.icon, {
                                                        className: "w-8 h-8 text-brand-purple",
                                                    })}
                                                    <h3 className="text-xl md:text-2xl font-display text-brand-dark">
                                                        {formule.title}
                                                    </h3>
                                                </div>
                                                <p className="text-brand-purple font-semibold mb-6">
                                                    {formule.subtitle}
                                                </p>

                                                <p className="text-gray-700 mb-4 bg-brand-lilas/20 p-4 rounded-xl">
                                                    <strong className="font-semibold text-brand-dark">Objectif :</strong>{" "}
                                                    {formule.objective}
                                                </p>

                                                <p className="font-semibold text-gray-800 mb-3 ml-1">
                                                    Contenu du programme :
                                                </p>
                                                <ul className="space-y-3 mb-8">
                                                    {formule.details.map((item, i) => (
                                                        <li key={i} className="flex items-start text-sm text-gray-600">
                                                            <SparklesIcon className="w-5 h-5 text-brand-purple flex-shrink-0 mr-3 mt-0.5" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-brand-lilas pt-6">
                                                <div className="text-center sm:text-left">
                                                    <p className="text-gray-500 text-sm mb-1">{formule.duration}</p>
                                                    <p className="text-3xl font-bold text-brand-purple">{formule.price}</p>
                                                    {formule.priceNote && (
                                                        <p className="text-xs text-gray-500 italic mt-1">{formule.priceNote}</p>
                                                    )}
                                                </div>
                                                <a
                                                    href="https://calendly.com/tourma-line/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-brand-purple hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 active:scale-95 text-center w-full sm:w-auto shadow-md"
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
