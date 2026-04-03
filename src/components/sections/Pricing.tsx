import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";

export const Pricing = () => {
    return (
        <section id="tarifs" className="py-20 bg-brand-green">
            <AnimateOnScroll>
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-4xl font-display text-brand-dark mb-4">
                        Tarifs des Séances Uniques
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-12">
                        <SparklesIcon className="w-5 h-5 text-brand-purple" />
                        <p className="text-lg text-brand-purple font-semibold">
                            Offre de bienvenue : Tous les tarifs à 50€ !
                        </p>
                        <SparklesIcon className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        <AnimateOnScroll animationClass="animate-fadeInLeft" delay={0}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                                <h3 className="text-2xl font-display mb-4">
                                    Consultation Numérologie & Cartomancie
                                </h3>
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <p className="text-5xl font-bold text-brand-purple animate-pulse">
                                        50€
                                    </p>
                                    <p className="text-3xl line-through text-gray-400">70€</p>
                                </div>
                                <p className="text-gray-700">
                                    À distance, à domicile ou au cabinet
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animationClass="animate-fadeInRight" delay={200}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                                <h3 className="text-2xl font-display mb-4">
                                    Soin énergétique LAHOCHI
                                </h3>
                                <div className="flex items-center justify-center gap-3 mb-4">
                                    <p className="text-5xl font-bold text-brand-purple animate-pulse">
                                        50€
                                    </p>
                                    <p className="text-3xl line-through text-gray-400">60€</p>
                                </div>
                                <p className="text-gray-700">À distance ou en cabinet</p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
