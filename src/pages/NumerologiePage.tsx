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
          content="Numérologue en Seine-Maritime : chemin de vie, année personnelle et cycles. Consultation à Gerponville près de Fécamp et Valmont, ou à distance. RDV en ligne."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/numerologie" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultation de numérologie",
          "provider": {
            "@type": "Person",
            "name": "Line Simon",
            "jobTitle": "Numérologue",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "AdministrativeArea", "name": "Normandie" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Consultation de numérologie à partir de la date de naissance : chemin de vie, année personnelle, cycles et pistes de réflexion personnalisées.",
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
        metaDescription="Numérologue à Gerponville, près de Fécamp et Valmont, et à distance."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Line Simon, numérologue en Seine-Maritime — consultation à Gerponville"
        intro="La numérologie propose une lecture symbolique de votre date de naissance pour explorer votre chemin de vie, vos cycles et les périodes de transition. Chez Tourma-Line, Line peut compléter cette lecture par la cartomancie lorsque vous souhaitez approfondir une question précise."
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
            heading: "Qu'est-ce que la numérologie ?",
            content:
              "La numérologie est une pratique d'interprétation symbolique des nombres associés notamment à la date de naissance. Line s'en sert comme support de réflexion pour explorer votre chemin de vie, vos cycles personnels, vos forces et les thèmes qui reviennent dans votre parcours.",
          },
          {
            icon: <CompassIcon className="w-8 h-8" />,
            heading: "Chemin de vie, année personnelle et cycles",
            content:
              "À partir de votre date de naissance, Line étudie notamment votre chemin de vie et votre année personnelle. L'objectif est de mettre en perspective la période que vous traversez et de faire émerger des pistes de réflexion concrètes sur vos choix, vos priorités et vos transitions.",
          },
          {
            icon: <BriefcaseIcon className="w-8 h-8" />,
            heading: "Pour quelles situations consulter ?",
            content:
              "Une consultation peut être utile lorsque vous souhaitez prendre du recul sur une transition professionnelle, une relation, un changement de cap ou une période de questionnement personnel. La séance vise à vous apporter un cadre de lecture et des éléments de réflexion, sans décider à votre place.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Numérologue à Gerponville, près de Fécamp et Valmont",
            content:
              "Line Simon vous reçoit sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville, en Seine-Maritime. Le cabinet est situé dans le secteur de Fécamp, Valmont et Cany-Barville. Les consultations sont également proposées à distance par téléphone ou visioconférence.",
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
              "Oui, si vous cherchez un support de réflexion pour prendre du recul sur une période de changement. La numérologie ne remplace pas un conseil professionnel, mais elle peut fournir un angle de lecture complémentaire sur vos cycles et vos priorités.",
          },
          {
            question: "La consultation de numérologie est-elle disponible à distance ?",
            answer:
              "Oui. Les consultations peuvent se faire par téléphone ou visioconférence, en France comme à l'étranger francophone. Les modalités sont précisées lors de la réservation.",
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
