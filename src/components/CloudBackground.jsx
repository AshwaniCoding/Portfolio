import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const CloudBackground = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Base Canvas Tones */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          darkMode ? "bg-[#0c0c0e]" : "bg-[#fbfbfb]"
        }`}
      />

      {/* Primary Cloud / Fog Layer 1 */}
      <div
        className={`absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-[100px] animate-fog-slow transition-opacity duration-700 ${
          darkMode
            ? "bg-zinc-800/20 mix-blend-screen"
            : "bg-slate-300/35 mix-blend-multiply"
        }`}
      />

      {/* Secondary Cloud / Fog Layer 2 */}
      <div
        className={`absolute top-[35%] -right-[15%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full blur-[110px] animate-fog-reverse transition-opacity duration-700 ${
          darkMode
            ? "bg-zinc-800/25 mix-blend-screen"
            : "bg-zinc-300/40 mix-blend-multiply"
        }`}
      />

      {/* Tertiary Cloud Layer 3 for Center Subtle Ambience */}
      <div
        className={`absolute bottom-[10%] left-[20%] w-[55vw] h-[55vw] max-w-[750px] max-h-[750px] rounded-full blur-[90px] animate-fog-slow transition-opacity duration-700 ${
          darkMode
            ? "bg-neutral-800/15 mix-blend-screen"
            : "bg-slate-200/50 mix-blend-multiply"
        }`}
      />

      {/* Ultra Subtle Editorial Grain / Dust Overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] dark:opacity-[0.035] pointer-events-none">
        <filter id="editorialNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#editorialNoise)" />
      </svg>
    </div>
  );
};

export default CloudBackground;
