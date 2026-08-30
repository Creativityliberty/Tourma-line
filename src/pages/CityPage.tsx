import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Testimonials } from "../components/sections/Testimonials";
import { AnimateOnScroll } from "../components/ui/AnimateOnScroll";
import {
  WhatsAppIcon,
  HashIcon,
  LayersIcon,
  WavesIcon,
  CalendarIcon,
  PhoneIcon,
  SparklesIcon,
  TargetIcon,
  MapPinIcon,
  ArrowLeftIcon,
} from "../components/ui/icons";
import { localCities } from "../data/cities";
import type { City } from "../data/cities";
import { getLocalSeoDecision } from "../data/localSeoStrategy.mjs";
import { getPremiumLocalContent } from "../data/premiumLocalContent.mjs";
import { getTerritoryHubForCity } from "../data/territorialHubs.mjs";
import { ConversionLink } from "../components/ui/ConversionLink";

interface CityPageProps {
  city: City;
  service: "numerologie" | "cartomancie" | "lahochi";
  serviceLabel: string;
}

const serviceDetails = {
  numerologie: {
    title: "Numérologie",
    role: "Numérologue",
    slug: "numerologie",
    icon: <HashIcon className="w-6 h-6" />,
    what:
      "La numérologie est une pratique d'interprétation symbolique des nombres associés notamment à la date de naissance. Line l'utilise comme support de réflexion pour explorer le chemin de vie, l'année personnelle, les cycles et les périodes de transition.",
    forWho:
      "Vous souhaitez prendre du recul sur une transition, un choix professionnel, une relation ou une période de questionnement ? La séance offre un cadre de lecture complémentaire pour mettre votre situation en perspective.",
    cta: "Réserver ma consultation de numérologie",
    metaIntent: "chemin de vie, année personnelle et cycles",
  },
  cartomancie: {
    title: "Voyance & Cartomancie",
    role: "Voyante & cartomancienne",
    slug: "cartomancie",
    icon: <LayersIcon className="w-6 h-6" />,
    what:
      "La cartomancie utilise les cartes comme support de lecture et de dialogue. Line adapte le tirage à votre question afin d'explorer votre situation avec clarté, sans présenter les cartes comme une certitude absolue sur l'avenir.",
    forWho:
      "Relation, travail, famille, décision ou période de changement : vous pouvez venir avec une question précise ou simplement le besoin d'éclaircir une situation qui vous préoccupe.",
    cta: "Réserver ma séance de voyance et cartomancie",
    metaIntent: "tirage de cartes, guidance, amour, travail et décisions",
  },
  lahochi: {
    title: "Soin énergétique Lahochi",
    role: "Énergéticienne",
    slug: "soin-lahochi",
    icon: <WavesIcon className="w-6 h-6" />,
    what:
      "Le Lahochi est une pratique énergétique de bien-être reposant sur un protocole d'imposition des mains. Chez Tourma-Line, la séance est proposée comme un temps de détente, de recentrage et d'écoute de soi, sans promesse thérapeutique.",
    forWho:
      "Vous souhaitez vous accorder un moment calme, ralentir ou accompagner une période de changement par une pratique de bien-être ? Les ressentis sont personnels et variables d'une personne à l'autre.",
    cta: "Réserver ma séance énergétique Lahochi",
    metaIntent: "soin énergétique Lahochi, détente et recentrage",
  },
};

