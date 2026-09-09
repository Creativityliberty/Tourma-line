import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import { LayersIcon, ChatBubbleIcon, SparklesIcon, MapPinIcon } from "../components/ui/icons";

export const CartomancePage = () => {
  return (
    <>
      <Helmet>
        <title>Cartomancienne en Seine-Maritime | Gerponville — Tourma-Line</title>
        <meta
          name="description"
          content="Cartomancie et guidance avec Line à Gerponville, près de Fécamp et Valmont, ou à distance. Tirage de cartes autour de vos questions personnelles et professionnelles."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/cartomancie" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Cartomancie",
          "provider": {
            "@type": "Person",
            "name": "Line",
            "jobTitle": "Cartomancienne",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "AdministrativeArea", "name": "Normandie" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Consultation de cartomancie avec Line : lecture de cartes et guidance autour des questions personnelles, relationnelles et professionnelles.",
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
        title="Cartomancie"
        headline="Cartomancienne en Seine-Maritime — Guidance par les cartes"
        metaDescription="Cartomancie à Gerponville, près de Fécamp et Valmont, et à distance."
        heroImage="/hero-tourma-line.jpg"
        heroImageAlt="Cartomancie avec Line chez Tourma-Line en Seine-Maritime"
        intro="J'utilise les cartes comme support de guidance pour approfondir une situation précise. Relation, travail, famille, projet ou décision : le tirage me permet d'explorer votre question avec vous et de vous apporter un éclairage adapté à votre situation."
        localInfo="Cabinet : 4 résidence Les Peupliers, 76540 Gerponville — près de Fécamp, Valmont et Cany-Barville — consultations à distance possibles"
        breadcrumb="Cartomancie"
        canonicalPath="/cartomancie"
        ctaText="Réserver ma séance"
        sections={[
          {
            icon: <LayersIcon className="w-8 h-8" />,
            heading: "La cartomancie chez Tourma-Line",
            content:
              "J'utilise les cartes comme support de lecture et de dialogue. J'interprète les symboles du tirage en lien avec votre question et votre contexte afin de vous apporter un éclairage adapté à votre situation.",
          },
          {
            icon: <ChatBubbleIcon className="w-8 h-8" />,
            heading: "Relation, travail, famille : quelles questions poser ?",
            content:
              "Vous pouvez venir avec une question précise concernant une relation, un choix professionnel, une dynamique familiale ou une période de changement. La séance permet de poser les éléments à plat et d'explorer ce qui vous préoccupe.",
          },
          {
            icon: <SparklesIcon className="w-8 h-8" />,
            heading: "Une consultation centrée sur votre situation",
            content:
              "Chaque séance part de votre question et de ce que vous traversez. J'adapte le tirage et l'échange à votre contexte, avec une approche directe, intuitive et bienveillante.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Cartomancienne près de Fécamp, Valmont et Cany-Barville",
            content:
              "Je vous reçois sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville, en Seine-Maritime. Les consultations de cartomancie peuvent également être proposées à distance.",
          },
        ]}
        faq={[
          {
            question: "Faut-il croire aux cartes pour consulter une cartomancienne ?",
            answer:
              "Non. Vous pouvez venir avec votre question et votre propre sensibilité. L'essentiel est d'avoir envie d'explorer votre situation sous un autre angle.",
          },
          {
            question: "Peut-on poser plusieurs questions pendant une séance ?",
            answer:
              "Oui, selon la formule et le temps disponible. Pour garder un échange utile, il est généralement préférable de prioriser les sujets qui comptent le plus pour vous.",
          },
          {
            question: "La consultation de cartomancie est-elle possible à distance ?",
            answer:
              "Oui. Certaines consultations peuvent se faire par téléphone ou visioconférence. Les modalités sont précisées lors de la réservation.",
          },
          {
            question: "Quelle différence entre cartomancie et guidance ?",
            answer:
              "La cartomancie désigne l'utilisation des cartes comme support de lecture. Le terme guidance décrit plus largement l'accompagnement et l'échange autour du tirage. Certaines formules associent également numérologie et cartomancie.",
          },
        ]}
      />
    </>
  );
};
