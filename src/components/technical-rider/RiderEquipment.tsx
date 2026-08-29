import { Equipment } from '@/types';

export const RiderEquipment = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <div className="mb-12">
      <h3 className="font-display text-2xl font-bold text-dark-slate mb-6 border-b pb-2">
        RIDERS / ALAT-ALAT BAND
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {equipments.map((eq, i) => (
          <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg print:bg-transparent print:p-0 print:mb-2 border border-transparent print:border-none">
            <span className="w-8 h-8 rounded-full bg-mustard-gold/10 text-mustard-gold flex items-center justify-center font-bold text-sm print:hidden">
              {eq.quantity}
            </span>
            <span className="hidden print:inline-block font-bold min-w-[2ch]">
              {eq.quantity}x
            </span>
            <span className="font-medium text-dark-slate">{eq.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