const fecampPremiumContent = {
  cartomancie: {
    pageTitle: "Voyante près de Fécamp | Cartomancie — Tourma-Line",
    headline: "Voyante & cartomancienne près de Fécamp",
    metaDescription:
      "Voyante près de Fécamp : cartomancie et guidance avec Line Simon au cabinet de Gerponville, à environ 15 km de Fécamp, ou à distance. RDV en ligne.",
    locationIntro:
      "Vous cherchez une voyante ou une cartomancienne près de Fécamp ? Line Simon vous reçoit à Gerponville, dans le même territoire de Fécamp Caux Littoral, ou vous accompagne à distance par téléphone ou visioconférence.",
    localHeading: "Voyance & cartomancie pour Fécamp et Fécamp Caux Littoral",
    serviceAngle:
      "La séance peut partir d'une question sur une relation, le travail, la famille, une décision ou une période de changement. Le tirage sert de support à l'échange et à la guidance, sans être présenté comme une certitude absolue sur l'avenir.",
    faq: [
      {
        q: "Où consulter une voyante près de Fécamp ?",
        a: "Tourma-Line reçoit sur rendez-vous au 4 résidence Les Peupliers, 76540 Gerponville. Depuis Fécamp, le cabinet se situe à environ 15 km, soit environ 20 minutes en voiture selon l'itinéraire et la circulation.",
      },
      {
        q: "Puis-je faire une consultation de voyance depuis Fécamp sans me déplacer ?",
        a: "Oui. La cartomancie et la guidance peuvent être proposées par téléphone ou visioconférence. Vous pouvez choisir la modalité adaptée lors de la réservation.",
      },
    ],
  },
  numerologie: {
    pageTitle: "Numérologue près de Fécamp | Chemin de vie — Tourma-Line",
    headline: "Numérologue près de Fécamp — chemin de vie & année personnelle",
    metaDescription:
      "Numérologue près de Fécamp : chemin de vie, année personnelle et cycles avec Line Simon à Gerponville, à environ 15 km, ou à distance. RDV en ligne.",
    locationIntro:
      "Vous recherchez une numérologue près de Fécamp ? Line Simon vous reçoit à Gerponville, dans le territoire de Fécamp Caux Littoral, pour explorer chemin de vie, année personnelle et cycles, avec une option à distance.",
    localHeading: "Numérologie près de Fécamp, au cœur de Fécamp Caux Littoral",
    serviceAngle:
      "La consultation s'appuie sur votre date de naissance pour mettre en perspective votre chemin de vie, votre année personnelle et les cycles que vous traversez. Elle peut aider à structurer une réflexion autour d'une transition, d'un choix ou d'une période de questionnement.",
    faq: [
      {
        q: "Où trouver une numérologue près de Fécamp ?",
        a: "Line Simon reçoit au cabinet Tourma-Line à Gerponville, à environ 15 km de Fécamp et environ 20 minutes en voiture selon l'itinéraire et la circulation.",
      },
      {
        q: "La numérologie peut-elle se faire à distance depuis Fécamp ?",
        a: "Oui. La lecture numérologique peut être réalisée à distance puis expliquée par téléphone ou visioconférence, selon la formule réservée.",
      },
    ],
  },
  lahochi: {
    pageTitle: "Énergéticienne près de Fécamp | Soin Lahochi — Tourma-Line",
    headline: "Énergéticienne près de Fécamp — soin énergétique Lahochi",
    metaDescription:
      "Énergéticienne près de Fécamp : séance énergétique Lahochi de bien-être avec Line Simon à Gerponville, à environ 15 km, ou à distance. RDV en ligne.",
    locationIntro:
      "Vous cherchez une énergéticienne près de Fécamp ? Line Simon propose des séances Lahochi à Gerponville, dans le territoire de Fécamp Caux Littoral, comme temps de détente et de recentrage, au cabinet ou à distance.",
    localHeading: "Soin énergétique Lahochi près de Fécamp",
    serviceAngle:
      "La séance Lahochi est proposée comme une pratique énergétique de bien-être : un temps pour ralentir, se recentrer et porter attention à ses ressentis. Elle ne constitue pas un acte médical et aucun résultat thérapeutique n'est garanti.",
    faq: [
      {
        q: "Où trouver une énergéticienne près de Fécamp ?",
        a: "Line Simon reçoit sur rendez-vous à Gerponville, à environ 15 km de Fécamp et environ 20 minutes en voiture selon l'itinéraire et la circulation.",
      },
      {
        q: "Peut-on réserver un soin énergétique Lahochi à distance depuis Fécamp ?",
        a: "Oui. Tourma-Line propose également le Lahochi à distance comme pratique énergétique de bien-être. Cette pratique ne remplace pas un diagnostic, un traitement ou un suivi par un professionnel de santé.",
      },
    ],
  },
};

const fecampDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&origin=F%C3%A9camp%2C%20France&destination=4%20r%C3%A9sidence%20Les%20Peupliers%2C%2076540%20Gerponville%2C%20France";

export const CityPage = ({ city, service }: CityPageProps) => {
  const svc = serviceDetails[service];
  const isFecamp = city.slug === "fecamp";
  const seoDecision = getLocalSeoDecision(city.slug, svc.slug);
  const isIndexableLocalPage = isFecamp || seoDecision?.tier === "A";
  const robotsDirective = isIndexableLocalPage ? "index, follow" : "noindex, follow";
  const territoryHub = getTerritoryHubForCity(city.slug);
  const scoredPremiumContent =
    seoDecision?.tier === "A" ? getPremiumLocalContent(city.slug, svc.slug) : null;
  const premiumContent = isFecamp
    ? fecampPremiumContent[service]
    : scoredPremiumContent;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const relatedCities = localCities
    .filter((candidate) => candidate.slug !== city.slug)
    .filter((candidate) => getLocalSeoDecision(candidate.slug, svc.slug)?.tier === "A")
    .slice(0, 3);

  const otherServices = Object.entries(serviceDetails)
    .filter(([key]) => key !== service)
    .map(([, value]) => ({ slug: value.slug, title: value.title }))
    .filter((item) => getLocalSeoDecision(city.slug, item.slug)?.tier === "A");

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) event.preventDefault();
  };

  const pageTitle =
    premiumContent?.pageTitle ??
    `${svc.role} près de ${city.name} | ${svc.title} — Tourma-Line`;

  const metaDesc =
    premiumContent?.metaDescription ??
    `${svc.role} près de ${city.name} : ${svc.metaIntent}. Cabinet Tourma-Line à Gerponville (76540) ou séance à distance. RDV en ligne ou WhatsApp.`;

  const canonicalUrl = `https://www.tourma-line.fr/${svc.slug}-${city.slug}`;
  const ogImage = "https://www.tourma-line.fr/hero-tourma-line.jpg";
  const headline = premiumContent?.headline ?? `${svc.role} près de ${city.name}`;
  const locationIntro =
    premiumContent?.locationIntro ??
    `Vous habitez ${city.name} ou ses alentours ? Line Simon vous reçoit au cabinet Tourma-Line à Gerponville, en Seine-Maritime, et propose également des séances à distance selon la prestation.`;

  const premiumLocalContext = isFecamp
    ? "Gerponville et Fécamp font partie de Fécamp Caux Littoral Agglomération. Le cabinet Tourma-Line est situé à environ 15 km de Fécamp, soit environ 20 minutes en voiture selon l'itinéraire et la circulation."
    : premiumContent?.localContext;
  const directionsUrl = isFecamp
    ? fecampDirectionsUrl
    : premiumContent?.directionsUrl;
  const directionsLabel = isFecamp
    ? "Itinéraire Fécamp → Gerponville"
    : premiumContent?.directionsLabel;

  const whatsappMessage = encodeURIComponent(
    `Bonjour Line, je suis à ${city.name} et je souhaite en savoir plus sur ${svc.title.toLowerCase()}.`
  );

  const genericFaq = [
    {
      q: `Où se trouve Tourma-Line si j'habite ${city.name} ?`,
      a: `Le cabinet Tourma-Line se trouve au 4 résidence Les Peupliers, 76540 Gerponville. Si vous habitez ${city.name}, vous pouvez venir au cabinet sur rendez-vous ou choisir une modalité à distance lorsqu'elle est proposée.`,
    },
    {
      q: `Comment réserver une séance de ${svc.title.toLowerCase()} ?`,
      a: "Vous pouvez réserver via Cal.com ou contacter Line sur WhatsApp. Les horaires, modalités et informations pratiques sont confirmés au moment de la réservation.",
    },
    {
      q: `Quels sont les tarifs pour ${svc.title.toLowerCase()} ?`,
      a: "Les tarifs dépendent de la prestation et de la formule choisie. Consultez la page Prestations pour les prix à jour avant de réserver.",
    },
    {
      q:
        service === "lahochi"
          ? "Le Lahochi remplace-t-il un soin médical ?"
          : `La consultation de ${svc.title.toLowerCase()} est-elle possible à distance ?`,
      a:
        service === "lahochi"
          ? "Non. Le Lahochi est présenté par Tourma-Line comme une pratique de bien-être complémentaire. Il ne remplace pas un diagnostic, un traitement, un suivi psychologique ni l'avis d'un professionnel de santé."
          : "Oui. Tourma-Line propose des consultations à distance par téléphone ou visioconférence. Les modalités sont précisées lors de la réservation.",
    },
  ];

  const cityFaq = premiumContent
    ? [...premiumContent.faq, genericFaq[1], genericFaq[2], genericFaq[3]]
    : genericFaq;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content={robotsDirective} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${svc.title} près de ${city.name}`,
          "provider": { "@id": "https://www.tourma-line.fr/#business" },
          "areaServed": [
            { "@type": "City", "name": city.name },
            { "@type": "AdministrativeArea", "name": city.region },
            { "@type": "Country", "name": city.country },
          ],
          "description": metaDesc,
          "url": canonicalUrl,
          "image": ogImage,
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/tourma-line",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
          },
          "serviceType": svc.title,
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.tourma-line.fr/" },
            { "@type": "ListItem", "position": 2, "name": svc.title, "item": `https://www.tourma-line.fr/${svc.slug}` },
            { "@type": "ListItem", "position": 3, "name": city.name, "item": canonicalUrl },
          ],
        })}</script>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tourma-Line" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={ogImage} />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <img
          src="/hero-tourma-line.jpg"
          alt={`${svc.title} — Tourma-Line à Gerponville, pour ${city.name} et à distance`}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-lilas transition-colors">Accueil</Link></li>
              <li className="text-gray-600">/</li>
              <li><Link to={`/${svc.slug}`} className="hover:text-brand-lilas transition-colors">{svc.title}</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-brand-lilas">{city.name}</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-3 bg-brand-lilas/20 border border-brand-lilas/30 text-brand-lilas text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <div className="flex-shrink-0">{svc.icon}</div>
            <span>{city.flag} {city.name} — {city.country}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            {headline}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-5 leading-relaxed">
            {locationIntro}
          </p>
          <div className="flex items-start gap-2 text-brand-lilas font-medium mb-5">
            <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">
              Cabinet : 4 résidence Les Peupliers, 76540 Gerponville — sur rendez-vous
            </p>
          </div>
          {territoryHub && (
            <p className="mb-10 text-sm text-gray-300">
              Pour votre secteur, retrouvez aussi les informations de{" "}
              <Link to={`/zones/${territoryHub.slug}`} className="font-semibold text-brand-lilas hover:underline">
                {territoryHub.label}
              </Link>.
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <ConversionLink kind="booking" placement="hero"
              href="https://cal.com/tourma-line"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 text-center shadow-lg"
            >
              {svc.cta}
            </ConversionLink>
            <ConversionLink kind="whatsapp" placement="hero"
              href={`https://wa.me/33649653186?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Poser une question
            </ConversionLink>
          </div>
        </div>
      </section>

      <main>
        {premiumContent && (
          <section className="py-16 bg-brand-lilas/10 border-b border-brand-lilas/30">
            <AnimateOnScroll>
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-8 items-stretch">
                  <article className="rounded-3xl bg-white p-8 sm:p-10 shadow-sm border border-brand-lilas/30">
                    <p className="text-brand-purple text-sm font-bold uppercase tracking-widest mb-3">
                      {city.name} → Gerponville
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-5">
                      {premiumContent.localHeading}
                    </h2>
                    {premiumLocalContext && (
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {premiumLocalContext}
                      </p>
                    )}
                    <p className="text-gray-700 leading-relaxed">
                      {premiumContent.serviceAngle}
                    </p>
                  </article>

                  <aside className="rounded-3xl bg-brand-dark text-white p-8 flex flex-col justify-between">
                    <div>
                      <MapPinIcon className="w-8 h-8 text-brand-lilas mb-5" />
                      <h3 className="text-2xl font-display font-bold mb-3">
                        Venir depuis {city.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        Destination : 4 résidence Les Peupliers, 76540 Gerponville.
                      </p>
                      <p className="text-brand-lilas text-sm font-semibold">
                        Cabinet réel à Gerponville • consultation sur rendez-vous
                      </p>
                    </div>
                    {directionsUrl && directionsLabel && (
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-lilas px-6 py-3 font-bold text-brand-dark transition-transform hover:scale-105 active:scale-95"
                      >
                        {directionsLabel}
                      </a>
                    )}
                  </aside>
                </div>
              </div>
            </AnimateOnScroll>
          </section>
        )}

        {!isIndexableLocalPage && territoryHub && (
          <section className="border-b border-brand-lilas/30 bg-brand-lilas/10 py-12">
            <div className="container mx-auto max-w-4xl px-6 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-purple">
                Informations de secteur
              </p>
              <h2 className="mb-4 font-display text-3xl text-brand-dark">
                Retrouvez les informations pratiques pour votre secteur
              </h2>
              <p className="mx-auto mb-6 max-w-3xl leading-relaxed text-gray-600">
                Vous habitez {city.name} ? Le cabinet Tourma-Line vous accueille à Gerponville sur rendez-vous. Vous pouvez aussi consulter à distance selon la prestation. La zone {territoryHub.label} rassemble les repères utiles pour venir ou choisir la modalité qui vous convient.
              </p>
              <Link
                to={`/zones/${territoryHub.slug}`}
                className="inline-flex rounded-full bg-brand-dark px-6 py-3 font-bold text-white"
              >
                Découvrir {territoryHub.label}
              </Link>
            </div>
          </section>
        )}

        <section className="py-20 bg-white">
          <AnimateOnScroll>
            <div className="container mx-auto px-6 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-12 text-center">
                Comment se déroule une séance avec Tourma-Line ?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    num: "01",
                    title: "Vous réservez",
                    desc: "Choisissez votre créneau sur Cal.com ou contactez Line par WhatsApp pour vérifier la modalité qui vous convient.",
                    icon: <CalendarIcon className="w-10 h-10 text-brand-purple" />,
                  },
                  {
                    num: "02",
                    title: "La séance",
                    desc:
                      service === "lahochi"
                        ? "Au cabinet ou à distance, la séance Lahochi est organisée comme un temps calme de bien-être et de recentrage."
                        : "Au cabinet, par téléphone ou en visio selon la formule : la séance part de votre situation et de vos questions.",
                    icon: <PhoneIcon className="w-10 h-10 text-brand-purple" />,
                  },
                  {
                    num: "03",
                    title: "Après la séance",
                    desc: "Vous repartez avec les éléments abordés pendant l'échange. Un enregistrement audio peut être proposé pour certaines consultations, sur demande.",
                    icon: <SparklesIcon className="w-10 h-10 text-brand-purple" />,
                  },
                ].map((step) => (
                  <div key={step.num} className="bg-brand-lilas/20 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                    <div className="mb-4">{step.icon}</div>
                    <div className="text-brand-purple font-bold text-sm uppercase tracking-widest mb-2">Étape {step.num}</div>
                    <h3 className="text-xl font-display text-brand-dark mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-brand-dark rounded-2xl p-8 sm:p-10 text-white mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-brand-lilas">{svc.icon}</div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold">
                    {svc.title} : de quoi s'agit-il ?
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{svc.what}</p>
              </div>

              <div className="bg-brand-lilas/30 rounded-2xl p-8 border border-brand-lilas/50 mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <TargetIcon className="w-8 h-8 text-brand-purple" />
                  <h2 className="text-2xl font-display text-brand-dark">
                    Pour quelles situations ?
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">{svc.forWho}</p>
              </div>

              <div className="bg-brand-purple/10 rounded-2xl p-8 border border-brand-purple/20 mb-12">
                <div className="flex items-center gap-4 mb-4">
                  <MapPinIcon className="w-8 h-8 text-brand-purple" />
                  <h2 className="text-2xl font-display text-brand-dark">
                    Depuis {city.name} : cabinet à Gerponville ou séance à distance
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {locationIntro} Le cabinet est toujours situé au 4 résidence Les Peupliers à Gerponville.
                </p>
                {territoryHub && (
                  <p className="mt-5">
                    <Link to={`/zones/${territoryHub.slug}`} className="font-semibold text-brand-purple hover:underline">
                      Voir toutes les informations pour {territoryHub.label} →
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </section>

        <Testimonials />

        <section className="py-20 bg-white" aria-label="Questions fréquentes">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-display text-brand-dark mb-12 text-center">
              Questions fréquentes — {svc.title} & {city.name}
            </h2>
            <div className="space-y-6">
              {cityFaq.map((item) => (
                <article key={item.q} className="bg-brand-lilas/10 rounded-xl p-6 border border-brand-lilas/30">
                  <h3 className="text-lg font-semibold text-brand-dark mb-3">{item.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-5">
                  Autres accompagnements près de {city.name}
                </h2>
                <div className="space-y-3">
                  {otherServices.length > 0 ? (
                    otherServices.map((item) => (
                      <Link
                        key={item.slug}
                        to={`/${item.slug}-${city.slug}`}
                        className="block rounded-xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
                      >
                        {item.title} — {city.name}
                      </Link>
                    ))
                  ) : territoryHub ? (
                    <Link
                      to={`/zones/${territoryHub.slug}`}
                      className="block rounded-xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
                    >
                      Toutes les prestations — {territoryHub.label}
                    </Link>
                  ) : (
                    <p className="text-gray-300">
                      Retrouvez les autres prestations depuis leurs pages principales.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-5">
                  Autres secteurs proches
                </h2>
                <div className="space-y-3">
                  {relatedCities.map((relatedCity) => (
                    <Link
                      key={relatedCity.slug}
                      to={`/${svc.slug}-${relatedCity.slug}`}
                      className="block rounded-xl border border-white/15 bg-white/5 px-5 py-4 hover:bg-white/10 transition-colors"
                    >
                      {svc.title} — {relatedCity.name}
                    </Link>
                  ))}
                  {territoryHub && (
                    <Link
                      to={`/zones/${territoryHub.slug}`}
                      className="block rounded-xl border border-brand-lilas/40 bg-brand-lilas/10 px-5 py-4 text-brand-lilas hover:bg-brand-lilas/20 transition-colors"
                    >
                      Explorer {territoryHub.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-lilas/20 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-5">
              Une question avant de réserver ?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Contactez Line pour vérifier la prestation, la modalité et les informations pratiques adaptées à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConversionLink kind="whatsapp" placement="bottom-cta"
                href={`https://wa.me/33649653186?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-3"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </ConversionLink>
              <Link
                to="/prestations"
                className="bg-brand-dark text-white font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-2"
              >
                <ArrowLeftIcon className="w-5 h-5" />
                Voir les prestations
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
