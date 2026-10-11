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
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-amber-200 bg-[#FFF8EA] shadow-2xl shadow-amber-900/10">
          <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="px-6 py-7 sm:px-9 sm:py-8">
              <div className="mb-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="rounded-full bg-amber-500 px-5 py-2 text-sm font-black uppercase tracking-[0.18em] text-brand-dark shadow-sm sm:text-base">
                  Offre limitée
                </span>
                <span className="rounded-full border border-emerald-700/20 bg-emerald-50 px-4 py-1.5 text-sm font-bold text-emerald-800">
                  15 octobre → 31 octobre 2026
                </span>
              </div>

              <div className="text-center lg:text-left">
                <h2 className="font-display text-xl font-bold leading-tight text-brand-dark sm:text-2xl lg:text-3xl">
                  Première consultation complète
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                  Une offre ponctuelle pour faire le point en profondeur, avec numérologie,
                  année personnelle et guidance personnalisée.
                </p>
              </div>
            </div>

            <div className="bg-white/90 px-6 py-7 text-center sm:px-9 lg:min-w-[310px] lg:border-l lg:border-amber-200">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-800">Prix exceptionnel</p>
              <div className="mt-2 flex items-end justify-center gap-3">
                <span className="text-2xl font-semibold text-gray-400 line-through">{PROMO.normalPrice}</span>
                <span className="font-display text-5xl font-bold leading-none text-emerald-800">{PROMO.promoPrice}</span>
              </div>
              <p className="mt-3 text-sm font-bold text-brand-dark">{PROMO.period}</p>

              <div className="mt-6 flex flex-col items-center gap-2">
              <CalPopupButton
                placement="promo-guidance-complete"
                calLink={PROMO.calLink}
                choices={PROMO.choices}
                className="w-full rounded-full bg-emerald-800 px-7 py-3 text-center font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-700 hover:scale-105 active:scale-95"
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
