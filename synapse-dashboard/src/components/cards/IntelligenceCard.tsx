import { Button } from '../ui/Button';

interface IntelligenceItem {
  label: string;
  value: string;
  isWarning?: boolean;
}

interface IntelligenceCardProps {
  title: string;
  items: IntelligenceItem[];
  buttonText: string;
  primaryAction?: boolean;
}

export function IntelligenceCard({ title, items, buttonText, primaryAction = false }: IntelligenceCardProps) {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-slate-800 mb-6">{title}</h3>
      
      <div className="space-y-4 mb-6 flex-1">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
            <span className="text-sm font-medium text-slate-500">{item.label}</span>
            <span className={`text-sm font-semibold ${item.isWarning ? 'text-danger' : 'text-slate-800'}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <Button 
        variant={primaryAction ? 'primary' : 'outline'} 
        className={primaryAction ? 'w-full text-sm font-medium' : 'w-full bg-slate-50 border-slate-200 text-sm font-medium'}
      >
        {buttonText}
      </Button>
    </div>
  );
}
