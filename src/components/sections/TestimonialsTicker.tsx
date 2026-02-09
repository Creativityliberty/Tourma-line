
const citations = [
  {
    text: "Extrêmement efficace, précise dans le moindre détail, comme si elle connaissait mes projets, ma situation financière, ma relation avec mes fils.",
    author: "Jm",
    keywords: "précision, justesse, confiance",
  },
  {
    text: "Elle a su mettre des mots sur ce que je ressentais, avec une précision qui m'a touchée en plein cœur.",
    author: "Patricia",
    keywords: "mots sur mes ressentis, accompagnement, transformation",
  },
  {
    text: "Sans mots tellement des vérités ont été dites. Personne très forte.",
    author: "Aurélie",
    keywords: "vérité, force, clarté",
  },
  {
    text: "Prédictions toujours justes. Très à l'écoute et d'une extrême gentillesse.",
    author: "Gaelle",
    keywords: "prédictions justes, écoute, gentillesse",
  },
  {
    text: "M'a soulagé de mon angoisse. Une belle découverte.",
    author: "Christine",
    keywords: "soulagement, angoisse, détente",
  },
  {
    text: "Les mots de Line m'ont accompagnée et permis de transformer cette épreuve en opportunité.",
    author: "Patricia",
    keywords: "transformation, épreuve en opportunité, accompagnement",
  },
  {
    text: "Le tirage était très clair, le passé vu était juste, ainsi que les situations actuelles vécues.",
    author: "Jennifer",
    keywords: "clair, confirmation des ressentis, guidage",
  },
];

export const TestimonialsTicker = () => {
  // Dupliquer les citations pour un défilement infini fluide
  const duplicatedCitations = [...citations, ...citations];

  return (
    <div className="w-full bg-brand-purple/10 py-8 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedCitations.map((citation, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-10 max-w-md md:max-w-lg"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-brand-purple">
                <p className="text-gray-700 italic text-sm md:text-base leading-relaxed mb-3">
                  "{citation.text}"
                </p>
                <p className="text-brand-purple font-semibold text-sm text-right mb-1">
                  — {citation.author}
                </p>
                <p className="text-gray-500 text-xs text-right italic">
                  {citation.keywords}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
