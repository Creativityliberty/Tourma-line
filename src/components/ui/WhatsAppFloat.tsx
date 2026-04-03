import React from "react";
import { WhatsAppIcon } from "../ui/icons";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/33649653186?text=Bonjour%20Line%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20consultations."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Line sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group animate-pulsing-glow"
    >
      <WhatsAppIcon className="w-6 h-6 flex-shrink-0" />
      <span className="text-sm hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-in-out whitespace-nowrap">
        Une question ? Écrivez-moi
      </span>
    </a>
  );
};
