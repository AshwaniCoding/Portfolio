import React, { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("theme_mode");
    if (saved) return { darkMode: saved === "dark" };
    return { darkMode: true };
  }
  return { darkMode: true };
};

const initialState = getInitialTheme();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      if (typeof window !== "undefined") localStorage.setItem("theme_mode", "light");
      return { darkMode: false };
    case "DARKMODE":
      if (typeof window !== "undefined") localStorage.setItem("theme_mode", "dark");
      return { darkMode: true };
    case "TOGGLE":
      const next = !state.darkMode;
      if (typeof window !== "undefined") localStorage.setItem("theme_mode", next ? "dark" : "light");
      return { darkMode: next };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
