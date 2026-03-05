import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { cn } from '../../lib/utils';
import { AlertTriangle, Clock } from 'lucide-react';

interface AlertCardProps {
  title: string;
  description: string;
  badgeText?: string;
  buttonText: string;
  type: 'danger' | 'warning';
}

export function AlertCard({ title, description, badgeText, buttonText, type }: AlertCardProps) {
  const isDanger = type === 'danger';
  
  return (
    <div className={cn(
      "rounded-xl border shadow-sm p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all",
      isDanger ? "bg-red-50/30 border-red-200" : "bg-amber-50/30 border-amber-200"
    )}>
      <div className="flex gap-4">
        <div className={cn("p-2 rounded-lg h-fit", isDanger ? "bg-red-100 text-danger" : "bg-amber-100 text-warning")}>
          {isDanger ? <Clock size={20} /> : <AlertTriangle size={20} />}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h4 className="font-semibold text-slate-800">{title}</h4>
            {badgeText && (
              <Badge variant={isDanger ? "destructive" : "warning"} className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded">
                {badgeText}
              </Badge>
            )}
          </div>
          <p className="text-sm text-slate-600 font-medium">{description}</p>
        </div>
      </div>
      <Button variant={isDanger ? "destructive" : "secondary"} size="sm" className={cn("shrink-0", !isDanger && "bg-white border-amber-200 border text-amber-900 hover:bg-amber-50")}>
        {buttonText}
      </Button>
    </div>
  );
}
