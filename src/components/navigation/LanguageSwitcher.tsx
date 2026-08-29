'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLang } = useLanguage();

  return (
    <button 
      onClick={toggleLang}
      className={cn(
        "font-bold tracking-widest text-sm transition-colors uppercase",
        "text-pure-white/80 hover:text-mustard-gold"
      )}
      aria-label="Toggle language"
    >
      {language}
    </button>
  );
};