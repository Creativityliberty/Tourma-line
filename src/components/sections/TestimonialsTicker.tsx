import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "../ui/icons";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-x-0");

  const changeSlide = (newIndex: number) => {
    // Smooth transition effect
    setFadeState("opacity-0 -translate-x-4 scale-95");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState("opacity-100 translate-x-0 scale-100");
    }, 200);
  };

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = currentIndex === citations.length - 1 ? 0 : currentIndex + 1;
      changeSlide(nextIndex);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? citations.length - 1 : currentIndex - 1;
    changeSlide(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === citations.length - 1 ? 0 : currentIndex + 1;
    changeSlide(nextIndex);
  };

  return (
    <div className="w-full bg-brand-purple/5 py-12 relative border-y border-brand-lilas/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-white/50 max-w-2xl mx-auto transition-all duration-300 hover:shadow-2xl">
          {/* Quote icon */}
          <div className="absolute -top-5 left-8 bg-brand-purple text-white p-3 rounded-2xl shadow-lg shadow-brand-purple/20">
            <QuoteIcon className="w-5 h-5" />
          </div>

          {/* Carousel Slide container */}
          <div className="min-h-[160px] md:min-h-[140px] flex flex-col justify-between">
            <div className={`transition-all duration-300 ease-out ${fadeState}`}>
              <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6 font-medium">
                "{citations[currentIndex].text}"
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-brand-lilas/30 pt-4 mt-auto">
              <span className="text-gray-500 text-xs md:text-sm font-light tracking-wide italic">
                {citations[currentIndex].keywords}
              </span>
              <span className="text-brand-purple font-semibold text-base md:text-lg">
                — {citations[currentIndex].author}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation & Bullets */}
        <div className="flex justify-center items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Témoignage précédent"
            className="bg-white hover:bg-brand-purple hover:text-white text-brand-dark p-2.5 rounded-full shadow-md border border-brand-lilas/20 transition-all duration-300 active:scale-90 hover:scale-105"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {citations.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                aria-label={`Aller au témoignage ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-6 bg-brand-purple" : "w-2 bg-brand-purple/20 hover:bg-brand-purple/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Témoignage suivant"
            className="bg-white hover:bg-brand-purple hover:text-white text-brand-dark p-2.5 rounded-full shadow-md border border-brand-lilas/20 transition-all duration-300 active:scale-90 hover:scale-105"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
