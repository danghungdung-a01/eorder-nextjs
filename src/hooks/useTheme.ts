"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Hàm áp dụng theme
  const applyTheme = (newTheme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Khởi tạo theme từ localStorage hoặc system
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    if (saved) {
      applyTheme(saved);
    } else {
      // Nếu chưa có => theo system (mặc định)
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Toggle
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    applyTheme(next);
  };

  return { theme, toggleTheme };
}