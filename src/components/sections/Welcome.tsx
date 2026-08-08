import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { HeartHandIcon, KeyIcon, SparklesIcon } from "../ui/icons";

export const Welcome = () => {
  return (
    <section id="bienvenue" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-brand-dark mb-4">
            Une pratique née d'une quête de sens
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Line s'est tournée vers la numérologie et la cartomancie pour explorer les périodes de changement,
            les questions qui reviennent et les choix qui demandent du recul. Aujourd'hui, elle utilise ces outils
            comme supports de réflexion et de guidance auprès des personnes qui la consultent.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Selon la prestation, la séance s'appuie sur votre date de naissance, vos questions ou un tirage de cartes.
            L'objectif est de vous offrir un temps d'échange structuré autour de ce que vous souhaitez comprendre ou mettre en perspective.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <AnimateOnScroll animationClass="animate-fadeInLeft" delay={0}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                <HeartHandIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float" />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Une lecture personnalisée
                </h3>
                <p className="text-gray-700">
                  En numérologie, la date de naissance sert de base à une lecture symbolique du chemin de vie,
                  de l'année personnelle et des cycles. L'échange permet ensuite de relier ces éléments aux questions
                  que vous souhaitez explorer, sans prétendre déterminer votre avenir à votre place.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animationClass="animate-scaleIn" delay={200}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                <KeyIcon
                  className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float"
                  style={{ animationDelay: "0.5s" }}
                />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Mettre vos questions à plat
                </h3>
                <p className="text-gray-700">
                  Relation, travail, famille ou transition : la cartomancie peut servir de support pour organiser
                  vos interrogations et regarder une situation sous plusieurs angles. Vous restez libre de vos décisions
                  et de la manière dont vous utilisez les éléments abordés pendant la séance.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animationClass="animate-fadeInRight" delay={400}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                <SparklesIcon
                  className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float"
                  style={{ animationDelay: "1s" }}
                />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Un temps de bien-être
                </h3>
                <p className="text-gray-700">
                  Les séances énergétiques Lahochi sont proposées comme des moments de détente et de recentrage.
                  Les ressentis sont personnels et variables : aucun résultat thérapeutique n'est garanti et cette pratique
                  ne remplace pas l'accompagnement d'un professionnel de santé lorsqu'il est nécessaire.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
