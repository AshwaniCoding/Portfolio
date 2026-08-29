import React, { useContext, useState } from "react";
import { techCategories, educationData, certificationsData } from "../constants";
import { SITE_CONFIG } from "../seoConfig";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const philosophyItems = [
  {
    num: "01",
    title: "Shift-Left Quality Gates",
    desc: "Integrating automated test execution directly into developer pull requests and pre-merge pipelines rather than relying on delayed end-of-cycle manual verification.",
    badge: "CI/CD Gates"
  },
  {
    num: "02",
    title: "Test Pyramid Equilibrium",
    desc: "Architecting balanced suites with ultra-fast API and contract validation handling business logic, reserving browser-driven UI tests for critical end-to-end user journeys.",
    badge: "Pyramid Strategy"
  },
  {
    num: "03",
    title: "Flakiness Root-Cause Elimination",
    desc: "Employing auto-waiting locators, web-first assertions, network request interceptions, and isolated worker states to maintain 99.8%+ test suite trust.",
    badge: "Zero-Flake SLA"
  },
  {
    num: "04",
    title: "REST-to-GraphQL Parity",
    desc: "Validating complex schema evolutions, query & mutation payloads, and backend request transformations with 100% data consistency.",
    badge: "Migration Rigor"
  }
];

const workflowSteps = [
  {
    step: "01",
    phase: "Plan & Matrix",
    title: "Scenario & Acceptance Mapping",
    desc: "Deconstruct product requirements into Gherkin BDD specs and risk-weighted test matrices."
  },
  {
    step: "02",
    phase: "Architecture",
    title: "Modular Framework Design",
    desc: "Apply Page Object Models, reusable fixtures, custom assertions, and isolated data managers."
  },
  {
    step: "03",
    phase: "Execution",
    title: "Parallel & Headless Runs",
    desc: "Execute multi-threaded test runs across Chromium, Firefox, WebKit, and mobile viewports."
  },
  {
    step: "04",
    phase: "Gateways",
    title: "CI/CD Pipeline Integration",
    desc: "Enforce automated quality gates on GitLab CI/CD and Jenkins to block breaking commits before merge."
  },
  {
    step: "05",
    phase: "Observability",
    title: "Telemetry & Live Reporting",
    desc: "Publish rich Allure dashboards, video artifacts, AWS CloudWatch logs, and root-cause summaries."
  }
];

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="about" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. Identity & Core Philosophy */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                03 / ABOUT & EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Quality Engineering Rigor
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
              &quot;Quality isn&apos;t a final step. It&apos;s part of the engineering process.&quot;
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Bio Card */}
            <div className="lg:col-span-6 flex flex-col justify-between p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                    Professional Identity
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {SITE_CONFIG.experienceStats?.yearsText || "1.7 Years"} QA Experience
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {SITE_CONFIG.fullName}
                </h3>
                <div className="space-y-3.5 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                  <p>
                    Serving as a <strong>QA Automation Engineer at UST</strong> with <strong>{SITE_CONFIG.experienceStats?.yearsText || "1.7 years"} of experience</strong>, Ashwani specializes in architecting API automation frameworks and end-to-end quality solutions.
                  </p>
                  <p>
                    He designs deterministic test suites across <strong>Playwright (TypeScript)</strong>, <strong>GraphQL & REST API automation</strong> (using <strong>Bruno</strong>, <strong>Postman</strong>, and <strong>REST Assured</strong>), <strong>Selenium WebDriver</strong>, and <strong>Cucumber BDD</strong> with TestNG.
                  </p>
                  <p>
                    Known as <strong>{SITE_CONFIG.brandName}</strong> across open-source communities and technical platforms (<code>@AshwaniCoding</code>).
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span>QA Automation Engineer &bull; UST</span>
                <span>India &bull; {SITE_CONFIG.experienceStats?.yrsExp || "1.7 Yrs Exp"}</span>
              </div>
            </div>

            {/* 4 Pillars of Quality */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-zinc-400">
                        {item.num}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. Testing Workflow / QA Lifecycle */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                03 / SYSTEMATIC METHODOLOGY
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Automated Testing Lifecycle
              </h3>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
              End-to-end testing pipeline from initial test matrix design to automated deployment gates.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-mono font-black text-zinc-300 dark:text-zinc-700">
                      {ws.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                      {ws.phase}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 leading-snug">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. Professional Experience (UST - 1.7 Years) */}
        {/* ========================================================================= */}
        <div id="experience">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                04 / WORK HISTORY
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Professional Experience
              </h3>
            </div>
            <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
              {SITE_CONFIG.experienceStats?.yearsText || "1.7 years"} of enterprise software test automation and quality engineering at scale.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {SITE_CONFIG.experience.map((exp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-5 mb-5 border-b border-zinc-100 dark:border-zinc-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-zinc-700 dark:text-zinc-300 mt-1">
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

        {/* ========================================================================= */}
        {/* Education & Certifications (From Resume) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                05 / CREDENTIALS
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

        {/* ========================================================================= */}
        {/* 4. Tech Arsenal & Skills Matrix */}
        {/* ========================================================================= */}
        <div id="skills">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                06 / TECHNICAL ARSENAL
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
                Skills & Technologies
              </h3>
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
                    <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {cat.category}
                    </h4>
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
                          <h5 className="text-xs font-semibold text-zinc-900 dark:text-white truncate font-sans">
                            {skill.name}
                          </h5>
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

      </div>
    </section>
  );
};

export default About;

