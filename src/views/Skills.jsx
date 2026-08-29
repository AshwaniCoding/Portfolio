import React, { useContext, useState } from "react";
import { techCategories, educationData, certificationsData } from "../constants";
import { ThemeContext } from "../themeProvider";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. Tech Arsenal & Skills Matrix */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                03 / TECHNICAL ARSENAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Skills & Technologies
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? darkMode
                      ? "bg-white text-zinc-950 font-bold"
                      : "bg-zinc-900 text-white font-bold"
                    : darkMode
                    ? "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900"
                }`}
              >
                All
              </button>
              {techCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat.category)}
                  className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeCategory === cat.category
                      ? darkMode
                        ? "bg-white text-zinc-950 font-bold"
                        : "bg-zinc-900 text-white font-bold"
                      : darkMode
                      ? "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                      : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-10">
            {techCategories
              .filter(
                (cat) => activeCategory === "all" || activeCategory === cat.category
              )
              .map((cat, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {cat.category}
                    </h3>
                    <div className="flex-1 h-px bg-zinc-200 dark:border-zinc-800" />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex items-center gap-3 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all"
                      >
                        <div className="w-8 h-8 p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-200 dark:border-zinc-700/60">
                          <img
                            alt={skill.name}
                            src={skill.link}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-semibold text-zinc-900 dark:text-white truncate font-sans">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. Education & Certifications */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                03.1 / CREDENTIALS
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Education & Certifications
              </h3>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
              Academic foundation in computer science and verified industry certifications.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education Column */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Academic Degrees
              </h4>
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-base font-bold text-zinc-900 dark:text-white">
                      {edu.degree}
                    </h5>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold flex-shrink-0">
                      {edu.grade}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {edu.institution} &bull; {edu.period}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Column */}
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Industry Certifications
              </h4>
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="text-sm font-bold text-zinc-900 dark:text-white">
                        {cert.title}
                      </h5>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {cert.date}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      Issuer: <strong className="text-zinc-700 dark:text-zinc-300">{cert.issuer}</strong>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans">
                      Key Competency: {cert.skill}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
