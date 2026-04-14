import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";
import { WavesIcon, LeafIcon, SparklesIcon, GlobeIcon, MapPinIcon } from "../components/ui/icons";

export const LahochiPage = () => {
  return (
    <>
      <Helmet>
        <title>Soin Lahochi en Normandie — Line | Soins Énergétiques 76</title>
        <meta
          name="description"
          content="Line, praticienne en soins énergétiques Lahochi en Normandie. Séances au cabinet à Gerponville (proche Saint-Riquier-ès-Plains) et à distance. Rééquilibrage énergétique, stress, douleurs, sommeil. RDV en ligne."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tourma-line.fr/soin-lahochi" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Soin Énergétique Lahochi",
          "provider": {
            "@type": "Person",
            "name": "Line",
            "jobTitle": "Praticienne en soins Lahochi",
            "url": "https://tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Soin énergétique Lahochi — rééquilibrage par les mains, stress, anxiété, sommeil. Séances en Normandie (Fécamp, Gerponville) et à distance.",
          "url": "https://tourma-line.fr/soin-lahochi",
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/line-simon",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <ServicePage
        title="Soin Lahochi"
        headline="Soin Énergétique Lahochi en Normandie — Rééquilibre & Soulagement"
        metaDescription="Soins Lahochi au cabinet à Gerponville et à distance."
        heroImage="/hero-tourma-line.webp"
        heroImageAlt="Line, praticienne en soins Lahochi en Normandie"
        intro="Le soin Lahochi est une méthode énergétique puissante, praticable en présentiel ou à distance. Line vous aide à relâcher les tensions, retrouver l'équilibre et dormir mieux — souvent dès la première séance."
        localInfo="Cabinet à Gerponville (76540) au 4 rue de Givrandville — Soin à distance possible : toute la France"
        breadcrumb="Soin Lahochi"
        canonicalPath="/soin-lahochi"
        ctaText="Réserver mon soin Lahochi"
        sections={[
          {
            icon: <WavesIcon className="w-8 h-8" />,
            heading: "Qu'est-ce que le soin Lahochi ?",
            content:
              "Le Lahochi (LahoChi) est une méthode de soin énergétique canalisant une énergie de haute fréquence vibratoire, souvent décrite comme plus puissante et plus rapide que le Reiki. Line transmet cette énergie universelle par imposition des mains (en contact ou à quelques centimètres du corps) pour rééquilibrer vos champs énergétiques et favoriser une guérison profonde — physique, émotionnelle, et spirituelle.",
          },
          {
            icon: <LeafIcon className="w-8 h-8" />,
            heading: "Pour quoi le Lahochi peut-il aider ?",
            content:
              "Le soin Lahochi est particulièrement efficace pour réduire le stress et l'anxiété, améliorer la qualité du sommeil, relâcher les blocages émotionnels, soulager les douleurs chroniques, et accompagner les périodes de deuil ou de grands changements de vie. Christine témoigne : 'Ça m'a soulagé de mon angoisse — je dormais mieux dès après la première séance.'",
          },
          {
            icon: <SparklesIcon className="w-8 h-8" />,
            heading: "Comment se déroule une séance ?",
            content:
              "Vous êtes allongé(e), habillé(e), dans un état de détente. Line impose les mains sur ou près de votre corps en silence, pendant 45 à 60 minutes. La séance peut provoquer une sensation de chaleur, de légèreté ou d'endormissement profond. Aucune croyance particulière n'est nécessaire — il suffit d'être ouvert(e).",
          },
          {
            icon: <GlobeIcon className="w-8 h-8" />,
            heading: "Soin Lahochi à distance — comment ça fonctionne ?",
            content:
              "Le soin à distance est une caractéristique unique du Lahochi. L'énergie n'est pas limitée par l'espace physique. Line peut pratiquer un soin à distance que vous soyez en Normandie, à Paris ou à l'autre bout de la France — avec les mêmes effets qu'en présentiel. Vous êtes allongé(e) chez vous à l'heure convenue et Line effectue le soin de son côté.",
          },
          {
            icon: <MapPinIcon className="w-8 h-8" />,
            heading: "Soins Lahochi à Gerponville et en Normandie",
            content:
              "Line vous accueille en cabinet au 4 rue de Givrandville à Gerponville (76540, Seine-Maritime), proche de Saint-Riquier-ès-Plains. Soins à distance disponibles pour toute la France.",
          },
        ]}
        faq={[
          {
            question: "C'est quoi la différence entre le Lahochi et le Reiki ?",
            answer:
              "Le Lahochi et le Reiki sont deux méthodes de soins énergétiques. Le Lahochi est considéré comme plus puissant, avec des fréquences vibratoires plus élevées, et intègre des protocoles différents. Les effets sont souvent ressentis plus rapidement et plus intensément.",
          },
          {
            question: "Est-ce que le soin Lahochi à distance est vraiment efficace ?",
            answer:
              "Oui. De nombreux clients témoignent d'effets identiques à une séance en présentiel. L'énergie Lahochi n'est pas limitée par la distance physique — c'est une caractéristique attestée par la pratique de nombreux praticiens dans le monde.",
          },
          {
            question: "Combien de séances sont nécessaires ?",
            answer:
              "Cela dépend de votre situation. Beaucoup de personnes ressentent un effet positif dès la première séance. Pour des problématiques profondes (stress chronique, deuil, douleurs), un suivi de 3 à 5 séances est souvent recommandé.",
          },
          {
            question: "Le soin Lahochi remplace-t-il un traitement médical ?",
            answer:
              "Non. Le soin Lahochi est un accompagnement complémentaire et ne remplace en aucun cas un avis ou un traitement médical. Il peut venir en soutien d'un traitement conventionnel, jamais en substitution.",
          },
        ]}
      />
    </>
  );
};
