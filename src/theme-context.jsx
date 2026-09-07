import { createContext, useContext } from 'react';

export const ThemeContext = createContext(null);

export function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem('portfolio-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return 'dark';
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}
