'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLang } = useLanguage();

  return (
    <button 
      onClick={toggleLang}
      className={cn(
        "font-bold tracking-wider text-[10px] xs:text-xs sm:text-sm transition-colors uppercase py-0.5 px-1.5 sm:px-2 rounded border border-white/20 hover:border-mustard-gold",
        "text-white/90 hover:text-mustard-gold shrink-0 cursor-pointer"
      )}
      aria-label="Toggle language"
    >
      {language}
    </button>
  );
};
