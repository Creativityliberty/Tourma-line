import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ConversionLink } from "../components/ui/ConversionLink";
import { CalEmbed } from "../components/booking/CalEmbed";
import { CAL_BASE_URL } from "../lib/conversionTracking";
import { PhoneIcon, WhatsAppIcon } from "../components/ui/icons";

export const RendezVousPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (href?.startsWith("/")) {
      event.preventDefault();
      navigate(href);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Prendre rendez-vous | Tourma-Line</title>
        <meta
          name="description"
          content="Réservez une consultation avec Line : cartomancie, numérologie ou séance Lahochi, au cabinet à Gerponville ou à distance selon la prestation."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/rendezvous" />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <main className="relative pt-32 pb-20 bg-white text-brand-dark overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.18em] text-brand-purple-dark font-bold mb-3">
              Agenda en ligne
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-5">
              Réservez votre séance sans quitter le site
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez directement votre créneau dans le calendrier. La confirmation et les détails
              vous seront envoyés par email, puis je finaliserai votre rendez-vous si besoin.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-purple/5 ring-1 ring-brand-purple/15 p-4 sm:p-8">
            <CalEmbed />
          </div>

          <div className="mt-8 text-center">
            <ConversionLink
              kind="booking"
              placement="booking-page"
              href={CAL_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple hover:bg-brand-purple-dark text-white font-bold py-3 px-8 rounded-full"
            >
              Réservez ici
            </ConversionLink>
          </div>
        </div>
      </main>

      <section className="relative bg-brand-dark text-white overflow-hidden py-24">
        <img
          src="/hero-tourma-line.jpg"
          alt="Univers Tourma-Line"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/75 via-brand-dark/85 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-white/70 mb-3">
            Besoin d'aide avant de réserver ?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            Choisissez simplement la façon de contacter Line
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
            Vous pouvez écrire sur WhatsApp si vous avez une question, appeler Line, ou retrouver la
            réservation en ligne si besoin.
          </p>

          <div className="grid gap-5 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-7 flex flex-col">
              <h3 className="text-2xl font-display mb-3">Réserver en ligne</h3>
              <p className="text-white/75 mb-6 flex-1">Accédez aux créneaux disponibles et choisissez la prestation souhaitée.</p>
              <ConversionLink
                kind="booking"
                placement="booking-page"
                href="https://cal.com/tourma-line"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-purple text-white font-bold py-3 px-5 rounded-full"
              >
                Voir les créneaux
              </ConversionLink>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-7 flex flex-col">
              <h3 className="text-2xl font-display mb-3">WhatsApp</h3>
              <p className="text-white/75 mb-6 flex-1">Idéal si vous souhaitez vérifier quelle prestation correspond le mieux à votre demande.</p>
              <ConversionLink
                kind="whatsapp"
                placement="booking-page"
                href="https://wa.me/33649653186"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-5 rounded-full inline-flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Écrire à Line
              </ConversionLink>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-7 flex flex-col">
              <h3 className="text-2xl font-display mb-3">Téléphone</h3>
              <p className="text-white/75 mb-6 flex-1">Pour un échange direct, vous pouvez joindre Line au 06 49 65 31 86.</p>
              <ConversionLink
                kind="phone"
                placement="booking-page"
                href="tel:+33649653186"
                className="border border-white/40 text-white font-bold py-3 px-5 rounded-full inline-flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Appeler Line
              </ConversionLink>
            </div>
          </div>

          <p className="mt-9 text-sm text-white/65">
            Consultations au cabinet à Gerponville ou à distance, selon la prestation.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};
