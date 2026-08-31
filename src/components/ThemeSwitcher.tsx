"use client";

import { useEffect, useState } from "react";
import { Palette, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
  { id: "purple", label: "Deep Purple", color: "#9e007c" },
  { id: "blue", label: "Midnight Blue", color: "#378cee" },
  { id: "gold", label: "Classic Gold", color: "#c9a24b" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("purple");
  const [mode, setMode] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "purple";
    const savedMode = localStorage.getItem("mode") || "dark";
    setActiveTheme(savedTheme);
    setMode(savedMode);
    document.documentElement.setAttribute("data-theme", savedTheme);
    document.documentElement.setAttribute("data-mode", savedMode);
  }, []);

  const switchTheme = (themeId: string) => {
    setActiveTheme(themeId);
    localStorage.setItem("theme", themeId);
    document.documentElement.setAttribute("data-theme", themeId);
  };

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.documentElement.setAttribute("data-mode", newMode);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full right-0 mb-4 flex flex-col gap-2 rounded-2xl border border-line bg-surface/90 p-3 backdrop-blur-md shadow-2xl min-w-[200px]"
            >
              <div className="flex flex-col gap-1 mb-2 border-b border-line pb-2">
                <span className="px-2 text-[10px] font-bold text-muted uppercase tracking-wider mb-1">Accent Color</span>
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => switchTheme(theme.id)}
                    className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                      activeTheme === theme.id
                        ? "bg-foreground/10 text-foreground"
                        : "text-muted hover:bg-foreground/5 hover:text-foreground"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-4 w-4 rounded-full border border-black/20 shadow-inner"
                        style={{ backgroundColor: theme.color }}
                      />
                      <span className="whitespace-nowrap">{theme.label}</span>
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <span className="px-2 text-[10px] font-bold text-muted uppercase tracking-wider mb-1">Appearance</span>
                <button
                  onClick={toggleMode}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors text-muted hover:bg-foreground/5 hover:text-foreground"
                >
                  {mode === "dark" ? (
                    <>
                      <Sun className="h-4 w-4" />
                      <span className="whitespace-nowrap">Switch to Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-4 w-4" />
                      <span className="whitespace-nowrap">Switch to Dark</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface/90 text-foreground backdrop-blur-md transition-all hover:scale-105 hover:bg-foreground/5 hover:text-gold shadow-lg"
          aria-label="Toggle color theme"
        >
          <Palette className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
