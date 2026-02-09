import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { FacebookIcon, WhatsAppIcon } from "../ui/icons";

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
                Les séances peuvent se faire à distance (téléphone/visio) ou
                selon les possibilités en présentiel.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Pour réserver, il suffit de me contacter via le formulaire du
                site ou par message privé.
              </p>
              <a
                href="https://cal.com/line-simon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block animate-pulse mb-8"
              >
                Réserver ma séance
              </a>
            </div>

            <div className="bg-brand-lilas p-8 rounded-3xl shadow-lg text-left order-1 md:order-2">
              <h2 className="text-3xl font-display text-brand-dark mb-6">
                Contact
              </h2>
              <p className="text-gray-700 mb-6">
                Pour toute question ou prise de rendez-vous, vous pouvez me
                contacter via le formulaire du site ou par message privé.
              </p>
              <p className="text-gray-700 font-semibold mb-2">
                Pour me joindre :
              </p>
              <div className="space-y-2 mb-6">
                <p>
                  <a
                    href="tel:0649653186"
                    className="text-brand-dark hover:text-brand-purple font-medium text-lg"
                  >
                    06 49 65 31 86
                  </a>
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
                  aria-label="Nous contacter sur Facebook"
                  className="text-gray-500 hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <FacebookIcon className="w-8 h-8" aria-hidden="true" />
                </a>
                <a
                  href="https://wa.me/qr/NZDHZRB3ZW52B1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nous contacter sur WhatsApp"
                  className="text-gray-500 hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <WhatsAppIcon className="w-8 h-8" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
