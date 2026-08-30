import React from "react";
import { track } from "@vercel/analytics";
import { useLocation } from "react-router-dom";
import {
  buildCalBookingUrl,
  buildConversionEvent,
  type ConversionKind,
} from "../../lib/conversionTracking";

type ConversionLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  kind: ConversionKind;
  placement: string;
  href: string;
};

export const ConversionLink = ({
  kind,
  placement,
  href,
  onClick,
  ...anchorProps
}: ConversionLinkProps) => {
  const { pathname } = useLocation();
  const destination =
    kind === "booking" ? buildCalBookingUrl(pathname, placement, href) : href;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const conversion = buildConversionEvent(kind, pathname, placement);

    try {
      track(conversion.name, conversion.properties);
    } catch {
      // Tracking must never block the user's navigation or booking flow.
    }

    onClick?.(event);
  };

  return (
    <a {...anchorProps} href={destination} onClick={handleClick}>
      {anchorProps.children}
    </a>
  );
};
