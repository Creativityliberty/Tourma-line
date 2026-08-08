import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import { LayersIcon, ChatBubbleIcon, SparklesIcon, MapPinIcon } from "../components/ui/icons";

export const CartomancePage = () => {
  return (
    <>
      <Helmet>
        <title>Voyante en Seine-Maritime | Cartomancie près de Fécamp — Tourma-Line</title>
        <meta
          name="description"
          content="Voyante et cartomancienne en Seine-Maritime : consultation à Gerponville près de Fécamp, Valmont et Cany-Barville, ou par téléphone. RDV en ligne."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/cartomancie" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Voyance et cartomancie",
          "provider": {
            "@type": "Person",
            "name": "Line Simon",
            "jobTitle": "Voyante et cartomancienne",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "AdministrativeArea", "name": "Normandie" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Consultation de voyance et cartomancie avec Line Simon : lecture de cartes et guidance autour des questions personnelles, relationnelles et professionnelles.",
          "url": "https://www.tourma-line.fr/cartomancie",
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/tourma-line",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <ServicePage
        title="Voyance & cartomancie"
        headline="Voyante & cartomancienne en Seine-Maritime — Guidance par les cartes"
        metaDescription="Voyante et cartomancienne à Gerponville, près de Fécamp et Valmont, et à distance."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Line Simon, voyante et cartomancienne en Seine-Maritime"
        intro="Line Simon propose des consultations de voyance et de cartomancie pour explorer vos questions personnelles, relationnelles ou professionnelles. Selon la formule choisie, la séance peut être complétée par la numérologie afin de mettre votre situation en perspective."
        localInfo="Cabinet : 4 résidence Les Peupliers, 76540 Gerponville — près de Fécamp, Valmont et Cany-Barville — consultations par téléphone possibles"
        breadcrumb="Voyance & Cartomancie"
        canonicalPath="/cartomancie"
        ctaText="Réserver ma séance"
        relatedGuides={[
          {
            title: "Comment choisir une voyante ou cartomancienne sérieuse ?",
            description: "10 vérifications concrètes sur l'identité, les avis, les prix, les promesses et le libre arbitre.",
            path: "/blog/choisir-voyante-cartomancienne-serieuse",
          },
        ]}
        sections={[
          {
            icon: <LayersIcon className="w-8 h-8" />,
            heading: "Voyance et cartomancie : quelle approche chez Tourma-Line ?",
            content:
              "La cartomancie utilise les cartes comme support de lecture et de dialogue. Line interprète les symboles du tirage en lien avec votre question et votre contexte afin de vous proposer des pistes de réflexion claires, sans présenter le tirage comme une certitude absolue sur l'avenir.",
          },
          {
            icon: <ChatBubbleIcon className="w-8 h-8" />,
            heading: "Amour, travail, famille : quelles questions poser ?",
            content:
              "Vous pouvez venir avec une question précise concernant une relation, un choix professionnel, une dynamique familiale ou une période de changement. La séance permet de poser les éléments à plat, d'explorer plusieurs angles et de repartir avec une lecture structurée de la situation.",
          },
          {
            icon: <SparklesIcon className="w-8 h-8" />,
            heading: "Une consultation centrée sur votre situation",
            content:
              "Chaque séance part de votre question et de ce que vous traversez. Line adapte le tirage et l'échange à votre contexte, avec une approche directe et bienveillante. Les témoignages clients disponibles sur le site permettent de découvrir des retours d'expérience réels.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Voyante près de Fécamp, Valmont et Cany-Barville",
            content:
              "Line Simon vous reçoit sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville, en Seine-Maritime. Le cabinet se situe dans le secteur de Fécamp, Valmont et Cany-Barville. Les consultations de cartomancie sont également proposées par téléphone ou visioconférence.",
          },
        ]}
        faq={[
          {
            question: "Faut-il croire aux cartes pour consulter une cartomancienne ?",
            answer:
              "Non. Vous pouvez aborder la cartomancie comme un support symbolique de réflexion. L'essentiel est de venir avec une question sincère et l'envie d'explorer votre situation sous un autre angle.",
          },
          {
            question: "Peut-on poser plusieurs questions pendant une séance ?",
            answer:
              "Oui, selon la formule et le temps disponible. Pour garder un échange utile, il est généralement préférable de prioriser les sujets qui comptent le plus pour vous.",
          },
          {
            question: "La consultation de voyance est-elle possible par téléphone ?",
            answer:
              "Oui. Line propose des consultations par téléphone ou visioconférence. Vous choisissez la modalité lors de la réservation et la séance se déroule autour de vos questions comme au cabinet.",
          },
          {
            question: "Quelle différence entre cartomancie et guidance ?",
            answer:
              "La cartomancie désigne l'utilisation des cartes comme support de lecture. Le terme guidance décrit plus largement l'accompagnement et l'échange autour de ce tirage. Chez Tourma-Line, certaines formules associent également numérologie et cartomancie.",
          },
        ]}
      />
    </>
  );
};
