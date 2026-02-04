import { Analytics } from "@vercel/analytics/react";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
import { Testimonials } from "./src/components/sections/Testimonials";
import { About } from "./src/components/sections/About";
import { FAQ } from "./src/components/sections/FAQ";
import { Contact } from "./src/components/sections/Contact";

import "./src/index.css";

/**
 * Component that handles automatic scrolling to sections based on the URL path
 */
const SectionScroller = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Map paths to section IDs
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

function App() {
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
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
