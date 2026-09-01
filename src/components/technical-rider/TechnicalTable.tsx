import { TechnicalRiderChannel, MonitorOutput } from '@/types';

export const TechnicalTable = ({ 
  title, 
  data, 
  type 
}: { 
  title: string; 
  data: TechnicalRiderChannel[] | MonitorOutput[]; 
  type: 'channel' | 'monitor' 
}) => {
  return (
    <div className="mb-8 sm:mb-12">
      <h3 className="font-display text-xl sm:text-2xl font-bold text-dark-slate mb-4 sm:mb-6 border-b pb-2">
        {title}
      </h3>
      <div className="overflow-x-auto -mx-2 sm:mx-0">
        <table className="w-full text-left text-xs sm:text-sm whitespace-nowrap min-w-[340px]">
          <thead className="bg-slate-100 text-dark-slate border-b">
            <tr>
              <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold uppercase tracking-wider">Source</th>
              <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold uppercase tracking-wider">Channel</th>
              <th className="px-3 sm:px-4 py-2.5 sm:py-3 font-semibold uppercase tracking-wider">
                {type === 'channel' ? 'Equipment' : 'Monitor'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/50">
                <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-medium text-dark-slate">{item.name}</td>
                <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-slate-600">{item.channels} CH</td>
                <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-slate-600">
                  {'equipment' in item ? item.equipment : item.monitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
