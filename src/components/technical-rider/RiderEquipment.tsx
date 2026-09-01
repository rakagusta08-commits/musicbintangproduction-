import { Equipment } from '@/types';

export const RiderEquipment = ({ equipments }: { equipments: Equipment[] }) => {
  return (
    <div className="mb-6 sm:mb-12">
      <h3 className="font-display text-lg sm:text-2xl font-bold text-dark-slate mb-4 sm:mb-6 border-b pb-2">
        RIDERS / ALAT-ALAT BAND
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
        {equipments.map((eq, i) => (
          <li key={i} className="flex items-center gap-3 p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-100">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-mustard-gold/15 text-mustard-gold flex items-center justify-center font-bold text-xs sm:text-sm shrink-0">
              {eq.quantity}
            </span>
            <span className="font-medium text-dark-slate text-xs sm:text-sm">{eq.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
