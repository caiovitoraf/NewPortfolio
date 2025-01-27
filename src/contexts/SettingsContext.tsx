import React, { createContext, useContext, useEffect, useState } from 'react';
import enTranslations from '../i18n/en.json';
import ptTranslations from '../i18n/pt.json';

type Language = 'en' | 'pt';
type Theme = 'light' | 'dark';

interface SettingsContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: React.ReactNode }) => {
  // Get system preferences
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en';

  // Initialize state with system preferences
  const [language, setLanguage] = useState<Language>(systemLanguage);
  const [theme, setTheme] = useState<Theme>(prefersDark ? 'dark' : 'light');

  // Apply theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Translation function
  const t = (key: string): string => {
    const translations = language === 'en' ? enTranslations : ptTranslations;
    return key.split('.').reduce((obj, k) => obj?.[k], translations as any) || key;
  };

  return (
    <SettingsContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};