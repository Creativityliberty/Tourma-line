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
};

export const CalPopupButton = ({
  placement,
  calLink = DEFAULT_CAL_LINK,
  children,
  ...anchorProps
}: CalPopupButtonProps) => {
  const href = `https://cal.com/${calLink}`;

  const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    const fallbackUrl = event.currentTarget.href;
    event.preventDefault();

    try {
      const { getCalApi } = await import("@calcom/embed-react");
      const cal = await getCalApi();
      cal("ui", { theme: "light" });
      cal("modal", { calLink, config: CAL_POPUP_CONFIG });
    } catch {
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
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
  );
};
