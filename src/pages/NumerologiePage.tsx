import React from "react";
import { Helmet } from "react-helmet-async";
import { ServicePage } from "./ServicePage";

export const NumerologiePage = () => {
  return (
    <>
      <Helmet>
        <title>Numérologie en Normandie — Line Simon | Consultation Numérologue 76</title>
        <meta
          name="description"
          content="Line Simon, numérologue en Seine-Maritime. Consultation de numérologie à Gerponville, Fécamp, Valmont, et à distance. Découvrez votre chemin de vie, votre année personnelle et vos défis. RDV en ligne."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/numerologie" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultation de Numérologie",
          "provider": {
            "@type": "Person",
            "name": "Line Simon",
            "jobTitle": "Numérologue",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": "Fécamp" },
            { "@type": "City", "name": "Gerponville" },
            { "@type": "City", "name": "Valmont" },
            { "@type": "AdministrativeArea", "name": "Seine-Maritime" },
            { "@type": "Country", "name": "France" }
          ],
          "description": "Consultation de numérologie personnalisée à partir de votre date de naissance. Décryptage de votre chemin de vie, année personnelle et défis actuels.",
          "url": "https://www.tourma-line.fr/numerologie",
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/line-simon",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
      </Helmet>
      <ServicePage
        title="Numérologie"
        headline="Numérologie en Normandie — Décryptez votre chemin de vie"
        metaDescription="Numérologue à Gerponville, Fécamp, Seine-Maritime et à distance."
        heroImage="/hero-tourma-line.webp"
        heroImageAlt="Line Simon, numérologue en Normandie — consultation de numérologie"
        intro="À partir de votre date de naissance, Line Simon révèle les clés de votre personnalité, vos cycles de vie et les opportunités qui s'offrent à vous. Une consultation précise, bienveillante, que vous soyez en Normandie ou partout en France."
        localInfo="Cabinet à Gerponville (76540) — Domicile : Fécamp, Valmont, Cany-Barville — À distance : toute la France"
        breadcrumb="Numérologie"
        canonicalPath="/numerologie"
        ctaText="Réserver ma consultation de numérologie"
        sections={[
          {
            icon: "🔢",
            heading: "Qu'est-ce que la numérologie ?",
            content:
              "La numérologie est une science ancienne qui étudie l'influence des nombres sur notre existence. Chaque nombre issu de votre date de naissance possède une vibration particulière qui révèle des aspects profonds de votre personnalité, de votre chemin de vie, et des cycles que vous traversez. Ce n'est pas de la magie : c'est une lecture précise et structurée que Line Simon pratique depuis plusieurs années.",
          },
          {
            icon: "🗺️",
            heading: "Ce que la numérologie révèle",
            content:
              "Grâce à votre date de naissance, Line Simon déchiffre votre nombre chemin de vie (votre mission de fond), votre année personnelle (le cycle actuel que vous traversez), vos forces et défis récurrents, ainsi que les thèmes de vie qui se rejouent. Beaucoup de clients témoignent d'une résonnance immédiate : 'comme si elle connaissait ma vie sans que je lui aie rien dit'.",
          },
          {
            icon: "💼",
            heading: "Pour quelles situations consulter ?",
            content:
              "Vous traversez une période de doute professionnel, une remise en question personnelle, une rupture, un deuil ou un tournant de vie ? La numérologie aide à clarifier ce qui se passe réellement, à comprendre pourquoi certains schémas se répètent, et à identifier la direction juste pour avancer.",
          },
          {
            icon: "📍",
            heading: "Consultation à Gerponville, Fécamp ou à distance",
            content:
              "Line Simon reçoit en cabinet à Gerponville (76540, Seine-Maritime), se déplace à domicile autour de Fécamp, Valmont, Cany-Barville et Ourville-en-Caux. Pour ceux qui n'habitent pas en Normandie, les consultations de numérologie sont disponibles par téléphone ou visio pour toute la France. Réservation en ligne via Cal.com.",
          },
        ]}
        faq={[
          {
            question: "Ai-je besoin de préparer quelque chose avant la consultation de numérologie ?",
            answer:
              "Non, seule votre date de naissance est nécessaire. Vous pouvez venir avec des questions ou simplement avec le besoin de comprendre ce que vous traversez — la séance s'adapte.",
          },
          {
            question: "Est-ce que la numérologie peut m'aider en période de transition professionnelle ?",
            answer:
              "Oui. La numérologie identifie vos cycles personnels et vos forces naturelles, ce qui aide à clarifier les décisions professionnelles, comprendre les blocages récurrents et prendre confiance dans vos choix.",
          },
          {
            question: "La consultation de numérologie est-elle disponible à distance depuis toute la France ?",
            answer:
              "Absolument. Les consultations par téléphone ou visio sont disponibles pour toute la France, sans déplacement. La qualité de la lecture est identique à une séance en présentiel.",
          },
          {
            question: "Combien de temps dure une consultation de numérologie avec Line Simon ?",
            answer:
              "Les consultations durent généralement entre 45 minutes et 1 heure, selon la profondeur des questions abordées. Un enregistrement audio peut être fourni sur demande.",
          },
        ]}
      />
    </>
  );
};
