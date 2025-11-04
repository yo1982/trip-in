import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language, LanguageContextType } from '../types';
import { translations as allTranslations } from '../constants/translations';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguageHandler = (lang: Language) => {
    setLanguage(lang);
  };
  
  const translations = allTranslations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageHandler, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
