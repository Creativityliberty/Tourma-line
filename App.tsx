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
import { About } from "./src/components/sections/About";
import { FAQ } from "./src/components/sections/FAQ";
import { Contact } from "./src/components/sections/Contact";

// Service Pages (SEO — URLs dédiées)
import { NumerologiePage } from "./src/pages/NumerologiePage";
import { CartomancePage } from "./src/pages/CartomancePage";
import { LahochiPage } from "./src/pages/LahochiPage";
import { CityPage } from "./src/pages/CityPage";
import { CityLinks } from "./src/components/sections/CityLinks";
import { WhatsAppFloat } from "./src/components/ui/WhatsAppFloat";
import { allCities } from "./src/data/cities";

// Legal Pages
import { MentionsLegales } from "./src/pages/MentionsLegales";
import { PolitiqueConfidentialite } from "./src/pages/PolitiqueConfidentialite";
import { CGV } from "./src/pages/CGV";

import "./src/index.css";

/**
 * Handles automatic scrolling to sections based on URL path
 */
const SectionScroller = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const pathMap: Record<string, string> = {
      "/": "accueil",
      "/services": "services",
      "/consultations": "consultations",
      "/formules": "formules",
      "/bienfaits": "bienfaits",
      "/avis": "avis",
      "/temoignages": "avis",
      "/a-propos": "a-propos",
      "/about": "a-propos",
      "/faq": "faq",
      "/contact": "rendezvous",
      "/rendezvous": "rendezvous"
    };

    const targetId = pathMap[pathname] || (hash ? hash.substring(1) : null);

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
      <Welcome />
      <div id="services">
        <Services activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <Consultations />
      <Formules />
      <Benefits />
      <Process />
      <CityLinks />
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
        <Route path="/numerologie" element={<NumerologiePage />} />
        <Route path="/cartomancie" element={<CartomancePage />} />
        <Route path="/soin-lahochi" element={<LahochiPage />} />

        {/* Pages SEO villes */}
        {allCities.flatMap((city) => [
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

        {/* Legal Pages */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/conditions-generales" element={<CGV />} />

        {/* Fallback */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      <WhatsAppFloat />
      <Analytics />
    </div>
  );
}

export default App;
