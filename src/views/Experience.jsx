import React, { useContext } from "react";
import { SITE_CONFIG } from "../seoConfig";
import { ThemeContext } from "../themeProvider";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="experience" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                02 / WORK HISTORY
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                [{SITE_CONFIG.experienceStats?.yrsExp || "1.7 Yrs Exp"}]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
            {SITE_CONFIG.experienceStats?.yearsText || "1.7 years"} of enterprise software test automation and quality engineering at scale.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-8 space-y-6">
          {SITE_CONFIG.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 mb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-sans">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {exp.type}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-zinc-700 dark:text-zinc-300 mt-1 font-sans">
                    {exp.company}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
                  {exp.period} &bull; {exp.location}
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 font-sans">
                {exp.description}
              </p>

              <div className="space-y-2.5 mb-6">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 block">
                  Core Technical Responsibilities & Key Contributions:
                </span>
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans">
                    <span className="text-zinc-400 mr-2.5 font-mono">▸</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
