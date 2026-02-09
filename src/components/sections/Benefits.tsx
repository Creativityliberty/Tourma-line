import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { SparklesIcon } from "../ui/icons";

export const Benefits = () => {
  const benefitsList = [
    "Comprendre enfin pourquoi vous traversez ces situations répétitives — les schémas de votre vie prennent sens.",
    "Mettre des mots sur ce que vous ressentez sans pouvoir l'exprimer vous-même, comme Patricia : 'une précision qui m'a touchée en plein cœur'.",
    "Relâcher cette tension qui vous habite depuis des mois — un vrai soulagement physique et émotionnel.",
    "Dormir mieux, vous sentir moins lourd(e) au quotidien, retrouver un sommeil réparateur.",
    "Transformer votre épreuve (deuil, rupture, stress) en opportunité de changement, comme l'a vécu Patricia.",
    "Avancer avec assurance sur votre chemin — des choix éclairés par des réponses justes et précises.",
  ];

  return (
    <section id="bienfaits" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-4">
            Ce que mes pratiques peuvent vous apporter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Chaque séance est une étape vers plus de clarté, d'harmonie et de
            confiance en vous.
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
