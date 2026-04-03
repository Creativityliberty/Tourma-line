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

export const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité — TOURMA-LINE</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <LegalLayout title="Politique de Confidentialité">
        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">1. Responsable du traitement des données</h2>
          <p>
            Line est la responsable du traitement des données personnelles collectées sur le site <strong>tourma-line.fr</strong>.<br />
            SIRET : 93116533600013<br />
            Email : line.simon.ls@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">2. Données collectées</h2>
          <p>
            Nous collectons uniquement les données que vous nous fournissez volontairement lors de la prise de rendez-vous (via Cal.com), de vos demandes par email ou WhatsApp :<br />
            - Nom et prénom<br />
            - Adresse email<br />
            - Numéro de téléphone<br />
            - Date de naissance (uniquement pour les analyses de numérologie)
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">3. Finalité de la collecte</h2>
          <p>
            Les informations recueillies font l'objet d'un traitement informatique destiné à :<br />
            - Gérer vos rendez-vous et vos demandes d'information.<br />
            - Réaliser les études de numérologie et de cartomancie personnalisées.<br />
            - Assurer le suivi client et la facturation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">4. Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées le temps nécessaire à l'accomplissement des prestations et pour satisfaire à nos obligations légales (comptabilité, etc.).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">5. Destinataires des données</h2>
          <p>
            Les données collectées ne sont en aucun cas vendues ou cédées à des tiers. Vos informations sont accessibles uniquement par Line pour la réalisation de ses prestations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">6. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de portabilité ou de limitation du traitement de vos données personnelles. Pour exercer ces droits, vous pouvez me contacter par email : <strong>line.simon.ls@gmail.com</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-dark mb-4">7. Cookies et statistiques</h2>
          <p>
            Le site utilise Vercel Analytics pour des mesures d'audience anonymes, ne permettant pas l'identification des visiteurs. Le site respecte la vie privée de ses utilisateurs.
          </p>
        </section>
      </LegalLayout>
    </>
  );
};
