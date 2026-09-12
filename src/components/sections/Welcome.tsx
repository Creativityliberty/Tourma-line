import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { HeartHandIcon, KeyIcon, SparklesIcon } from "../ui/icons";

export const Welcome = () => {
  return (
    <section id="bienvenue" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-brand-dark mb-4">
            Mon parcours a commencé par une quête de sens.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Comme beaucoup, j&apos;ai cherché à comprendre les événements de ma vie, les schémas qui se répétaient, les questions sans réponses. La numérologie et la cartomancie m&apos;ont offert des clés — non pas magiques, mais précises et profondes.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Aujourd&apos;hui, je mets cette pratique au service de votre <strong>clarté</strong> : avec votre date de naissance, je décrypte votre chemin de vie, votre année en cours, et vous guide sur vos questions concrètes — relation, travail, transition, choix à faire.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <AnimateOnScroll animationClass="animate-fadeInLeft" delay={0}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow h-full">
                <HeartHandIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float" />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Une résonance étonnante
                </h3>
                <p className="text-gray-700">
                  Dès les premières minutes, avec seulement votre date de naissance, beaucoup sont surpris de se reconnaître dans ce qui est décrit. Votre enfance, vos schémas répétitifs, votre situation actuelle — des éléments qui vous sont propres et que vous n&apos;avez pas besoin d&apos;expliquer. Jm l&apos;a vécu : &ldquo;comme si elle connaissait mes projets, ma situation financière, ma relation avec mes fils&rdquo;. Cette justesse permet de partir d&apos;une base claire pour avancer.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-scaleIn" delay={200}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow h-full">
                <KeyIcon
                  className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float"
                  style={{ animationDelay: "0.5s" }}
                />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Donner forme à ce que vous ressentez
                </h3>
                <p className="text-gray-700">
                  Parfois, on traverse des choses sans arriver à les nommer. Patricia vivait ça : &ldquo;Elle a su mettre des mots sur ce que je ressentais, avec une précision qui m&apos;a touchée en plein cœur&rdquo;. Des réponses concrètes sur votre situation — relation, travail, famille — pour enfin avancer.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animationClass="animate-fadeInRight" delay={400}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow h-full">
                <SparklesIcon
                  className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Un moment de soulagement
                </h3>
                <p className="text-gray-700">
                  Un accueil simple, un temps d&apos;échange respectueux de votre rythme. Christine cherchait à se libérer de son angoisse : &ldquo;m&apos;a soulagé de mon angoisse&rdquo;. Moins de tension, un sommeil plus réparateur, un vrai relâchement — ce que beaucoup ressentent après le soin LAHOCHI.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
