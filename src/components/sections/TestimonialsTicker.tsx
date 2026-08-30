import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "../ui/icons";

const citations = [
  {
    text: "Extrêmement efficace, précise dans le moindre détail, comme si elle connaissait mes projets, ma situation financière, ma relation avec mes fils.",
    author: "Jm",
  },
  {
    text: "Elle a su mettre des mots sur ce que je ressentais, avec une précision qui m'a touchée en plein cœur.",
    author: "Patricia",
  },
  {
    text: "Le tirage était très clair, le passé vu était juste, ainsi que les situations actuelles vécues.",
    author: "Jennifer",
  },
];

export const TestimonialsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-x-0");

  const changeSlide = (newIndex: number) => {
    setFadeState("opacity-0 -translate-x-4 scale-95");
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState("opacity-100 translate-x-0 scale-100");
    }, 200);
  };

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
    <section aria-label="Extraits d'avis clients" className="w-full bg-brand-purple/5 py-10 relative border-y border-brand-lilas/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-7">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-brand-purple font-semibold mb-2">
            Extraits d'avis clients
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Des personnes venues avec leurs questions, leurs doutes et leurs décisions à prendre.
          </p>
        </div>

        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-7 md:p-9 shadow-lg border border-white/60 max-w-2xl mx-auto transition-all duration-300 hover:shadow-xl">
          <div className="absolute -top-5 left-8 bg-brand-purple text-white p-3 rounded-2xl shadow-lg shadow-brand-purple/20">
            <QuoteIcon className="w-5 h-5" />
          </div>

          <div className="min-h-[135px] md:min-h-[120px] flex flex-col justify-between">
            <div className={`transition-all duration-300 ease-out ${fadeState}`}>
              <p className="text-gray-700 italic text-base md:text-lg leading-relaxed mb-6 font-medium">
                "{citations[currentIndex].text}"
              </p>
            </div>

            <div className="border-t border-brand-lilas/30 pt-4 mt-auto text-right">
              <span className="text-brand-purple font-semibold text-base md:text-lg">
                — {citations[currentIndex].author}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 mt-7">
          <button
            onClick={handlePrev}
            aria-label="Témoignage précédent"
            className="bg-white hover:bg-brand-purple hover:text-white text-brand-dark p-2.5 rounded-full shadow-md border border-brand-lilas/20 transition-all duration-300 active:scale-90 hover:scale-105"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

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
    </section>
  );
};
