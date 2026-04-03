import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
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
  ArrowLeftIcon 
} from "../ui/icons";
import type { City } from "../data/cities";

interface CityPageProps {
  city: City;
  service: "numerologie" | "cartomancie" | "lahochi";
  serviceLabel: string;
}

const serviceDetails = {
  numerologie: {
    title: "Numérologie",
    description: "la numérologie, une science des nombres qui révèle votre chemin de vie, vos cycles personnels et vos talents profonds",
    what: "À partir de votre date de naissance, Line déchiffre votre nombre chemin de vie, votre année personnelle et les cycles que vous traversez en ce moment. Une lecture précise, structurée, avec des réponses concrètes sur votre situation.",
    icon: <HashIcon className="w-6 h-6" />,
    forWho: "Vous traversez un doute professionnel, une remise en question, une rupture ou une période de transition ? La numérologie vous aide à comprendre pourquoi et comment avancer.",
    cta: "Réserver ma consultation de numérologie",
    slug: "numerologie",
  },
  cartomancie: {
    title: "Cartomancie",
    description: "la cartomancie, une guidance par les cartes qui répond à vos questions concrètes sur l'amour, le travail et la famille",
    what: "Line lit et interprète les cartes pour répondre à vos questions avec clarté. Relation amoureuse, choix professionnel, conflit familial — chaque tirage est adapté à votre situation précise, sans généralités.",
    icon: <LayersIcon className="w-6 h-6" />,
    forWho: "Vous avez une question précise ou un doute profond ? Que ce soit sur votre vie amoureuse, professionnelle ou personnelle, la cartomancie apporte des éclairages concrets et bienveillants.",
    cta: "Réserver ma séance de cartomancie",
    slug: "cartomancie",
  },
  lahochi: {
    title: "Soin Lahochi",
    description: "les soins énergétiques Lahochi, une méthode puissante de rééquilibrage par transmision d'énergie à distance",
    what: "Le Lahochi est un soin énergétique de haute fréquence, pratiqué à distance. Vous êtes allongé(e) chez vous à l'heure convenue, et Line effectue le soin depuis Gerponville. Les effets sur le stress, le sommeil et les tensions sont souvent ressentis dès la première séance.",
    icon: <WavesIcon className="w-6 h-6" />,
    forWho: "Stress chronique, anxiété, troubles du sommeil, blocages émotionnels, deuil ou burn-out ? Le Lahochi agit en profondeur, sans déplacement nécessaire.",
    cta: "Réserver mon soin Lahochi",
    slug: "soin-lahochi",
  },
};

