// widgets/header/model/ThemeContext.tsx
'use client';

import { createContext, useState, useEffect } from 'react';
import { Theme, THEMES } from '@/shared/config/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(THEMES.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(savedTheme || (systemPrefersDark ? THEMES.dark : THEMES.light));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === THEMES.dark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === THEMES.light ? THEMES.dark : THEMES.light));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
