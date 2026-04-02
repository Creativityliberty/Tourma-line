import { useState } from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

const FAQItem = ({
  question,
  answer,
}: {
  key?: number;
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-lilas last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-brand-dark">{question}</h3>
        <span
          className={`text-brand-purple transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      question:
        "J'ai déjà consulté des professionnels de la guidance et j'ai été déçu(e). En quoi est-ce différent avec vous ?",
      answer:
        "C'est une question que j'entends souvent. Ce qui change : la précision dans les détails concrets de votre vie. Pas de généralités qui pourraient s'appliquer à tout le monde. Mes clients disent souvent : 'comme si vous connaissiez ma vie'. Votre date de naissance révèle des éléments spécifiques que nous explorons ensemble.",
    },
    {
      question:
        "Je ne sais pas quoi demander, est-ce que ça marche quand même ?",
      answer:
        "Absolument. Beaucoup viennent simplement avec le sentiment de 'ne pas voir clair'. La séance s'adapte à vous. Comme Patricia qui cherchait de la clarté sans savoir exactement quoi demander, vous repartez avec des mots sur ce que vous ressentiez et des éléments concrets sur votre situation actuelle.",
    },
    {
      question: "J'ai peur d'apprendre des choses qui vont m'angoisser...",
      answer:
        "Mon approche est bienveillante — un simple accueil, un temps d'échange respectueux de votre rythme. L'objectif n'est pas de vous inquiéter mais de vous donner des clés pour avancer sereinement. Christine cherchait justement à se libérer de son angoisse, et c'est ce qu'elle a trouvé.",
    },
    {
      question: "Faut-il préparer des questions ?",
      answer:
        "Ce n'est pas obligatoire, mais cela peut aider à orienter la séance. Vous pouvez venir avec des questions précises ou simplement avec le besoin de faire le point.",
    },
    {
      question: "À quelle fréquence consulter ?",
      answer:
        "Cela dépend de votre situation. Certaines personnes consultent une fois par an, d'autres lors de périodes de changement.",
    },
    {
      question: "Comment se déroule le paiement ?",
      answer:
        "Pour les séances à distance (guidance, soin Lahochi, question), le paiement s'effectue au moment de la réservation via Cal.com avant le rendez-vous. Vous pouvez régler par PayPal, Lydia, virement bancaire ou carte. Pour les séances en présentiel, le règlement se fait sur place le jour du rendez-vous.",
    },
    {
      question: "Quelle est votre politique d'annulation ?",
      answer:
        "Tout rendez-vous peut être modifié ou annulé jusqu'à 24h à l'avance. Passé ce délai, la séance est due.",
    },
    {
      question:
        "Est-ce que cela remplace un médecin, un avocat ou un professionnel de santé ?",
      answer:
        "Non. Les consultations sont un accompagnement en guidance et ne remplacent pas un avis médical, juridique ou psychologique.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-12 text-center">
            Questions fréquentes
          </h2>

          <div className="mb-12 bg-brand-green/20 p-6 rounded-xl border border-brand-green">
            <h3 className="text-xl font-display text-brand-dark mb-4">
              🌿 Comment se déroule une séance ?
            </h3>
            <p className="text-gray-700 mb-2">
              Les consultations se font sur rendez-vous.
            </p>
            <p className="text-gray-700 mb-2">
              Vous pouvez venir avec des questions précises ou simplement avec
              le besoin de faire le point : la séance s'adapte à votre situation
              et à votre rythme.
            </p>
            <p className="text-sm text-gray-600 italic mt-4">
              Mon approche ne remplace en aucun cas un avis médical, juridique
              ou financier, mais elle peut vous aider à y voir plus clair, à
              comprendre les dynamiques en jeu et à avancer avec plus de
              confiance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
