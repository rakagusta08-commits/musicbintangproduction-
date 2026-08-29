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
    <div className="mb-12">
      <h3 className="font-display text-2xl font-bold text-dark-slate mb-6 border-b pb-2">
        {title}
      </h3>
      <div className="overflow-x-auto print:overflow-visible">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-100 text-dark-slate print:bg-transparent border-b">
            <tr>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Source</th>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">Channel</th>
              <th className="px-4 py-3 font-semibold uppercase tracking-wider">
                {type === 'channel' ? 'Equipment' : 'Monitor'}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-slate-50/50 print:hover:bg-transparent">
                <td className="px-4 py-3 font-medium text-dark-slate">{item.name}</td>
                <td className="px-4 py-3 text-slate-600">{item.channels} CH</td>
                <td className="px-4 py-3 text-slate-600">
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
