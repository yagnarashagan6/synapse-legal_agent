import { cn } from '../../lib/utils';

interface StatusIndicatorProps {
  status: 'success' | 'warning' | 'error' | 'neutral' | 'active';
  pulse?: boolean;
}

export function StatusIndicator({ status, pulse = false }: StatusIndicatorProps) {
  const getColors = () => {
    switch(status) {
      case 'success': return 'bg-success';
      case 'warning': return 'bg-warning';
      case 'error': return 'bg-danger';
      case 'active': return 'bg-blue-500';
      default: return 'bg-slate-300';
    }
  }

  const bgColor = getColors();

  return (
    <span className="relative flex h-3 w-3">
      {pulse && (
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", bgColor)}></span>
      )}
      <span className={cn("relative inline-flex rounded-full h-3 w-3", bgColor)}></span>
    </span>
  );
}
