import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { Squash as Hamburger } from "hamburger-react";
import { SITE_CONFIG } from "../seoConfig";
import AshwaniAvatar from "./AshwaniAvatar";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work [5]", to: "projects" },
    { label: `Experience [${SITE_CONFIG.experienceStats?.yrsExp || "1.7 Yrs"}]`, to: "experience" },
    { label: "Skills", to: "skills" },
    { label: "Services [6]", to: "services" },
    { label: "Articles [3]", to: "articles" },
    { label: "Contact", to: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full px-3.5 sm:px-5 py-2 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-zinc-950/85 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/40"
              : "bg-white/90 backdrop-blur-xl border border-zinc-200/80 shadow-md shadow-zinc-900/5"
            : darkMode
            ? "bg-zinc-900/60 backdrop-blur-md border border-zinc-800/60"
            : "bg-white/80 backdrop-blur-md border border-zinc-200/60 shadow-sm"
        }`}
      >
        {/* Left: Cartoon Logo + Available for New Project Pill */}
        <div className="flex items-center gap-2.5">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer group"
            title="Ashwani Dwivedi"
          >
            <AshwaniAvatar size="w-7 h-7" className="group-hover:scale-105 transition-transform" />
            <span className="text-xs font-bold font-sans tracking-tight text-zinc-900 dark:text-white hidden lg:inline">
              Ashwani
            </span>
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
              darkMode
                ? "bg-zinc-900 border border-zinc-800 text-zinc-200 hover:border-zinc-700"
                : "bg-white border border-zinc-200/80 text-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-zinc-300"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden xs:inline sm:inline">Available for New Project</span>
            <span className="xs:hidden sm:hidden">Available</span>
          </Link>
        </div>

        {/* Center: Editorial Nav Links with [Counts] (Matches image.png) */}
        <nav className="hidden md:flex items-center gap-1 font-sans text-xs font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="!text-zinc-950 dark:!text-white !font-bold"
              className="px-3.5 py-1.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Theme Toggle + Let's Talk ↗ Button (Matches image.png) */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              theme.dispatch({ type: "TOGGLE" });
            }}
            aria-label="Toggle Theme"
            className={`p-2 rounded-full border transition-all duration-200 active:scale-90 cursor-pointer ${
              darkMode
                ? "bg-zinc-800 border-zinc-700 text-yellow-400 hover:bg-zinc-700"
                : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200"
            }`}
          >
            {darkMode ? (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Let's Talk CTA Pill (Black pill button) */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`inline-flex items-center gap-1 px-4 sm:px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer shadow-sm ${
              darkMode
                ? "bg-white text-zinc-950 hover:bg-zinc-200"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
          >
            <span>Let's Talk</span>
            <span className="text-[11px] transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={18}
              color={darkMode ? "#ffffff" : "#18181b"}
              label="Toggle navigation menu"
            />
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className={`lg:hidden mt-2 max-w-6xl mx-auto rounded-2xl p-5 border shadow-2xl transition-all ${
            darkMode
              ? "bg-zinc-900/95 border-zinc-800 backdrop-blur-2xl text-zinc-100"
              : "bg-white/95 border-zinc-200 backdrop-blur-2xl text-zinc-900"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-zinc-200 dark:border-zinc-800">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className={`w-full py-2.5 rounded-xl flex items-center justify-center gap-1 text-xs font-semibold cursor-pointer ${
                  darkMode ? "bg-white text-zinc-950" : "bg-zinc-900 text-white"
                }`}
              >
                <span>Let's Talk</span>
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
