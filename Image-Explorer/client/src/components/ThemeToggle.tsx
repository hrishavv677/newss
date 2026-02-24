import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check if user previously set dark mode or prefers it
    const isDark = 
      localStorage.getItem("theme") === "dark" || 
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
      
    if (isDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full w-14 h-14 border-4 border-foreground/10 bg-card hover:bg-muted shadow-[0_4px_0_0_hsl(var(--foreground)/0.1)] active:translate-y-1 active:shadow-none transition-all cursor-pointer z-50"
      data-testid="button-theme-toggle"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <Moon className="h-7 w-7 text-primary" />
      ) : (
        <Sun className="h-7 w-7 text-secondary" />
      )}
    </button>
  );
}