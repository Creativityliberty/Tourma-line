import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";

export const Benefits = () => {
  const benefitsList = [
    "Prendre du recul sur les situations et les schémas qui reviennent dans votre parcours.",
    "Mettre des mots sur vos questionnements et clarifier ce que vous souhaitez explorer pendant la séance.",
    "Vous accorder un temps calme de détente et de recentrage lorsque vous choisissez une séance énergétique Lahochi.",
    "Explorer une période de transition personnelle ou professionnelle avec un autre angle de lecture.",
    "Structurer vos questions autour d'une relation, d'un choix, d'une rupture ou d'un changement important.",
    "Repartir avec les éléments abordés pendant la séance pour poursuivre votre réflexion à votre rythme.",
  ];

  return (
    <section id="bienfaits" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-4">
            Ce que ces accompagnements peuvent vous apporter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Des temps de réflexion, de guidance ou de bien-être selon la prestation choisie,
            sans promesse médicale ni certitude absolue sur l'avenir.
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
