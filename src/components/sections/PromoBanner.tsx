import { CalPopupButton } from "../booking/CalPopupButton";

const PROMO = {
  enabled: true,
  endsAt: "2026-11-01T00:00:00+01:00",
  normalPrice: "70 €",
  promoPrice: "55 €",
  period: "du 15 au 31 octobre 2026",
  calLink: "tourma-line/120min",
  choices: [
    {
      label: "En présentiel",
      calLink: "tourma-line/120min",
    },
    {
      label: "À distance",
      calLink: "tourma-line/consultation-guidance-complete-1ere-seance-a-distance",
    },
  ],
};

const isPromoVisible = () => {
  if (!PROMO.enabled) return false;
  return Date.now() < new Date(PROMO.endsAt).getTime();
};

export const PromoBanner = () => {
  if (!isPromoVisible()) return null;

  return (
    <section aria-label="Offre spéciale Consultation Guidance Complète" className="bg-white">
      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-brand-lilas/60 bg-[#FBF7FF] shadow-2xl shadow-brand-purple/10">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="px-6 py-7 sm:px-9 sm:py-8">
              <div className="mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="rounded-full bg-brand-purple-dark px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
                  Offre limitée
                </span>
                <span className="rounded-full border border-brand-purple/25 bg-white px-4 py-1.5 text-sm font-semibold text-brand-purple-dark">
                  15 octobre → 31 octobre 2026
                </span>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="font-display text-2xl font-bold leading-tight text-brand-dark sm:text-3xl lg:text-4xl">
                  Première Consultation Guidance Complète
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                  Une offre ponctuelle pour faire le point en profondeur : numérologie, année personnelle
                  et guidance personnalisée.
                </p>
              </div>
            </div>

            <div className="bg-white px-6 py-7 text-center sm:px-9 lg:min-w-[310px] lg:border-l lg:border-brand-lilas/50">
              <p className="text-sm font-semibold text-gray-500">Prix exceptionnel</p>
              <div className="mt-2 flex items-end justify-center gap-3">
                <span className="text-2xl font-semibold text-gray-400 line-through">{PROMO.normalPrice}</span>
                <span className="font-display text-5xl font-bold leading-none text-brand-purple-dark">{PROMO.promoPrice}</span>
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600">{PROMO.period}</p>

              <div className="mt-6 flex flex-col items-center gap-2">
              <CalPopupButton
                placement="promo-guidance-complete"
                calLink={PROMO.calLink}
                choices={PROMO.choices}
                className="w-full rounded-full bg-brand-purple-dark px-7 py-3 text-center font-bold text-white shadow-lg transition hover:bg-brand-purple hover:scale-105 active:scale-95"
              >
                Réserver l'offre
              </CalPopupButton>
              <p className="text-xs text-gray-500">Valable uniquement sur la première consultation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
