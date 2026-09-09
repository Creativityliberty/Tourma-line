import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";

export const Benefits = () => {
  const benefitsList = [
    "Comprendre certains schémas qui se répètent dans votre parcours.",
    "Mettre des mots sur ce que vous ressentez.",
    "Prendre du recul sur une relation ou une situation.",
    "Mieux comprendre votre période actuelle.",
    "Explorer une décision ou un changement avec un autre regard.",
    "Vous accorder un moment calme avec le Lahochi.",
    "Repartir avec des éléments qui vous aideront à poursuivre votre réflexion.",
  ];

  return (
    <section id="bienfaits" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-4">
            Ce que mes pratiques peuvent vous apporter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Chaque séance est une étape vers plus de clarté, d&apos;harmonie et de confiance en vous.
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
