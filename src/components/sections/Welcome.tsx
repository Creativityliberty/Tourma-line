import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { HeartHandIcon, KeyIcon, SparklesIcon } from "../ui/icons";

export const Welcome = () => {
    return (
        <section id="bienvenue" className="py-20 bg-white">
            <AnimateOnScroll>
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-brand-dark mb-4">
                        Bonjour et bienvenue, je suis Tourma-Line.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        Je suis numérologue, cartomancienne et praticienne en soins
                        énergétiques Lahochi. Mon objectif est de vous accompagner sur votre
                        chemin de vie en vous offrant des outils puissants et des soins
                        adaptés à vos besoins spécifiques.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10">
                        <AnimateOnScroll animationClass="animate-fadeInLeft" delay={0}>
                            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                                <HeartHandIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float" />
                                <h3 className="text-2xl font-display text-brand-dark mb-2">
                                    Approche humaine et bienveillante
                                </h3>
                                <p className="text-gray-700">
                                    Chaque consultation est un moment d'écoute et de partage. Mon
                                    objectif est de vous accompagner dans le respect de vos
                                    besoins et de vos attentes.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animationClass="animate-scaleIn" delay={200}>
                            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                                <KeyIcon
                                    className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float"
                                    style={{ animationDelay: "0.5s" }}
                                />
                                <h3 className="text-2xl font-display text-brand-dark mb-2">
                                    Un chemin vers l'auto-connaissance
                                </h3>
                                <p className="text-gray-700">
                                    Grâce à la numérologie et à la cartomancie, vous obtiendrez
                                    des réponses qui vous permettront d'avancer plus sereinement,
                                    tout en découvrant des clés pour mieux comprendre votre vie.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animationClass="animate-fadeInRight" delay={400}>
                            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                                <SparklesIcon
                                    className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float"
                                    style={{ animationDelay: "1s" }}
                                />
                                <h3 className="text-2xl font-display text-brand-dark mb-2">
                                    Guérison énergétique
                                </h3>
                                <p className="text-gray-700">
                                    Les soins LAHOCHI sont une véritable source de revitalisation
                                    et de guérison, tant sur le plan physique qu'émotionnel, vous
                                    permettant de vous reconnecter à votre énergie vitale.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
