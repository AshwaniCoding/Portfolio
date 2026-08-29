import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

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

const TestingLifecycle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="testing-lifecycle" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              06 / SYSTEMATIC METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              Automated Testing Lifecycle
            </h2>
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
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-2 leading-snug font-sans">
                  {ws.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                  {ws.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestingLifecycle;
