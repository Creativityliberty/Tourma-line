import { Analytics } from "@vercel/analytics/react";
import React, { useState } from "react";

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

function App() {
  const [activeTab, setActiveTab] = useState("numerology");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="App min-h-screen bg-white">
      <Header onNavClick={handleNavClick} />
      <Hero onNavClick={handleNavClick} />
      <Welcome />
      <Services activeTab={activeTab} setActiveTab={setActiveTab} />
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
