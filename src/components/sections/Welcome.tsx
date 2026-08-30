import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { HeartHandIcon, KeyIcon, SparklesIcon } from "../ui/icons";

export const Welcome = () => {
  return (
    <section id="bienvenue" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-brand-dark mb-4">
            Vous avez besoin d'y voir plus clair ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            Quand une situation prend toute la place — relation, choix professionnel, famille, projet ou période de transition —
            il devient parfois difficile de faire le tri. Je vous propose un espace où poser vos questions, mettre des mots sur ce que vous vivez
            et regarder la situation avec davantage de recul.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Selon ce que vous traversez, je m'appuie sur la cartomancie, votre date de naissance en numérologie ou une séance Lahochi de bien-être.
            L'objectif n'est pas de décider à votre place, mais de vous aider à repérer ce qui se répète, ce qui évolue et ce qui mérite votre attention aujourd'hui.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <AnimateOnScroll animationClass="animate-fadeInLeft" delay={0}>
              <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:glow">
                <HeartHandIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple animate-float" />
                <h3 className="text-xl sm:text-2xl font-display text-brand-dark mb-2">
                  Comprendre ce qui se répète
                </h3>
                <p className="text-gray-700">
                  En numérologie, votre date de naissance devient un point de départ pour explorer chemin de vie,
                  année personnelle et cycles. La lecture aide à repérer les thèmes qui reviennent et les périodes qui évoluent.
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
                  Éclairer une situation
                </h3>
                <p className="text-gray-700">
                  Une relation, une décision, une tension familiale ou un projet vous occupe ? La cartomancie sert de support pour regarder
                  la situation autrement, poser les bonnes questions et faire émerger ce qui compte pour vous.
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
                  Vous accorder un temps de recentrage
                </h3>
                <p className="text-gray-700">
                  Le Lahochi est proposé comme un moment de détente et de recentrage, au cabinet ou à distance selon la séance.
                  Il s'agit d'une pratique de bien-être qui ne se substitue pas à un suivi médical.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
