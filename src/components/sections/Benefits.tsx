import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";

export const Benefits = () => {
    const benefitsList = [
        "Clarté et prise de décision : Obtenez des réponses à vos questions et prenez des décisions éclairées pour votre avenir.",
        "Meilleure connaissance de soi : Mettez en lumière vos talents et comprenez les défis de votre vie pour mieux les surmonter.",
        "Libération des blocages : Relâchez les tensions et les blocages énergétiques qui vous freinent.",
        "Apaisement et réduction du stress : Retrouvez un état de relaxation profonde et diminuez l'anxiété du quotidien.",
        "Harmonie intérieure : Rééquilibrez vos énergies et vos chakras pour un bien-être global.",
        "Confiance et sérénité : Avancez sur votre chemin de vie avec plus d'assurance et de paix intérieure.",
    ];

    return (
        <section id="bienfaits" className="py-20 bg-brand-green">
            <AnimateOnScroll>
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl font-display text-brand-dark mb-4">
                        Ce que mes pratiques peuvent vous apporter
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        Chaque séance est une étape vers plus de clarté, d'harmonie et de
                        confiance en vous.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                        {benefitsList.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-4">
                                <SparklesIcon className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                                <p className="text-gray-700">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
