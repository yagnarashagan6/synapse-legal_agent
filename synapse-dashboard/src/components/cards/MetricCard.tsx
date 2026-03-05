import type { ReactNode } from 'react';

interface MetricCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  trend?: string;
  trendPositive?: boolean;
}

export function MetricCard({ icon, value, label, trend, trendPositive }: MetricCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-5 flex flex-col justify-between h-[140px] hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="text-slate-400">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-semibold px-2 py-1 rounded bg-opacity-10 ${trendPositive ? 'text-success bg-success' : 'text-danger bg-danger'}`}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <div className="text-3xl font-bold text-slate-800 tracking-tight">{value}</div>
        <div className="text-sm font-medium text-slate-500 mt-1 leading-snug">{label}</div>
      </div>
    </div>
  );
}
