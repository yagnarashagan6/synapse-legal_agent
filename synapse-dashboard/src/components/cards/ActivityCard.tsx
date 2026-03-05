import type { ReactNode } from 'react';

interface ActivityCardProps {
  icon: ReactNode;
  title: string;
  time: string;
  iconBgColor?: string;
}

export function ActivityCard({ icon, title, time, iconBgColor = "bg-slate-100 text-slate-500" }: ActivityCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer group">
      <div className={`p-2 rounded-lg shrink-0 transition-colors ${iconBgColor}`}>
        {icon}
      </div>
      <div>
        <h5 className="font-semibold text-sm text-slate-800 group-hover:text-gold transition-colors">{title}</h5>
        <div className="text-xs font-medium text-slate-400 mt-0.5 flex items-center gap-1.5">
          {time}
        </div>
      </div>
    </div>
  );
}
