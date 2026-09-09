import { Analytics } from "@vercel/analytics/react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Routes, Route } from "react-router-dom";

// Layout Components
import { Header } from "./src/components/layout/Header";
import { Footer } from "./src/components/layout/Footer";

// Section Components
import { Hero } from "./src/components/sections/Hero";
import { Welcome } from "./src/components/sections/Welcome";
import { Services } from "./src/components/sections/Services";
import { Benefits } from "./src/components/sections/Benefits";
import { Consultations } from "./src/components/sections/Consultations";
import { Formules } from "./src/components/sections/Formules";
import { Process } from "./src/components/sections/Process";
import { LocalZone } from "./src/components/sections/LocalZone";
import { Testimonials } from "./src/components/sections/Testimonials";
import { TestimonialsTicker } from "./src/components/sections/TestimonialsTicker";
import { About } from "./src/components/sections/About";
import { FAQ } from "./src/components/sections/FAQ";
import { Contact } from "./src/components/sections/Contact";

// Service Pages
import { NumerologiePage } from "./src/pages/NumerologiePage";
import { CartomancePage } from "./src/pages/CartomancePage";
import { LahochiPage } from "./src/pages/LahochiPage";
import { ConsultationDistancePage } from "./src/pages/ConsultationDistancePage";
import { PrestationsPage } from "./src/pages/PrestationsPage";
import { AvisPage } from "./src/pages/AvisPage";
import { RendezVousPage } from "./src/pages/RendezVousPage";
import { CityPage } from "./src/pages/CityPage";
import { TerritoryHubPage } from "./src/pages/TerritoryHubPage";
import { WhatsAppFloat } from "./src/components/ui/WhatsAppFloat";
import { localCities } from "./src/data/cities";
import { territorialHubs } from "./src/data/territorialHubs.mjs";
import { BlogPostPage } from "./src/pages/BlogPostPage";
import { BlogListPage } from "./src/pages/BlogListPage";
import { NotFoundPage } from "./src/pages/NotFoundPage";

// Legal Pages
import { MentionsLegales } from "./src/pages/MentionsLegales";
import { PolitiqueConfidentialite } from "./src/pages/PolitiqueConfidentialite";
import { CGV } from "./src/pages/CGV";

import "./src/index.css";

const SectionScroller = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const pathMap: Record<string, string> = {
      "/": "accueil",
      "/services": "services",
      "/consultations": "consultations",
      "/formules": "formules",
      "/bienfaits": "bienfaits",
      "/a-propos": "a-propos",
      "/about": "a-propos",
      "/faq": "faq",
    };

    const targetId = hash ? hash.substring(1) : (pathMap[pathname] || null);

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

function HomePage() {
  const [activeTab, setActiveTab] = useState("numerology");
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && (href.startsWith("#") || href.startsWith("/"))) {
      e.preventDefault();
      if (href.startsWith("#")) {
        const path = href === "#accueil" ? "/" : `/${href.substring(1)}`;
        navigate(path);
      } else {
        navigate(href);
      }
    }
  };

  return (
    <div className="App min-h-screen bg-white font-sans">
      <SectionScroller />
      <Header onNavClick={handleNavClick} />
      <Hero onNavClick={handleNavClick} />
      <TestimonialsTicker />
      <Welcome />
      <div id="services">
        <Services activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Consultations />
      <Formules />
      <Benefits />
      <Process />
      <LocalZone />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prestations" element={<PrestationsPage />} />
        <Route path="/avis" element={<AvisPage />} />
        <Route path="/rendezvous" element={<RendezVousPage />} />
        <Route path="/numerologie" element={<NumerologiePage />} />
        <Route path="/cartomancie" element={<CartomancePage />} />
        <Route path="/soin-lahochi" element={<LahochiPage />} />
        <Route path="/consultation-a-distance" element={<ConsultationDistancePage />} />

        {territorialHubs.map((hub) => (
          <Route
            key={hub.slug}
            path={hub.path}
            element={<TerritoryHubPage hub={hub} />}
          />
        ))}

        {localCities.flatMap((city) => [
          <Route
            key={`num-${city.slug}`}
            path={`/numerologie-${city.slug}`}
            element={<CityPage city={city} service="numerologie" serviceLabel="Numérologie" />}
          />,
          <Route
            key={`cart-${city.slug}`}
            path={`/cartomancie-${city.slug}`}
            element={<CityPage city={city} service="cartomancie" serviceLabel="Cartomancie" />}
          />,
          <Route
            key={`laho-${city.slug}`}
            path={`/soin-lahochi-${city.slug}`}
            element={<CityPage city={city} service="lahochi" serviceLabel="Soin Lahochi" />}
          />
        ])}

        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/conditions-generales" element={<CGV />} />

        {/* Legacy section URLs remain available client-side for old in-app links. */}
        <Route path="/services" element={<HomePage />} />
        <Route path="/consultations" element={<HomePage />} />
        <Route path="/formules" element={<HomePage />} />
        <Route path="/bienfaits" element={<HomePage />} />
        <Route path="/temoignages" element={<AvisPage />} />
        <Route path="/a-propos" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/faq" element={<HomePage />} />
        <Route path="/contact" element={<RendezVousPage />} />

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <WhatsAppFloat />
      <Analytics />
    </div>
  );
}

export default App;
