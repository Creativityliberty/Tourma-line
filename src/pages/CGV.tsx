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

export const CGV = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales de Vente — TOURMA-LINE</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <LegalLayout title="Conditions Générales de Vente">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong>Line</strong> (ci-après dénommée "le prestataire") et toute personne physique ou morale (ci-après dénommée "le client") souhaitant bénéficier des prestations proposées sur le site <strong>tourma-line.fr</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Prestations de services</h2>
          <p>Les prestations proposées incluent :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Numérologie (étude du chemin de vie, des cycles de vie, etc.)</li>
            <li>Cartomancie (tirages de cartes pour guidance spirituelle)</li>
            <li>Soins énergétiques Lahochi (séances de bien-être)</li>
          </ul>
          <p className="mt-4 italic">
            Avertissement : Les prestations ne remplacent en aucun cas un avis, un diagnostic ou un traitement médical. Line se réserve le droit de refuser une consultation si elle estime qu'un suivi médical ou psychologique est nécessaire avant toute prestation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Prix et Modalités de paiement</h2>
          <p>
            Les prix des consultations sont indiqués en euros (€) sur le site. Les prix appliqués sont ceux en vigueur au moment de la réservation.
          </p>
          <p>Le paiement s'effectue au moment de la réservation via Cal.com (plateforme sécurisée Stripe ou PayPal) ou par avance pour les séances organisées en direct.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Réservation et Annulation</h2>
          <p>
            Toute séance réservée peut être annulée ou reportée au plus tard 24 heures avant le rendez-vous. En cas d'annulation moins de 24 heures à l'avance, ou en cas d'absence au rendez-vous sans motif légitime, la séance est due et ne fera l'objet d'aucun remboursement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Confidentialité et Éthique</h2>
          <p>
            Le prestataire s'engage à respecter la stricte confidentialité des échanges lors des consultations. Line pratique son activité avec bienveillance, sans jugement, et dans le respect de la charte déontologique de ses disciplines.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Droits de rétractation</h2>
          <p>
            Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation. En réservant une séance immédiate ou proche, le client renonce à son droit de rétractation pour permettre la réalisation de la prestation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Loi applicable</h2>
          <p>
            Les présentes conditions sont soumises à la loi française. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire.
          </p>
        </section>
      </LegalLayout>
    </>
  );
};
