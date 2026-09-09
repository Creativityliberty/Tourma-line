import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import { HashIcon, CompassIcon, BriefcaseIcon, MapPinIcon } from "../components/ui/icons";

export const NumerologiePage = () => {
  return (
    <>
      <Helmet>
        <title>Numérologue en Seine-Maritime | Chemin de vie — Tourma-Line</title>
        <meta
          name="description"
          content="Numérologie avec Line à Gerponville : chemin de vie, année personnelle et cycles. Consultation près de Fécamp et Valmont, ou à distance."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/numerologie" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultation de numérologie",
          "provider": {
            "@type": "Person",
            "name": "Line",
            "jobTitle": "Numérologue",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "AdministrativeArea", "name": "Normandie" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Consultation de numérologie à partir de la date de naissance : chemin de vie, année personnelle, cycles et lecture personnalisée.",
          "url": "https://www.tourma-line.fr/numerologie",
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/tourma-line",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <ServicePage
        title="Numérologie"
        headline="Numérologue en Seine-Maritime — Chemin de vie & année personnelle"
        metaDescription="Numérologie à Gerponville, près de Fécamp et Valmont, et à distance."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Consultation de numérologie avec Line chez Tourma-Line"
        intro="Je m'appuie sur votre date de naissance pour explorer votre chemin de vie, votre année personnelle, vos cycles et certains schémas de votre parcours. Cette lecture permet de mieux comprendre la période que vous traversez aujourd'hui."
        localInfo="Cabinet : 4 résidence Les Peupliers, 76540 Gerponville — près de Fécamp et Valmont — consultations à distance disponibles"
        breadcrumb="Numérologie"
        canonicalPath="/numerologie"
        ctaText="Réserver ma séance"
        relatedGuides={[
          {
            title: "Comment choisir un numérologue ?",
            description: "Méthode, avis, tarifs et questions à poser avant de réserver.",
            path: "/blog/choisir-numerologue-consultation",
          },
          {
            title: "Année personnelle : calcul et cycles 1 à 9",
            description: "Calcul 2026, conventions et interprétation de votre cycle annuel.",
            path: "/blog/annee-personnelle-numerologie",
          },
        ]}
        sections={[
          {
            icon: <HashIcon className="w-8 h-8" />,
            heading: "Comprendre votre chemin de vie",
            content:
              "À partir de votre date de naissance, j'explore votre chemin de vie, vos cycles et les thèmes qui reviennent dans votre parcours. Cette lecture met en lumière certains éléments de votre personnalité et de votre façon d'avancer.",
          },
          {
            icon: <CompassIcon className="w-8 h-8" />,
            heading: "Année personnelle et période actuelle",
            content:
              "J'étudie votre année personnelle afin de mettre en perspective la période que vous traversez, les changements en cours et les questions qui se présentent à vous aujourd'hui.",
          },
          {
            icon: <BriefcaseIcon className="w-8 h-8" />,
            heading: "Pour quelles situations consulter ?",
            content:
              "Relation, transition professionnelle, changement de cap ou période de questionnement personnel : la numérologie peut apporter des repères et une lecture différente de ce que vous vivez.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Numérologue à Gerponville, près de Fécamp et Valmont",
            content:
              "Je vous reçois sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville, en Seine-Maritime. Les consultations peuvent également être proposées à distance selon la formule choisie.",
          },
        ]}
        faq={[
          {
            question: "Ai-je besoin de préparer quelque chose avant la consultation de numérologie ?",
            answer:
              "Votre date de naissance est la base de la séance. Vous pouvez également préparer les questions ou les sujets que vous souhaitez explorer afin d'orienter l'échange vers ce qui compte le plus pour vous.",
          },
          {
            question: "Peut-on consulter une numérologue pour une transition professionnelle ?",
            answer:
              "Oui. La séance peut vous aider à mettre en perspective la période que vous traversez et les cycles qui se présentent à vous.",
          },
          {
            question: "La consultation de numérologie est-elle disponible à distance ?",
            answer:
              "Oui. Certaines consultations peuvent se faire par téléphone ou visioconférence. Les modalités sont précisées lors de la réservation.",
          },
          {
            question: "Combien de temps dure une consultation avec Line ?",
            answer:
              "La durée dépend de la formule choisie et des sujets abordés. Les informations pratiques et les tarifs à jour sont indiqués sur la page Prestations et lors de la réservation.",
          },
        ]}
      />
    </>
  );
};
