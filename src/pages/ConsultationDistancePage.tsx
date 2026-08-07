import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import {
  GlobeIcon,
  ChatBubbleIcon,
  HashIcon,
  WavesIcon,
  MapPinIcon,
} from "../components/ui/icons";

export const ConsultationDistancePage = () => {
  return (
    <>
      <Helmet>
        <title>Consultation à distance | Voyance, Numérologie & Lahochi — Tourma-Line</title>
        <meta
          name="description"
          content="Consultation à distance avec Line Simon : voyance et cartomancie, numérologie et séance énergétique Lahochi. Par téléphone ou visioconférence selon la prestation."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.tourma-line.fr/consultation-a-distance"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Consultations à distance Tourma-Line",
            "provider": {
              "@id": "https://www.tourma-line.fr/#business",
            },
            "areaServed": {
              "@type": "Country",
              "name": "France",
            },
            "description":
              "Consultations à distance en voyance et cartomancie, numérologie et pratique énergétique Lahochi avec Line Simon, selon les modalités de chaque prestation.",
            "url": "https://www.tourma-line.fr/consultation-a-distance",
            "offers": {
              "@type": "Offer",
              "url": "https://cal.com/tourma-line",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
            },
          })}
        </script>
      </Helmet>

      <ServicePage
        title="Consultation à distance"
        headline="Consultation à distance : voyance, numérologie & Lahochi"
        metaDescription="Voyance, numérologie et Lahochi à distance avec Line Simon."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Line Simon — consultations Tourma-Line à distance"
        intro="Vous habitez loin de Gerponville ou vous préférez rester chez vous ? Tourma-Line propose plusieurs prestations à distance, avec des modalités adaptées à la voyance et cartomancie, à la numérologie et au Lahochi."
        localInfo="Tourma-Line reste basé au 4 résidence Les Peupliers, 76540 Gerponville — les consultations à distance ne correspondent pas à des cabinets implantés dans d'autres villes."
        breadcrumb="Consultation à distance"
        canonicalPath="/consultation-a-distance"
        ctaText="Réserver ma consultation à distance"
        sections={[
          {
            icon: <GlobeIcon className="w-8 h-8" />,
            heading: "Une consultation depuis chez vous",
            content:
              "La réservation se fait en ligne, puis vous recevez les informations utiles pour votre rendez-vous. Selon la prestation choisie, l'échange se déroule par téléphone ou visioconférence. Vous n'avez pas besoin de vous déplacer jusqu'au cabinet de Gerponville.",
          },
          {
            icon: <ChatBubbleIcon className="w-8 h-8" />,
            heading: "Voyance & cartomancie à distance",
            content:
              "La consultation de voyance et de cartomancie peut se dérouler à distance autour de vos questions personnelles, relationnelles ou professionnelles. Le tirage de cartes sert de support à l'échange et à la guidance, sans présenter les interprétations comme des certitudes absolues sur l'avenir.",
          },
          {
            icon: <HashIcon className="w-8 h-8" />,
            heading: "Numérologie à distance",
            content:
              "À partir de votre date de naissance, Line explore notamment le chemin de vie, l'année personnelle et les cycles. La séance à distance permet de parcourir cette lecture ensemble et de mettre en perspective les sujets que vous souhaitez approfondir.",
          },
          {
            icon: <WavesIcon className="w-8 h-8" />,
            heading: "Séance énergétique Lahochi à distance",
            content:
              "Tourma-Line propose également le Lahochi à distance dans le cadre d'une pratique de bien-être. Vous vous installez dans un endroit calme à l'heure convenue pendant que Line suit son protocole depuis Gerponville. Aucun résultat thérapeutique n'est garanti et cette pratique ne remplace pas un suivi médical.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Un seul cabinet réel : Gerponville",
            content:
              "Le cabinet Tourma-Line est situé à Gerponville, en Seine-Maritime. La possibilité de consulter à distance permet d'accompagner des personnes ailleurs en France sans laisser entendre que Tourma-Line possède un établissement physique à Paris, Marseille, Genève, Bruxelles ou dans une autre ville.",
          },
        ]}
        faq={[
          {
            question: "Quelles prestations Tourma-Line sont disponibles à distance ?",
            answer:
              "La voyance et cartomancie ainsi que la numérologie peuvent être proposées par téléphone ou visioconférence. Des séances Lahochi à distance sont également proposées comme pratique énergétique de bien-être. Les modalités exactes sont précisées lors de la réservation.",
          },
          {
            question: "Faut-il habiter en Seine-Maritime pour réserver ?",
            answer:
              "Non. Les prestations à distance sont destinées aux personnes qui ne peuvent pas ou ne souhaitent pas se déplacer au cabinet de Gerponville. La langue de consultation est le français.",
          },
          {
            question: "Comment réserver une consultation à distance ?",
            answer:
              "Vous pouvez réserver via Cal.com ou contacter Line par WhatsApp. Choisissez la prestation souhaitée, puis les modalités pratiques du rendez-vous vous sont communiquées.",
          },
          {
            question: "Tourma-Line possède-t-il des cabinets dans d'autres villes ?",
            answer:
              "Non. Le cabinet réel de Tourma-Line est situé au 4 résidence Les Peupliers, 76540 Gerponville. Les consultations proposées ailleurs sont des consultations à distance.",
          },
        ]}
      />
    </>
  );
};
