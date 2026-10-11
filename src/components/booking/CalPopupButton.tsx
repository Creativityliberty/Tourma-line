import React from "react";
import { ConversionLink } from "../ui/ConversionLink";

const DEFAULT_CAL_LINK = "tourma-line";
const CAL_POPUP_CONFIG = {
  theme: "light",
  layout: "month_view",
};

type CalPopupButtonProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  placement: string;
  calLink?: string;
  choices?: Array<{
    label: string;
    calLink: string;
  }>;
};

export const CalPopupButton = ({
  placement,
  calLink = DEFAULT_CAL_LINK,
  choices,
  children,
  ...anchorProps
}: CalPopupButtonProps) => {
  const [choiceOpen, setChoiceOpen] = React.useState(false);
  const href = `https://cal.com/${calLink}`;

  const openCalPopup = async (nextCalLink: string, fallbackUrl: string) => {
    try {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi();
      cal("ui", { theme: "light" });
      cal("modal", { calLink: nextCalLink, config: CAL_POPUP_CONFIG });
    } catch {
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    const fallbackUrl = event.currentTarget.href;
    event.preventDefault();

    if (choices?.length) {
      setChoiceOpen(true);
      return;
    }

    await openCalPopup(calLink, fallbackUrl);
  };

  return (
    <>
      <ConversionLink
        {...anchorProps}
        kind="booking"
        placement={placement}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {children}
      </ConversionLink>

      {choiceOpen && choices?.length ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-purple-dark font-bold mb-3">
              Choisir le format
            </p>
            <h2 className="text-2xl font-display font-bold text-brand-dark mb-3">
              Vous préférez la séance en présentiel ou à distance ?
            </h2>
            <p className="text-gray-600 mb-6">
              Sélectionnez le format souhaité, puis le calendrier correspondant s'ouvrira directement ici.
            </p>

            <div className="grid gap-3">
              {choices.map((choice) => (
                <button
                  key={choice.calLink}
                  type="button"
                  onClick={() => {
                    setChoiceOpen(false);
                    void openCalPopup(choice.calLink, `https://cal.com/${choice.calLink}`);
                  }}
                  className="rounded-full bg-brand-purple px-6 py-3 font-bold text-white transition hover:bg-brand-purple-dark"
                >
                  {choice.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setChoiceOpen(false)}
              className="mt-5 text-sm font-semibold text-gray-500 underline underline-offset-4"
            >
              Annuler
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
