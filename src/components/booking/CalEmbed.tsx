import React, { useEffect, useState } from "react";
import type { ComponentType } from "react";

const CAL_LINK = "tourma-line";
const CAL_CONFIG = {
  theme: "light",
  layout: "month_view",
};

type CalComponentProps = {
  calLink: string;
  config?: Record<string, unknown>;
};

export const CalEmbed = () => {
  const [Cal, setCal] = useState<ComponentType<CalComponentProps> | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const mod = await import("@calcom/embed-react");
      if (mounted) setCal(() => mod.default);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl min-h-[700px] sm:min-h-[780px] overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5">
      {Cal ? (
        <Cal calLink={CAL_LINK} config={CAL_CONFIG} />
      ) : (
        <div className="flex min-h-[700px] sm:min-h-[780px] items-center justify-center text-sm text-gray-400">
          Chargement du calendrier…
        </div>
      )}
    </div>
  );
};