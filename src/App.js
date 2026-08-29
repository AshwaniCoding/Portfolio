import React, { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Services from "./views/Services";
import QualityRigor from "./views/QualityRigor";
import TestingLifecycle from "./views/TestingLifecycle";
import Articles from "./views/Articles";
import CloudBackground from "./components/CloudBackground";
import { ThemeProvider } from "./themeProvider";
import { animateScroll as scroll } from "react-scroll";
import { SITE_CONFIG } from "./seoConfig";

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    // Dynamic SEO metadata synchronization based on real-time calculated experience
    if (SITE_CONFIG.title) {
      document.title = SITE_CONFIG.title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && SITE_CONFIG.metaDescription) {
      metaDesc.setAttribute("content", SITE_CONFIG.metaDescription);
    }
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen relative font-sans antialiased selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950 overflow-x-hidden">
        <CloudBackground />
        <Navbar />
        <main className="relative z-10">
          <Home />
          <Projects />
          <Experience />
          <Skills />
          <Services />
          <QualityRigor />
          <TestingLifecycle />
          <Articles />
        </main>
        <Contact />

        {/* Back to Top Floating Action Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-xl transition-all hover:scale-110 active:scale-95 cursor-pointer border border-zinc-700/40 dark:border-zinc-300/40"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

