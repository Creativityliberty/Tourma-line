import { Link } from "react-router-dom";
import { QuoteIcon } from "../ui/icons";

const citations = [
  "Vous avez su me décrire avec une grande justesse, ce qui m’a profondément touchée.",
  "Guidance d’une justesse et d’une pertinence surprenante, réalisée en toute bienveillance et pudeur.",
  "Le tirage était très clair, le passé vu était juste, ainsi que les situations actuelles vécues.",
];

export const TestimonialsTicker = () => {
  return (
    <section
      aria-label="Extraits d'avis clients"
      className="w-full bg-brand-purple/5 py-10 border-y border-brand-lilas/20"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-7">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-brand-purple font-semibold mb-2">
            Extraits d'avis clients
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Des retours qui parlent de justesse, de bienveillance et de clarté.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {citations.map((citation) => (
            <article
              key={citation}
              className="relative bg-white/85 rounded-3xl p-6 pt-8 shadow-md border border-white/70"
            >
              <div className="absolute -top-4 left-6 bg-brand-purple text-white p-2.5 rounded-2xl shadow-md">
                <QuoteIcon className="w-4 h-4" />
              </div>
              <p className="text-gray-700 italic leading-relaxed">“{citation}”</p>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center">
          <p className="font-semibold text-brand-dark">★★★★★ 5,0/5 Google · 26 avis</p>
          <Link
            to="/avis"
            className="text-brand-purple font-semibold underline underline-offset-4 hover:opacity-80"
          >
            Voir tous les avis
          </Link>
        </div>
      </div>
    </section>
  );
};
