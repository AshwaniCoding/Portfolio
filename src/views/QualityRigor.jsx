import React, { useContext } from "react";
import { SITE_CONFIG } from "../seoConfig";
import { ThemeContext } from "../themeProvider";

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

const QualityRigor = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="quality-rigor" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              05 / QUALITY PRINCIPLES
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
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-sans">
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
              <span>Trivandrum, Kerala &bull; {SITE_CONFIG.experienceStats?.yrsExp || "1.7 Yrs Exp"}</span>
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
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2 font-sans">
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
    </section>
  );
};

export default QualityRigor;
