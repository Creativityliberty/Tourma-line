import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { FacebookIcon, WhatsAppIcon } from "../ui/icons";
import { ConversionLink } from "../ui/ConversionLink";

export const Contact = () => {
  return (
    <section id="rendezvous" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="text-left order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-6">
                Prendre rendez-vous
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Vous souhaitez faire le point sur votre situation ou vous accorder un moment pour vous ?
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Je vous reçois au cabinet à Gerponville ou à distance selon la prestation choisie. Vous pouvez réserver directement en ligne ou me contacter sur WhatsApp si vous souhaitez être orienté(e) avant de choisir un créneau.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <ConversionLink kind="booking" placement="contact-booking"
                  href="https://cal.com/tourma-line"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block animate-pulse"
                >
                  Prendre rendez-vous
                </ConversionLink>
                <ConversionLink kind="whatsapp" placement="contact-booking"
                  href="https://wa.me/33649653186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp
                </ConversionLink>
              </div>
              <ConversionLink kind="phone" placement="contact-phone"
                href="tel:+33649653186"
                className="text-brand-dark hover:text-brand-purple font-semibold text-lg underline underline-offset-4"
              >
                Appeler Line · 06 49 65 31 86
              </ConversionLink>
            </div>

            <div className="bg-brand-lilas p-8 rounded-3xl shadow-lg text-left order-1 md:order-2">
              <h2 className="text-3xl font-display text-brand-dark mb-6">
                Contact Tourma-Line
              </h2>
              <p className="text-gray-700 mb-2 font-medium">
                Line — Tourma-Line
              </p>
              <p className="text-gray-700 mb-6">
                4 résidence Les Peupliers<br />
                76540 Gerponville<br />
                Seine-Maritime, Normandie
              </p>
              <p className="text-gray-700 font-semibold mb-2">
                Pour me joindre :
              </p>
              <div className="space-y-2 mb-6">
                <p>
                  <ConversionLink kind="phone" placement="contact-card-phone"
                    href="tel:+33649653186"
                    className="text-brand-dark hover:text-brand-purple font-medium text-lg"
                  >
                    06 49 65 31 86
                  </ConversionLink>
                </p>
                <p>
                  <a
                    href="mailto:line.simon.ls@gmail.com"
                    className="text-brand-dark hover:text-brand-purple font-medium text-lg"
                  >
                    line.simon.ls@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/tourma.line.534540"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tourma-Line sur Facebook"
                  className="text-gray-500 hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <FacebookIcon className="w-8 h-8" aria-hidden="true" />
                </a>
                <ConversionLink kind="whatsapp" placement="contact-icon"
                  href="https://wa.me/33649653186"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contacter Tourma-Line sur WhatsApp"
                  className="text-green-500 hover:text-green-600 transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <WhatsAppIcon className="w-8 h-8" aria-hidden="true" />
                </ConversionLink>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
