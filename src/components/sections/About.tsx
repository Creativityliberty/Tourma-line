import React from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export const About = () => {
    return (
        <section id="a-propos" className="py-20 bg-brand-lilas/30">
            <AnimateOnScroll>
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-8">
                        À propos de Line
                    </h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            <strong>Line</strong> est numérologue et cartomancienne installée au 4 résidence Les Peupliers à Gerponville, en Seine-Maritime (76). Praticienne en soins énergétiques Lahochi, elle accompagne les personnes qui ressentent le besoin de mieux comprendre ce qu'elles traversent — que ce soit une période de questionnement, une transition de vie, ou simplement une quête de clarté.
                        </p>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Passionnée par la compréhension des parcours de vie et des cycles personnels, son approche allie structure, intuition et écoute, avec le respect du rythme et du vécu de chacun. Chaque consultation est unique, car chaque parcours l'est aussi.
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Réception au cabinet au 4 résidence Les Peupliers, 76540 Gerponville. Déplacements à domicile : Fécamp, Valmont, Cany-Barville, Ourville-en-Caux et alentours. Consultation à distance (téléphone / visio) pour toute la France et l'international. SIRET : 93116533600013.
                        </p>
                    </div>
                </div>
            </AnimateOnScroll>
        </section>
    );
};
