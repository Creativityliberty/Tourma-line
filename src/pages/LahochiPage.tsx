import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import { WavesIcon, LeafIcon, SparklesIcon, GlobeIcon, MapPinIcon } from "../components/ui/icons";

export const LahochiPage = () => {
  return (
    <>
      <Helmet>
        <title>Énergéticienne en Seine-Maritime | Soin énergétique Lahochi — Tourma-Line</title>
        <meta
          name="description"
          content="Énergéticienne en Seine-Maritime : séances de bien-être Lahochi à Gerponville près de Fécamp et Valmont, ou à distance. Relaxation, recentrage et détente."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/soin-lahochi" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Soin énergétique Lahochi",
          "provider": {
            "@type": "Person",
            "name": "Line Simon",
            "jobTitle": "Praticienne en soins énergétiques Lahochi",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "AdministrativeArea", "name": "Normandie" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Séance énergétique Lahochi proposée comme pratique de bien-être, de relaxation et de recentrage, en cabinet à Gerponville ou à distance.",
          "url": "https://www.tourma-line.fr/soin-lahochi",
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/tourma-line",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <ServicePage
        title="Soin énergétique Lahochi"
        headline="Énergéticienne en Seine-Maritime — Soin énergétique Lahochi"
        metaDescription="Soin énergétique Lahochi à Gerponville, près de Fécamp et Valmont, ou à distance."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Line Simon, praticienne en soins énergétiques Lahochi en Seine-Maritime"
        intro="Line Simon propose des séances énergétiques Lahochi comme temps de détente, de recentrage et de bien-être. Les séances sont disponibles au cabinet à Gerponville ou à distance, selon vos préférences."
        localInfo="Cabinet : 4 résidence Les Peupliers, 76540 Gerponville — près de Fécamp et Valmont — séances à distance disponibles"
        breadcrumb="Soin énergétique Lahochi"
        canonicalPath="/soin-lahochi"
        ctaText="Réserver ma séance Lahochi"
        sections={[
          {
            icon: <WavesIcon className="w-8 h-8" />,
            heading: "Qu'est-ce qu'un soin énergétique Lahochi ?",
            content:
              "Le Lahochi est une pratique énergétique de bien-être reposant sur un protocole d'imposition des mains, en contact ou à proximité du corps. Chez Tourma-Line, la séance est proposée comme un moment de relaxation, de recentrage et d'écoute de soi. Elle ne constitue pas un acte médical et ne remplace pas un diagnostic ou un traitement.",
          },
          {
            icon: <LeafIcon className="w-8 h-8" />,
            heading: "Pourquoi réserver une séance énergétique ?",
            content:
              "Certaines personnes choisissent une séance Lahochi lorsqu'elles souhaitent ralentir, prendre un temps pour elles, se détendre ou accompagner une période de changement sur le plan personnel. Les ressentis varient d'une personne à l'autre et aucun résultat thérapeutique n'est garanti.",
          },
          {
            icon: <SparklesIcon className="w-8 h-8" />,
            heading: "Comment se déroule une séance ?",
            content:
              "Vous restez habillé(e) et vous vous installez confortablement. Line suit le protocole Lahochi pendant la durée prévue de la séance. Certaines personnes décrivent de la chaleur, une sensation de détente ou simplement un moment calme ; d'autres ressentent peu de choses sur le moment. Chaque expérience est personnelle.",
          },
          {
            icon: <GlobeIcon className="w-8 h-8" />,
            heading: "Soin Lahochi à distance",
            content:
              "Tourma-Line propose également des séances Lahochi à distance. Vous vous installez dans un endroit calme à l'heure convenue pendant que Line réalise le protocole depuis Gerponville. Cette modalité relève de la pratique énergétique et du bien-être ; elle ne doit pas être confondue avec une prise en charge médicale à distance.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Énergéticienne près de Fécamp, Valmont et Cany-Barville",
            content:
              "Line Simon vous reçoit sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville, en Seine-Maritime. Le cabinet se situe dans le secteur de Fécamp, Valmont et Cany-Barville. Des séances à distance sont également proposées.",
          },
        ]}
        faq={[
          {
            question: "Quelle est la différence entre le Lahochi et le Reiki ?",
            answer:
              "Le Lahochi et le Reiki sont deux pratiques énergétiques avec des histoires et des protocoles différents. Tourma-Line pratique le Lahochi. Il n'existe pas de base sérieuse pour affirmer qu'une méthode est médicalement plus puissante ou plus efficace que l'autre.",
          },
          {
            question: "Une séance Lahochi à distance garantit-elle les mêmes effets qu'en présentiel ?",
            answer:
              "Aucun résultat ne peut être garanti, en présentiel comme à distance. Les séances à distance sont proposées dans le cadre de la pratique énergétique Lahochi et les ressentis restent personnels et variables.",
          },
          {
            question: "Combien de séances faut-il prévoir ?",
            answer:
              "Il n'existe pas de nombre de séances médicalement nécessaire. Vous pouvez commencer par une séance et décider ensuite, selon votre expérience et vos attentes, si vous souhaitez renouveler ce temps de bien-être.",
          },
          {
            question: "Le soin Lahochi remplace-t-il un traitement médical ?",
            answer:
              "Non. Le Lahochi est présenté ici comme une pratique de bien-être complémentaire. Il ne remplace pas un diagnostic, un traitement, un suivi psychologique ni l'avis d'un professionnel de santé.",
          },
        ]}
      />
    </>
  );
};
