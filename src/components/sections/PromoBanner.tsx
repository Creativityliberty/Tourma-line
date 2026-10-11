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
      <div className="container mx-auto px-6 -mt-8 relative z-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-brand-lilas/40 bg-gradient-to-r from-brand-purple-dark via-brand-purple to-brand-dark p-[1px] shadow-2xl shadow-brand-purple/20">
          <div className="rounded-[calc(2rem-1px)] bg-white px-6 py-6 sm:px-8 sm:py-7 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="text-center lg:text-left">
              <p className="mb-2 inline-flex rounded-full bg-brand-lilas/40 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-purple-dark">
                Offre limitée
              </p>
              <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">
                Première Consultation Guidance Complète à {PROMO.promoPrice}
              </h2>
              <p className="mt-3 text-gray-700">
                Exceptionnellement {PROMO.period}, la première consultation passe de{" "}
                <span className="font-semibold text-gray-500 line-through">{PROMO.normalPrice}</span>{" "}
                à <span className="font-bold text-brand-purple-dark">{PROMO.promoPrice}</span>.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2 lg:mt-0 lg:items-end">
              <CalPopupButton
                placement="promo-guidance-complete"
                calLink={PROMO.calLink}
                choices={PROMO.choices}
                className="rounded-full bg-brand-purple px-7 py-3 text-center font-bold text-white shadow-lg transition hover:bg-brand-purple-dark hover:scale-105 active:scale-95"
              >
                Réserver l'offre à {PROMO.promoPrice}
              </CalPopupButton>
              <p className="text-xs text-gray-500">Valable uniquement sur la première consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
