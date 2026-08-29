import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Card = ({ project, onSelect, isCenter = false }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const {
    name,
    category,
    desc,
    url,
    tags
  } = project;

  return (
    <div
      className={`group h-full p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 transform-gpu ${
        isCenter
          ? darkMode
            ? "border-2 border-zinc-500 bg-zinc-900 shadow-2xl shadow-black/80 ring-1 ring-white/15 scale-[1.02] sm:scale-[1.03]"
            : "border-2 border-zinc-400 bg-white shadow-2xl shadow-zinc-900/15 ring-1 ring-zinc-900/10 scale-[1.02] sm:scale-[1.03]"
          : darkMode
          ? "border border-zinc-800/90 bg-zinc-900/60 backdrop-blur-xl hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50 shadow-sm"
          : "border border-zinc-200/90 bg-white/70 backdrop-blur-xl hover:border-zinc-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/10 shadow-sm"
      }`}
    >
      <div className="flex-1 flex flex-col">
        {/* Top Meta: Category Badge & Pill */}
        <div className="flex items-center justify-between text-xs font-mono mb-4 gap-2">
          <span
            className={`px-2.5 py-0.5 rounded-full font-semibold truncate max-w-[200px] transition-colors duration-200 ${
              isCenter
                ? darkMode
                  ? "bg-zinc-800 text-white border border-zinc-700 shadow-sm"
                  : "bg-zinc-900 text-white shadow-sm"
                : darkMode
                ? "bg-zinc-800/80 text-zinc-300 group-hover:bg-zinc-800 group-hover:text-white"
                : "bg-zinc-100 text-zinc-700 group-hover:bg-zinc-200 group-hover:text-zinc-950"
            }`}
          >
            {category}
          </span>
          <span className={`text-[11px] font-mono whitespace-nowrap flex items-center gap-1.5 ${
            isCenter ? "text-amber-500 dark:text-amber-400 font-semibold" : "text-zinc-400"
          }`}>
            {isCenter ? (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse inline-block" />
                <span>Featured Suite</span>
              </>
            ) : (
              <span>QA Suite</span>
            )}
          </span>
        </div>

        {/* Project Title */}
        <h3
          className={`text-lg font-bold mb-3 leading-snug font-sans min-h-[3.5rem] flex items-start transition-colors duration-200 ${
            isCenter
              ? "text-zinc-950 dark:text-white"
              : "text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
          }`}
        >
          {name}
        </h3>

        {/* Narrative Description */}
        <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-5 font-sans flex-1">
          {desc}
        </p>

        {/* Tech Stack Pills */}
        {tags && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {tags.slice(0, 4).map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 transition-all duration-150 hover:scale-105 hover:border-zinc-400 dark:hover:border-zinc-500"
              >
                {t}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                +{tags.length - 4} more
              </span>
            )}
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between mt-auto">
        <button
          onClick={() => onSelect(project)}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
            isCenter
              ? darkMode
                ? "bg-white text-zinc-950 hover:bg-zinc-200 shadow-md font-bold"
                : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-md font-bold"
              : darkMode
              ? "bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white"
              : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
          }`}
        >
          <span>View Breakdown</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200 flex items-center gap-1 hover:underline"
        >
          <span>GitHub</span>
          <span className="text-[10px] transition-transform duration-200 hover:translate-x-0.5 hover:-translate-y-0.5">↗</span>
        </a>
      </div>
    </div>
  );
};

export default Card;