export const CityPage = ({ city, service }: CityPageProps) => {
  const svc = serviceDetails[service];
  const isLocal = city.type === "local";
  const isInternational = city.type === "international";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) e.preventDefault();
  };

  const localityText = isLocal
    ? `près de Gerponville, à ${city.name}`
    : isInternational
    ? `depuis ${city.country}`
    : `depuis ${city.name}`;

  const distanceText = isLocal
    ? `en cabinet à Gerponville ou par téléphone`
    : `par téléphone ou visio, depuis ${city.name}`;

  const pageTitle = `${svc.title} à ${city.name} — Consultation avec Line`;
  const metaDesc = `Consultation de ${svc.title.toLowerCase()} à ${city.name} (${city.region}) avec Line, numérologue et cartomancienne en Normandie. Séance ${distanceText}. RDV en ligne ou WhatsApp.`;
  const canonicalUrl = `https://www.tourma-line.fr/${svc.slug}-${city.slug}`;

  const whatsappMessage = encodeURIComponent(
    `Bonjour Line, je suis à ${city.name} et je souhaite une consultation de ${svc.title.toLowerCase()}. Pouvez-vous m'en dire plus ?`
  );

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDesc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": `${svc.title} à ${city.name}`,
          "provider": {
            "@type": "Person",
            "name": "Line",
            "jobTitle": "Numérologue et Cartomancienne",
            "url": "https://www.tourma-line.fr/"
          },
          "areaServed": [
            { "@type": "City", "name": city.name },
            { "@type": "AdministrativeArea", "name": city.region },
            { "@type": "Country", "name": city.country }
          ],
          "description": metaDesc,
          "url": canonicalUrl,
          "offers": {
            "@type": "Offer",
            "url": "https://cal.com/line-simon",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock"
          },
          "serviceType": svc.title,
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceType": "Consultation à distance",
            "availableLanguage": "French"
          }
        })}</script>
      </Helmet>

      <Header onNavClick={handleNavClick} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url(/hero-tourma-line.webp)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
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
            {svc.title} à {city.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Vous habitez à {city.name} et cherchez une consultation de {svc.title.toLowerCase()} ?
            Line vous reçoit <strong className="text-white">{distanceText}</strong>, avec la même précision qu'en cabinet.
          </p>
          <div className="flex items-center gap-2 text-brand-lilas font-medium mb-10">
            <MapPinIcon className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">
              4 résidence Les Peupliers, 76540 Gerponville — Consultations {isLocal ? "en présentiel ou à distance" : "à distance pour " + city.country}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/33649653186?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contacter Line sur WhatsApp
            </a>
            <a
              href="https://cal.com/line-simon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 text-center animate-pulse shadow-lg"
            >
              {svc.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Comment ça se passe */}
      <section className="py-20 bg-white">
        <AnimateOnScroll>
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-12 text-center">
              Comment se passe une consultation de {svc.title.toLowerCase()} {localityText} ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  num: "01",
                  title: "Vous réservez",
                  desc: `Via WhatsApp, Cal.com ou par téléphone. Line confirme votre créneau sous 24h. Pas de déplacement nécessaire ${isLocal ? "sauf si vous venez en cabinet" : "— tout se fait depuis chez vous"}.`,
                  icon: <CalendarIcon className="w-10 h-10 text-brand-purple" />
                },
                {
                  num: "02",
                  title: "La séance",
                  desc: `Vous appelez (ou êtes appelé) à l'heure convenue. La séance dure 45 à 60 min. Pour ${svc.title === "Soin Lahochi" ? "le Lahochi, vous êtes allongé(e) chez vous en état de détente" : "la consultation, seule votre date de naissance est nécessaire"}.`,
                  icon: <PhoneIcon className="w-10 h-10 text-brand-purple" />
                },
                {
                  num: "03",
                  title: "Après la séance",
                  desc: "Un enregistrement audio peut être fourni sur demande. Vous pouvez revenir avec des questions. Suivi possible.",
                  icon: <SparklesIcon className="w-10 h-10 text-brand-purple" />
                }
              ].map((step) => (
                <div key={step.num} className="bg-brand-lilas/20 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
                  <div className="mb-4">{step.icon}</div>
                  <div className="text-brand-purple font-bold text-sm uppercase tracking-widest mb-2">Étape {step.num}</div>
                  <h3 className="text-xl font-display text-brand-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Ce que c'est */}
            <div className="bg-brand-dark rounded-2xl p-8 sm:p-10 text-white mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-brand-lilas">{svc.icon}</div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold">
                  C'est quoi, {svc.description} ?
                </h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">{svc.what}</p>
            </div>

            {/* Pour qui */}
            <div className="bg-brand-lilas/30 rounded-2xl p-8 border border-brand-lilas/50 mb-12">
              <div className="flex items-center gap-4 mb-4">
                <TargetIcon className="w-8 h-8 text-brand-purple" />
                <h2 className="text-2xl font-display text-brand-dark">
                  Pour qui ? Pour quelles situations ?
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{svc.forWho}</p>
            </div>

            {/* FAQ locale */}
            <div className="space-y-4">
              <h2 className="text-2xl font-display text-brand-dark mb-6 text-center">
                Questions fréquentes — {svc.title} depuis {city.name}
              </h2>
              {[
                {
                  q: `Est-ce que la consultation de ${svc.title.toLowerCase()} à distance depuis ${city.name} est aussi précise ?`,
                  a: `Oui, totalement. Que vous soyez à ${city.name}, Paris ou à l'autre bout du monde, la qualité de la lecture est identique. La numérologie et la cartomancie travaillent avec des données précises (date de naissance, questions posées) — la distance ne change rien.`
                },
                {
                  q: `Comment se fait le paiement depuis ${city.name} ?`,
                  a: "Le règlement se fait avant la séance via Cal.com (carte bancaire, PayPal) ou par virement. Tout se passe en ligne, de manière simple et sécurisée."
                },
                {
                  q: `Puis-je avoir un enregistrement de la consultation ?`,
                  a: "Oui, sur demande, un enregistrement audio de la séance peut vous être envoyé. Idéal pour réécouter les éléments importants à votre rythme."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-brand-dark mb-2">{item.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
            Prêt(e) à réserver depuis {city.name} ?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contactez directement Line sur WhatsApp pour un premier échange, ou réservez votre créneau en ligne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/33649653186?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp — Réponse rapide
            </a>
            <a
              href="https://cal.com/line-simon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-lilas hover:bg-opacity-80 text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Réserver en ligne
            </a>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2">
            <Link to="/" className="text-gray-400 hover:text-brand-lilas transition-colors text-sm flex items-center gap-2">
              <ArrowLeftIcon className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <span className="text-gray-600 hidden sm:block">·</span>
            <Link to={`/${svc.slug}`} className="text-gray-400 hover:text-brand-lilas transition-colors text-sm flex items-center gap-2">
              <ArrowLeftIcon className="w-4 h-4" />
              Retour à la page {svc.title}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
