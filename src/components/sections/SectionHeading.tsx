import { cn } from '@/lib/utils';

export const SectionHeading = ({ 
  title, 
  subtitle, 
  className 
}: { 
  title: string; 
  subtitle?: string; 
  className?: string; 
}) => {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {subtitle && (
        <span className="block text-mustard-gold font-bold tracking-widest uppercase text-sm mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dark-slate font-bold">
        {title}
      </h2>
    </div>
  );
};