import { cn } from '../../lib/utils';

interface StatusItemProps {
  icon: React.ReactNode;
  label: string;
  color: string;
}

export function StatusItem({ icon, label, color }: StatusItemProps) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
      <span className={cn(color)}>{icon}</span>
      {label}
    </div>
  );
}
