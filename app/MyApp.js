"use client";

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeProvider";

export function MyApp({ children }) {
  const { state } = useTheme();

  //Adding/removing dark class
  useEffect(() => {
    console.log("Theme changed to:", state.theme);
    switch (state.theme) {
      case "dark":
        console.log("Adding dark mode class...");
        document.documentElement.classList.add("dark");
        break;

      case "light":
        console.log("Removing dark mode class...");
        document.documentElement.classList.remove("dark");
        break;
    }
  }, [state.theme]);

  return <div className=" flex-col m-auto mb-10">{children}</div>;
}

export default ({ children }) => (
  <ThemeProvider>
    <MyApp>{children}</MyApp>
  </ThemeProvider>
);
