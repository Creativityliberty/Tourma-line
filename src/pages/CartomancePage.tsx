import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";

export const CartomancePage = () => {
  return (
    <>
      <Helmet>
        <title>Cartomancienne en Normandie — Line | Consultation Cartomancie 76</title>
        <meta
          name="description"
          content="Line, cartomancienne en Seine-Maritime. Consultation de cartomancie à Gerponville (proche Saint-Riquier-ès-Plains) et à distance par téléphone. Réponses claires sur votre amour, travail, famille. RDV en ligne."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/cartomancie" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultation de Cartomancie",
          "provider": {
            "@type": "Person",
            "name": "Line",
            "jobTitle": "Cartomancienne",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Gerponville" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Consultation de cartomancie — lecture de cartes pour répondre à vos questions sur l'amour, le travail et la famille. Séances en Normandie et à distance.",
          "url": "https://www.tourma-line.fr/cartomancie",
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/line-simon",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <ServicePage
        title="Cartomancie"
        headline="Cartomancienne en Normandie — Des réponses claires et bienveillantes"
        metaDescription="Cartomancienne à Gerponville, Seine-Maritime et à distance."
        heroImage="/hero-tourma-line.webp"
        heroImageAlt="Line, cartomancienne en Normandie — consultation de cartomancie"
        intro="Line lit et interprète les cartes pour répondre à vos questions concrètes — relation, travail, famille, choix à faire. Une guidance précise, sans détour, avec la bienveillance que ses clients soulignent."
        localInfo="Cabinet à Gerponville (76540), proche Saint-Riquier-ès-Plains — À distance : toute la France"
        breadcrumb="Cartomancie"
        canonicalPath="/cartomancie"
        ctaText="Réserver ma séance de cartomancie"
        sections={[
          {
            icon: "🃏",
            heading: "Qu'est-ce que la cartomancie ?",
            content:
              "La cartomancie est l'art de lire et d'interpréter des cartes — tarot, oracles ou jeux traditionnels — pour obtenir des éclairages sur votre situation présente et à venir. Contrairement à ce qu'on imagine, ce n'est pas une pratique floue ou mystérieuse : dans les mains de Line, c'est une guidance structurée, précise, et orientée vers l'action.",
          },
          {
            icon: "💬",
            heading: "Pour quelles questions consulter ?",
            content:
              "La cartomancie répond aux questions que vous n'osez pas poser à votre entourage : votre relation amoureuse va-t-elle évoluer ? Ce changement professionnel est-il le bon ? Comment sortir de ce conflit familial ? Line aborde chaque question avec clarté et sans jugement.",
          },
          {
            icon: "✨",
            heading: "Une précision qui surprend",
            content:
              "Beaucoup de clients sont étonnés par la précision des réponses. Patricia témoigne : 'Elle a su mettre des mots sur ce que je ressentais, avec une précision qui m'a touchée en plein cœur'. Une consultation de cartomancie avec Line, c'est repartir avec des réponses concrètes sur votre situation.",
          },
          {
            icon: "📍",
            heading: "Cartomancienne à Gerponville et à distance",
            content:
              "Line est cartomancienne installée au 4 rue de Givrandville à Gerponville (76540), en Seine-Maritime (proche Saint-Riquier-ès-Plains). Elle vous reçoit en cabinet sur rendez-vous et propose des consultations de cartomancie à distance (téléphone ou visio) pour toute la France. La qualité de la séance est identique, quelle que soit la modalité.",
          },
        ]}
        faq={[
          {
            question: "Faut-il croire aux cartes pour que ça fonctionne ?",
            answer:
              "Non. La cartomancie est un outil de lecture symbolique qui fonctionne indépendamment de vos croyances. Ce qui compte, c'est votre sincérité dans vos questions et votre ouverture à recevoir des éclairages.",
          },
          {
            question: "Peut-on poser plusieurs questions en une séance de cartomancie ?",
            answer:
              "Oui, plusieurs questions peuvent être abordées selon le temps disponible. Il vaut mieux prioriser les 2 ou 3 sujets les plus importants pour vous afin d'obtenir des réponses approfondies.",
          },
          {
            question: "La cartomancie à distance est-elle aussi efficace qu'en présentiel ?",
            answer:
              "Oui. Line propose des consultations de cartomancie par téléphone ou visio avec le même niveau de précision. L'énergie et la connexion ne dépendent pas de la distance physique.",
          },
          {
            question: "Quelle est la différence entre cartomancie et guidance ?",
            answer:
              "La cartomancie est un outil de guidance qui utilise les cartes comme support de lecture. Line combine souvent cartomancie et numérologie pour une guidance encore plus complète et précise.",
          },
        ]}
      />
    </>
  );
};
