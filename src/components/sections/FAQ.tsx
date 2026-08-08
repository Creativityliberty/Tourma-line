import { useState } from "react";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { ChevronDownIcon, NaturalIcon } from "../ui/icons";

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
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-brand-dark">{question}</h3>
        <ChevronDownIcon
          className={`w-5 h-5 text-brand-purple transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{answer}</p>
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
        "Chaque praticien a son approche. Chez Tourma-Line, Line associe selon la formule la numérologie et la cartomancie, explique le déroulement de la séance et part de vos questions concrètes. L'objectif est que vous sachiez ce qui est proposé avant de réserver, sans promesse de résultat garanti.",
    },
    {
      question:
        "Je ne sais pas quoi demander, est-ce que je peux quand même réserver ?",
      answer:
        "Oui. Vous pouvez venir avec une question précise ou simplement avec le besoin de faire le point. La séance sert alors à structurer les sujets que vous souhaitez explorer et à prendre du recul sur votre situation.",
    },
    {
      question: "J'ai peur d'apprendre des choses qui vont m'angoisser...",
      answer:
        "L'approche se veut respectueuse et sans dramatisation. La cartomancie n'est pas présentée comme une certitude absolue sur l'avenir : vous restez libre de vos choix et pouvez arrêter ou réorienter l'échange si un sujet vous met mal à l'aise.",
    },
    {
      question: "Faut-il préparer des questions ?",
      answer:
        "Ce n'est pas obligatoire, mais cela peut aider à orienter la séance. Vous pouvez venir avec des questions précises ou simplement avec le besoin de faire le point.",
    },
    {
      question: "À quelle fréquence consulter ?",
      answer:
        "Il n'existe pas de fréquence obligatoire. Certaines personnes consultent ponctuellement lors d'une période de changement, d'autres choisissent un suivi prévu dans une formule. Vous restez libre de décider si et quand vous souhaitez reprendre rendez-vous.",
    },
    {
      question: "Comment se déroule le paiement ?",
      answer:
        "Pour les séances à distance, le paiement s'effectue selon les modalités indiquées au moment de la réservation. Pour les séances en présentiel, vérifiez les moyens de paiement acceptés auprès de Line avant le rendez-vous.",
    },
    {
      question: "Quelle est votre politique d'annulation ?",
      answer:
        "Les conditions de modification et d'annulation applicables sont indiquées lors de la réservation et dans les conditions générales du site. Consultez-les avant de valider votre rendez-vous.",
    },
    {
      question:
        "Est-ce que cela remplace un médecin, un avocat ou un professionnel de santé ?",
      answer:
        "Non. Les consultations de guidance et les séances énergétiques sont des accompagnements de réflexion ou de bien-être. Elles ne remplacent pas un avis médical, psychologique, juridique ou financier qualifié.",
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
            <div className="flex items-center gap-3 mb-4">
              <NaturalIcon className="w-6 h-6 text-brand-dark" />
              <h3 className="text-xl font-display text-brand-dark">
                Comment se déroule une séance ?
              </h3>
            </div>
            <p className="text-gray-700 mb-2">
              Les consultations se font sur rendez-vous au cabinet de Gerponville ou à distance selon la prestation.
            </p>
            <p className="text-gray-700 mb-2">
              Vous pouvez venir avec des questions précises ou simplement avec
              le besoin de faire le point : la séance s'adapte aux sujets que vous souhaitez explorer.
            </p>
            <p className="text-sm text-gray-600 italic mt-4">
              Ces accompagnements ne remplacent en aucun cas un avis médical,
              psychologique, juridique ou financier professionnel.
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
