import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export const About = () => {
    return (
        <section id="a-propos" className="py-20 bg-brand-lilas/30">
            <AnimateOnScroll>
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-8">
                        À propos
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Passionnée par la compréhension des parcours de vie et des cycles personnels, j'accompagne les personnes qui ressentent le besoin de mieux comprendre ce qu'elles traversent.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Mon approche allie structure, intuition et écoute, avec le respect du rythme et du vécu de chacun. Chaque consultation est unique, car chaque parcours l'est aussi.
                        </p>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
