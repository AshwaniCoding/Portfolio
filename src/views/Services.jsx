import React, { useContext } from "react";
import { whatIDoServices } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="services" className="relative py-14 sm:py-18 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-zinc-200 dark:border-zinc-800">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              04 / CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase font-sans">
              What I Do
            </h2>
          </div>
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 max-w-sm">
            Scalable automation frameworks, high-throughput API testing suites, and Shift-Left quality pipelines.
          </p>
        </div>

        {/* Minimal Editorial Rows */}
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {whatIDoServices.map((service, idx) => (
            <motion.div
              key={service.number || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 px-4 -mx-4 rounded-2xl transition-colors"
            >
              {/* Number + Title */}
              <div className="lg:col-span-4 flex items-baseline gap-4">
                <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                  {service.number}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white font-sans group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 font-sans italic">
                      {service.tagline}
                    </p>
                  )}
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-sans">
                <p className="mb-4">{service.description}</p>
                {(service.deliverables || service.points) && (
                  <div className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300 font-mono">
                    {(service.deliverables || service.points || []).map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2">
                        <span className="text-zinc-400 font-bold">▸</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies / Tools */}
              <div className="lg:col-span-3 flex flex-wrap gap-2 justify-start lg:justify-end">
                {(service.tools || service.techs || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;

