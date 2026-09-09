import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import { WavesIcon, LeafIcon, SparklesIcon, GlobeIcon, MapPinIcon } from "../components/ui/icons";

export const LahochiPage = () => {
  return (
    <>
      <Helmet>
        <title>Lahochi en Seine-Maritime | Gerponville — Tourma-Line</title>
        <meta
          name="description"
          content="Séances Lahochi avec Line à Gerponville, près de Fécamp et Valmont, ou à distance. Un temps de détente, de recentrage et de bien-être."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/soin-lahochi" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Lahochi",
          "provider": {
            "@type": "Person",
            "name": "Line",
            "jobTitle": "Praticienne Lahochi",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "AdministrativeArea", "name": "Normandie" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Séance Lahochi proposée comme pratique de bien-être, de détente et de recentrage, au cabinet à Gerponville ou à distance.",
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
        title="Lahochi"
        headline="Lahochi en Seine-Maritime — Détente & recentrage"
        metaDescription="Lahochi à Gerponville, près de Fécamp et Valmont, ou à distance."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Séance Lahochi avec Line chez Tourma-Line"
        intro="Je propose les séances Lahochi comme un temps de détente, de recentrage et de bien-être. Elles sont disponibles au cabinet à Gerponville ou à distance selon la prestation choisie."
        localInfo="Cabinet : 4 résidence Les Peupliers, 76540 Gerponville — près de Fécamp et Valmont — séances à distance disponibles"
        breadcrumb="Lahochi"
        canonicalPath="/soin-lahochi"
        ctaText="Réserver ma séance Lahochi"
        sections={[
          {
            icon: <WavesIcon className="w-8 h-8" />,
            heading: "Qu'est-ce que le Lahochi ?",
            content:
              "Le Lahochi est une pratique énergétique de bien-être reposant sur un protocole d'apposition des mains. Je propose la séance comme un moment de calme, de détente et de recentrage. Elle ne constitue pas un acte médical et ne remplace pas un diagnostic ou un traitement.",
          },
          {
            icon: <LeafIcon className="w-8 h-8" />,
            heading: "Pourquoi réserver une séance ?",
            content:
              "Vous pouvez choisir une séance Lahochi lorsque vous ressentez le besoin de ralentir, de prendre un temps pour vous ou simplement de vous accorder une pause dans une période chargée ou de changement.",
          },
          {
            icon: <SparklesIcon className="w-8 h-8" />,
            heading: "Comment se déroule une séance ?",
            content:
              "Vous vous installez confortablement et je suis le protocole Lahochi pendant la durée prévue. Les ressentis sont personnels et variables d'une personne à l'autre ; aucune sensation particulière n'est attendue ou nécessaire.",
          },
          {
            icon: <GlobeIcon className="w-8 h-8" />,
            heading: "Lahochi à distance",
            content:
              "Je propose également des séances Lahochi à distance. Vous vous installez dans un endroit calme à l'heure convenue pendant que je réalise la séance depuis Gerponville. Cette modalité reste une pratique de bien-être complémentaire.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Lahochi près de Fécamp, Valmont et Cany-Barville",
            content:
              "Je vous reçois sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville, en Seine-Maritime. Des séances à distance sont également proposées selon la prestation choisie.",
          },
        ]}
        faq={[
          {
            question: "Quelle est la différence entre le Lahochi et le Reiki ?",
            answer:
              "Le Lahochi et le Reiki sont deux pratiques énergétiques avec des histoires et des protocoles différents. Chez Tourma-Line, je pratique le Lahochi.",
          },
          {
            question: "Une séance Lahochi à distance garantit-elle les mêmes effets qu'en présentiel ?",
            answer:
              "Aucun résultat ne peut être garanti, en présentiel comme à distance. Les ressentis restent personnels et variables.",
          },
          {
            question: "Combien de séances faut-il prévoir ?",
            answer:
              "Vous pouvez commencer par une séance et décider ensuite, selon votre expérience et vos attentes, si vous souhaitez renouveler ce temps de bien-être.",
          },
          {
            question: "Le Lahochi remplace-t-il un traitement médical ?",
            answer:
              "Non. Le Lahochi est une pratique de bien-être complémentaire. Il ne remplace pas un diagnostic, un traitement, un suivi psychologique ni l'avis d'un professionnel de santé.",
          },
        ]}
      />
    </>
  );
};
