"use client";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
      <button
        onClick={() => {
          console.log("ThemeSwitcher button clicked");
          toggleTheme();
        }}
        className="ak-scrollup ak-theme-switcher bg-transparent rounded-md cursor-pointer transition"
        aria-label="Toggle theme"
        type="button"
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>
  );
}