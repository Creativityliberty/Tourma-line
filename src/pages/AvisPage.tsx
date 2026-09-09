import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Testimonials } from "../components/sections/Testimonials";
import { ConversionLink } from "../components/ui/ConversionLink";
import { WhatsAppIcon } from "../components/ui/icons";

export const AvisPage = () => {
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
        <title>Avis clients | Tourma-Line à Gerponville</title>
        <meta
          name="description"
          content="Découvrez les avis clients de Tourma-Line : retours sur les consultations de cartomancie, numérologie et les séances Lahochi proposées par Line à Gerponville et à distance."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/avis" />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <section className="relative pt-32 pb-16 bg-brand-dark text-white overflow-hidden">
        <img
          src="/hero-tourma-line.jpg"
          alt="Univers Tourma-Line"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 to-brand-dark" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-white/70 mb-3">Avis clients</p>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-5">
            Leur expérience avec Line
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Des retours sur la justesse des guidances, la qualité de l’écoute et le cadre bienveillant des séances.
          </p>
          <p className="mt-5 font-semibold">★★★★★ 5,0/5 Google · 26 avis</p>
        </div>
      </section>

      <Testimonials />

      <section className="py-14 bg-brand-green/30">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-display text-brand-dark mb-4">Vous souhaitez faire le point à votre tour ?</h2>
          <p className="text-gray-700 mb-7">Choisissez votre prestation ou contactez directement Line avant de réserver.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <ConversionLink
              kind="booking"
              placement="reviews-page"
              href="https://cal.com/tourma-line"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple text-white font-bold py-3 px-8 rounded-full text-center"
            >
              Prendre rendez-vous
            </ConversionLink>
            <ConversionLink
              kind="whatsapp"
              placement="reviews-page"
              href="https://wa.me/33649653186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-bold py-3 px-7 rounded-full inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </ConversionLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
