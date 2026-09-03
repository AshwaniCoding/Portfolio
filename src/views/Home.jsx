import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { Link } from "react-scroll";
import { SITE_CONFIG } from "../seoConfig";
import AshwaniPortrait from "../components/AshwaniPortrait";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 z-10 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* ========================================================================= */}
        {/* HERO STAGE (Directly Matches Reference Mockup image.png + IMG_5107.PNG) */}
        {/* ========================================================================= */}
        <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-white/90 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 shadow-[0_15px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-6 sm:px-10 lg:px-12 mb-8 sm:mb-12">
          {/* Giant Background Typography: "ASHWANI DWIVEDI" */}
          <div className="w-full text-center select-none pointer-events-none mb-2 sm:mb-4">
            <h1 className="flex items-center justify-center flex-wrap gap-x-4 sm:gap-x-8 md:gap-x-12 tracking-tighter uppercase font-sans font-black leading-none">
              {/* Outlined / Stroked First Name */}
              <span
                className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] transition-all duration-300 ${
                  darkMode ? "text-stroke-hero-dark" : "text-stroke-hero-light"
                }`}
              >
                ASHWANI
              </span>
              {/* Solid Filled Last Name */}
              <span
                className={`text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-zinc-950"
                }`}
              >
                DWIVEDI
              </span>
            </h1>
          </div>

          {/* Foreground Grid: Bottom Left Content + Center Portrait + Bottom Right Pill Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative z-10 mt-2 sm:mt-4">
            {/* Bottom Left: Role Title, Punchy Description & CTA Button */}
            <div className="md:col-span-4 space-y-3 sm:space-y-4 pb-2 text-center md:text-left order-2 md:order-1">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white font-sans tracking-tight leading-tight">
                  QA Automation Engineer &amp; SDET
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed max-w-sm mx-auto md:mx-0">
                  Architecting automated test frameworks that are deterministic, resilient, and shift-left focused.
                </p>
              </div>

              {/* Let's Collaborate CTA (Matches Mockup) */}
              <div className="pt-2">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer shadow-md hover:scale-[1.03] active:scale-[0.98] ${
                    darkMode
                      ? "bg-white text-zinc-950 hover:bg-zinc-200"
                      : "bg-zinc-950 text-white hover:bg-zinc-800"
                  }`}
                >
                  <span>Let's collaborate</span>
                  <span className="text-xs">↗</span>
                </Link>
              </div>
            </div>

            {/* Center: Cutout Portrait (From IMG_5107.PNG) */}
            <div className="md:col-span-4 flex items-end justify-center order-1 md:order-2 -mb-6 sm:-mb-8">
              <AshwaniPortrait
                darkMode={darkMode}
                className="w-[240px] sm:w-[290px] md:w-[320px] lg:w-[360px] max-w-full h-auto"
              />
            </div>

            {/* Bottom Right: Vertical Stack of White Pill Buttons with Icons (Matches Mockup) */}
            <div className="md:col-span-4 flex flex-col items-center md:items-end space-y-2.5 pb-2 order-3">
              <a
                href={SITE_CONFIG.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full max-w-[210px] px-4 py-2.5 rounded-full border text-xs font-sans font-medium flex items-center justify-between transition-all duration-200 shadow-sm hover:scale-[1.02] ${
                  darkMode
                    ? "bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700"
                    : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub</span>
                </div>
                <span className="text-zinc-400 font-mono text-[11px]">@AshwaniCoding</span>
              </a>

              <a
                href={SITE_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full max-w-[210px] px-4 py-2.5 rounded-full border text-xs font-sans font-medium flex items-center justify-between transition-all duration-200 shadow-sm hover:scale-[1.02] ${
                  darkMode
                    ? "bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700"
                    : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </div>
                <span className="text-[10px] text-zinc-400">↗</span>
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`w-full max-w-[210px] px-4 py-2.5 rounded-full border text-xs font-sans font-medium flex items-center justify-between transition-all duration-200 shadow-sm hover:scale-[1.02] cursor-pointer ${
                  darkMode
                    ? "bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700"
                    : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </div>
                <span className="text-[10px] text-zinc-400">↓</span>
              </Link>

              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full max-w-[210px] px-4 py-2.5 rounded-full border text-xs font-sans font-medium flex items-center justify-between transition-all duration-200 shadow-sm hover:scale-[1.02] ${
                  darkMode
                    ? "bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700"
                    : "bg-white border-zinc-200 text-zinc-800 hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Resume PDF</span>
                </div>
                <span className="text-[10px] text-zinc-400">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

