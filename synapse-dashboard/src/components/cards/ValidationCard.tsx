import { Button } from '../ui/Button';

interface ValidationCardProps {
  title: string;
  statusText: string;
  statusRatio?: string; // e.g. "6/8"
  primaryAction: string;
  secondaryAction?: string;
}

export function ValidationCard({ title, statusText, statusRatio, primaryAction, secondaryAction }: ValidationCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-5 hover:border-gold/30 hover:shadow-md transition-all">
      <h4 className="font-semibold text-slate-800 mb-2 truncate" title={title}>{title}</h4>
      
      <div className="flex items-center gap-2 mb-5">
        <span className="text-sm font-semibold text-success bg-success/10 px-2 py-0.5 rounded">
          {statusRatio && <span className="mr-1">{statusRatio}</span>}
          {statusText}
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button size="sm" className="w-full bg-slate-900 text-white hover:bg-slate-800">
          {primaryAction}
        </Button>
        {secondaryAction && (
          <Button size="sm" variant="outline" className="w-full bg-slate-50 text-slate-700 hover:text-slate-900">
            {secondaryAction}
          </Button>
        )}
      </div>
    </div>
  );
}
