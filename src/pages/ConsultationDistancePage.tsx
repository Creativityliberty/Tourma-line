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
        <title>Consultation à distance | Cartomancie, Numérologie & Lahochi — Tourma-Line</title>
        <meta
          name="description"
          content="Consultations à distance avec Line : cartomancie, numérologie et Lahochi selon la prestation. Téléphone, visioconférence ou modalité dédiée."
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
              "Consultations à distance en cartomancie et numérologie ainsi que séances Lahochi selon les modalités de chaque prestation.",
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
        headline="Consultation à distance : cartomancie, numérologie & Lahochi"
        metaDescription="Cartomancie, numérologie et Lahochi à distance avec Line."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Consultations Tourma-Line à distance"
        intro="Vous habitez loin de Gerponville ou vous préférez rester chez vous ? Je propose plusieurs prestations à distance, avec des modalités adaptées à la cartomancie, à la numérologie et au Lahochi."
        localInfo="Le cabinet Tourma-Line reste situé au 4 résidence Les Peupliers, 76540 Gerponville. Les consultations à distance ne correspondent pas à des cabinets implantés dans d'autres villes."
        breadcrumb="Consultation à distance"
        canonicalPath="/consultation-a-distance"
        ctaText="Réserver ma consultation à distance"
        sections={[
          {
            icon: <GlobeIcon className="w-8 h-8" />,
            heading: "Une consultation depuis chez vous",
            content:
              "La réservation se fait en ligne, puis vous recevez les informations utiles pour votre rendez-vous. Selon la prestation choisie, l'échange se déroule par téléphone, visioconférence ou selon la modalité prévue. Vous n'avez pas besoin de vous déplacer jusqu'au cabinet de Gerponville.",
          },
          {
            icon: <ChatBubbleIcon className="w-8 h-8" />,
            heading: "Cartomancie à distance",
            content:
              "La consultation de cartomancie peut se dérouler à distance autour de vos questions personnelles, relationnelles ou professionnelles. J'utilise les cartes comme support de guidance et d'échange autour de votre situation.",
          },
          {
            icon: <HashIcon className="w-8 h-8" />,
            heading: "Numérologie à distance",
            content:
              "À partir de votre date de naissance, j'explore notamment le chemin de vie, l'année personnelle et les cycles. La séance à distance permet de parcourir cette lecture ensemble et d'approfondir les sujets qui vous préoccupent.",
          },
          {
            icon: <WavesIcon className="w-8 h-8" />,
            heading: "Lahochi à distance",
            content:
              "Je propose également certaines séances Lahochi à distance comme temps de bien-être, de détente et de recentrage. Cette pratique ne remplace pas un diagnostic, un traitement ou un suivi médical.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Un seul cabinet réel : Gerponville",
            content:
              "Le cabinet Tourma-Line est situé à Gerponville, en Seine-Maritime. Les prestations à distance permettent de consulter sans laisser entendre que Tourma-Line possède un établissement physique dans une autre ville.",
          },
        ]}
        faq={[
          {
            question: "Quelles prestations Tourma-Line sont disponibles à distance ?",
            answer:
              "Certaines consultations de cartomancie et de numérologie sont proposées à distance. Des séances Lahochi à distance sont également disponibles selon la prestation choisie. Les modalités exactes sont précisées lors de la réservation.",
          },
          {
            question: "Faut-il habiter en Seine-Maritime pour réserver ?",
            answer:
              "Non. Les prestations à distance sont destinées aux personnes qui ne peuvent pas ou ne souhaitent pas se déplacer au cabinet de Gerponville. La langue de consultation est le français.",
          },
          {
            question: "Comment réserver une consultation à distance ?",
            answer:
              "Vous pouvez réserver via Cal.com ou me contacter par WhatsApp. Choisissez la prestation souhaitée, puis les modalités pratiques du rendez-vous vous sont communiquées.",
          },
          {
            question: "Tourma-Line possède-t-il des cabinets dans d'autres villes ?",
            answer:
              "Non. Le cabinet réel de Tourma-Line est situé au 4 résidence Les Peupliers, 76540 Gerponville. Les prestations proposées ailleurs sont des prestations à distance.",
          },
        ]}
      />
    </>
  );
};
