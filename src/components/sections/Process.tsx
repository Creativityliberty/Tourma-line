import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Contactez-moi",
            description: "Par le formulaire, téléphone ou WhatsApp. Je suis à votre écoute pour vous orienter."
        },
        {
            number: "02",
            title: "Exposez votre situation",
            description: "Partagez vos questionnements et vos besoins dans un cadre bienveillant et confidentiel."
        },
        {
            number: "03",
            title: "Consultation personnalisée",
            description: "Je me connecte à vos énergies pour vous transmettre guidance et éclairages authentiques."
        },
        {
            number: "04",
            title: "Clarté et apaisement",
            description: "Vous repartez avec des réponses concrètes, une meilleure compréhension et un regard nouveau."
        }
    ];

    return (
        <section id="processus" className="py-20 bg-brand-lilas/20">
            <AnimateOnScroll>
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-16 text-center">
                        Comment se déroule une séance ?
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <AnimateOnScroll
                                key={index}
                                animationClass="animate-fadeInUp"
                                delay={index * 150}
                            >
                                <div className="text-center group">
                                    <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-purple text-brand-purple flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-display text-brand-dark mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
