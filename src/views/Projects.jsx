import React, { useContext, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Card from "../components/Card";
import { projectData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "../seoConfig";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Carousel active starting index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const categories = [
    { label: "All Suites", value: "all" },
    { label: "API & Migration", value: "API & Migration Automation" },
    { label: "Test Automation", value: "Test Automation" },
    { label: "Quality Engineering", value: "Quality Engineering" },
  ];

  const filteredProjects = filter === "all"
    ? projectData
    : projectData.filter(p => p.category === filter);

  const totalItems = filteredProjects.length;

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Infinite looping handlers
  const handlePrev = useCallback(() => {
    if (totalItems === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    if (totalItems === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === "Escape") {
          setSelectedProject(null);
        }
        return;
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, selectedProject]);

  // Compute the 3 visible items with infinite wrapping
  const getVisibleItems = () => {
    if (totalItems === 0) return [];
    if (totalItems === 1) {
      return [{ item: filteredProjects[0], isCenter: true, posKey: "center-0" }];
    }
    if (totalItems === 2) {
      return [
        { item: filteredProjects[currentIndex % totalItems], isCenter: true, posKey: "center-0" },
        { item: filteredProjects[(currentIndex + 1) % totalItems], isCenter: false, posKey: "right-1" }
      ];
    }
    
    // For 3+ items: left item (offset -1), center focal item (offset 0), right item (offset +1)
    return [
      {
        item: filteredProjects[(currentIndex - 1 + totalItems) % totalItems],
        isCenter: false,
        posKey: "left",
        scaleClass: "lg:scale-[0.96] opacity-85 hover:opacity-100 transition-all duration-300"
      },
      {
        item: filteredProjects[currentIndex % totalItems],
        isCenter: true,
        posKey: "center",
        scaleClass: "lg:scale-[1.04] z-10 shadow-2xl transition-all duration-300"
      },
      {
        item: filteredProjects[(currentIndex + 1) % totalItems],
        isCenter: false,
        posKey: "right",
        scaleClass: "lg:scale-[0.96] opacity-85 hover:opacity-100 transition-all duration-300"
      }
    ];
  };

  const visibleItems = getVisibleItems();

  return (
    <section
      id="projects"
      className="relative py-14 sm:py-18 z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with [5] indicator */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                01 / SELECTED WORK
              </span>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                [5 Cases]
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              Featured QA Automation Projects
            </h2>
            <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-xl">
              End-to-end test automation suites, API verification frameworks, and CI/CD quality gates engineered by {SITE_CONFIG.fullName}.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 active:scale-95 cursor-pointer ${
                  filter === cat.value
                    ? darkMode
                      ? "bg-white text-zinc-950 font-bold shadow-md"
                      : "bg-zinc-900 text-white font-bold shadow-md"
                    : darkMode
                    ? "bg-zinc-900/60 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800"
                    : "bg-zinc-100 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container (Hover smoothly reveals the arrow buttons) */}
        <div className="group relative mt-12 py-4">
          
          {/* Left Arrow Button (Floats smoothly on hover with spring scale) */}
          <button
            onClick={handlePrev}
            aria-label="Previous work project"
            className={`absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl max-md:opacity-100 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 active:scale-90 pointer-events-auto backdrop-blur-md ${
              darkMode
                ? "bg-zinc-900/90 border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-white hover:scale-110 shadow-black/80 ring-1 ring-white/10"
                : "bg-white/90 border-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 hover:scale-110 shadow-zinc-900/15 ring-1 ring-black/5"
            }`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 3 Visible Elements with Fluid Layout Animation */}
          <div className="w-full px-2 sm:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
              {visibleItems.map(({ item, isCenter, posKey, scaleClass }) => (
                <motion.div
                  key={`${item.name}-${posKey}`}
                  layout
                  initial={{ opacity: 0.7, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0.7, y: -8 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className={`h-full ${scaleClass || ""}`}
                >
                  <Card
                    project={item}
                    isCenter={isCenter}
                    onSelect={(proj) => setSelectedProject(proj)}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button (Floats smoothly on hover with spring scale) */}
          <button
            onClick={handleNext}
            aria-label="Next work project"
            className={`absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl max-md:opacity-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 active:scale-90 pointer-events-auto backdrop-blur-md ${
              darkMode
                ? "bg-zinc-900/90 border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:text-white hover:scale-110 shadow-black/80 ring-1 ring-white/10"
                : "bg-white/90 border-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-950 hover:scale-110 shadow-zinc-900/15 ring-1 ring-black/5"
            }`}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Minimal Pagination Indicator Dots with Fluid Spring */}
        {totalItems > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {filteredProjects.map((p, idx) => {
              const isActive = idx === (currentIndex % totalItems);
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Jump to suite ${idx + 1}: ${p.name}`}
                  className={`h-2 rounded-full transition-all duration-300 active:scale-90 cursor-pointer ${
                    isActive
                      ? darkMode
                        ? "w-8 bg-white shadow-sm ring-2 ring-white/20"
                        : "w-8 bg-zinc-900 shadow-sm ring-2 ring-zinc-900/20"
                      : darkMode
                      ? "w-2 bg-zinc-700 hover:bg-zinc-500 hover:w-3"
                      : "w-2 bg-zinc-300 hover:bg-zinc-400 hover:w-3"
                  }`}
                />
              );
            })}
          </div>
        )}

        {/* GitHub Explorer CTA Banner */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/AshwaniCoding?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-semibold transition-all duration-300 active:scale-95 border ${
              darkMode
                ? "bg-zinc-900/80 border-zinc-700 text-zinc-200 hover:bg-zinc-800 hover:border-zinc-500 shadow-sm"
                : "bg-white border-zinc-300 text-zinc-800 hover:bg-zinc-100 hover:border-zinc-400 shadow-sm"
            }`}
          >
            <span>Explore All Repositories on GitHub (AshwaniCoding)</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>

      </div>

      {/* Case Study Deep-Dive Breakdown Modal (Portaled to document.body with z-[9999]) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ type: "spring", damping: 28, stiffness: 320 }}
                  onClick={(e) => e.stopPropagation()}
                  className={`relative w-full max-w-3xl max-h-[88vh] rounded-3xl shadow-2xl p-6 sm:p-10 overflow-y-auto border ${
                    darkMode
                      ? "bg-zinc-950/95 border-zinc-800 text-zinc-100 shadow-black/80"
                      : "bg-white/95 border-zinc-200 text-zinc-900 shadow-zinc-900/20"
                  }`}
                >
                  {/* Close Button with Rotation */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 hover:rotate-90 active:scale-90 cursor-pointer"
                    aria-label="Close modal"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Header Meta */}
                  <div className="mb-4 flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Case Study Breakdown
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-3 font-sans tracking-tight">
                    {selectedProject.name}
                  </h2>

                  <div className="text-xs font-mono text-zinc-400 pb-4 mb-6 border-b border-zinc-200 dark:border-zinc-800">
                    Engineered & Architected by <strong className="text-zinc-700 dark:text-zinc-200">{SITE_CONFIG.fullName}</strong> &bull; QA Automation
                  </div>

                  {/* Modal Content Sections */}
                  <div className="space-y-6 text-sm font-sans">
                    
                    {/* Overview */}
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                        Project Overview
                      </h4>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {selectedProject.caseStudy?.overview || selectedProject.desc}
                      </p>
                    </div>

                    {/* Challenge Addressed */}
                    {selectedProject.problemSolved && (
                      <div className="p-4 sm:p-5 rounded-2xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-950/20 transition-all duration-200 hover:border-rose-500/30">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-1.5 flex items-center gap-1.5">
                          <span>⚡</span>
                          <span>Challenge Addressed</span>
                        </h4>
                        <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {selectedProject.problemSolved}
                        </p>
                      </div>
                    )}

                    {/* Engineering Contribution */}
                    {selectedProject.contribution && (
                      <div className="p-4 sm:p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 transition-all duration-200 hover:border-emerald-500/30">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1.5 flex items-center gap-1.5">
                          <span>🎯</span>
                          <span>Engineering Contribution</span>
                        </h4>
                        <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
                          {selectedProject.contribution}
                        </p>
                      </div>
                    )}

                    {/* Architecture & Design Pattern */}
                    {selectedProject.architecture && (
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                          Test Architecture & Flow
                        </h4>
                        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                          {selectedProject.architecture}
                        </div>
                      </div>
                    )}

                    {/* Verified Metrics */}
                    {selectedProject.metrics && (
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                          Stability & Verification Metrics
                        </h4>
                        <div className="p-3.5 rounded-xl border border-sky-500/20 bg-sky-500/5 dark:bg-sky-950/20 font-mono text-xs text-sky-800 dark:text-sky-300">
                          {selectedProject.metrics}
                        </div>
                      </div>
                    )}

                    {/* Key Validations Covered */}
                    {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5">
                          Key Test Validations Covered
                        </h4>
                        <ul className="space-y-2">
                          {selectedProject.keyFeatures.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                              <span className="text-emerald-500 font-bold mt-0.5">▸</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack & Tooling */}
                    {selectedProject.tags && (
                      <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2.5">
                          Technologies & Libraries
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 transition-all duration-150 hover:scale-105"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Modal Footer */}
                  <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between flex-wrap gap-4">
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-900 dark:text-white hover:underline transition-all"
                    >
                      <span>Explore Repository on GitHub</span>
                      <span>↗</span>
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-mono font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
                    >
                      Close Breakdown
                    </button>
                  </div>

                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

    </section>
  );
};

export default Projects;
