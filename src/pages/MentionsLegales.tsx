import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { ArrowLeftIcon } from "../components/ui/icons";
import { Link } from "react-router-dom";

const LegalLayout = ({ title, children }: { title: string; children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header onNavClick={() => {}} />
      <main className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-dark transition-colors mb-8 group">
          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour à l'accueil
        </Link>
        <h1 className="text-4xl font-display font-bold text-brand-dark mb-12">{title}</h1>
        <div className="prose prose-brand max-w-none text-gray-700 leading-relaxed space-y-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales — TOURMA-LINE</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <LegalLayout title="Mentions Légales">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Édition du site</h2>
          <p>
            Le site internet <strong>tourma-line.fr</strong> est édité par :<br />
            <strong>Line</strong><br />
            Entrepreneur individuel<br />
            SIRET : 93116533600013<br />
            Siège social : 4 résidence Les Peupliers, 76540 Gerponville, France.<br />
            Email : line.simon.ls@gmail.com<br />
            Téléphone : 06 49 65 31 86
          </p>
          <p className="mt-4">
            Conception et réalisation : <strong><a href="https://www.numtemaagency.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple">Numtema Agency — Lionel Numtema</a></strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Responsable de publication</h2>
          <p>Line</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Hébergement</h2>
          <p>
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133<br />
            Covina, CA 91723, USA<br />
            Site web : https://vercel.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de TOURMA-LINE, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de l'éditeur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Limitation de responsabilité</h2>
          <p>
            L'éditeur s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p className="mt-4 italic">
            Note importante : Les consultations de numérologie, cartomancie et les soins Lahochi sont des outils de bien-être et de connaissance de soi. Ils ne remplacent en aucun cas un avis ou un traitement médical.
          </p>
        </section>
      </LegalLayout>
    </>
  );
};
