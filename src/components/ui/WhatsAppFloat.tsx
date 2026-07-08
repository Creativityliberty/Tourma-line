import React from "react";
import { WhatsAppIcon } from "../ui/icons";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/33649653186?text=Bonjour%20Line%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20consultations."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Line sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulsing-glow"
    >
      <WhatsAppIcon className="w-7 h-7 flex-shrink-0" />
    </a>
  );
};
