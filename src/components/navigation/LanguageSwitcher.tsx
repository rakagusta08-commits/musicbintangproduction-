'use client';

import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLang } = useLanguage();

  return (
    <button 
      onClick={toggleLang}
      className={cn(
        "font-extrabold tracking-wider text-[11px] xs:text-xs sm:text-sm transition-colors uppercase py-1 px-2 sm:px-2.5 rounded-md border border-white/25 hover:border-mustard-gold",
        "text-white/90 hover:text-mustard-gold shrink-0 cursor-pointer shadow-sm active:scale-95"
      )}
      aria-label="Toggle language"
    >
      {language}
    </button>
  );
};
