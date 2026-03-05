import { CheckCircle2, AlertTriangle, ShieldAlert } from 'lucide-react';
import { StatusItem } from './StatusItem';

interface HeaderProps {
  dateInfo?: string;
}

export function Header({ dateInfo = "Tuesday, Oct 24 • Legal Operations" }: HeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 pt-4 px-8 border-b border-border bg-background">
      <div className="mb-4 sm:mb-0">
        <h1 className="text-2xl font-semibold text-slate-800 mb-1">
          Welcome back, Sophie Everarts de Velp
        </h1>
        <p className="text-gold font-medium mb-1">
          Legal Intelligence Command Center
        </p>
        <p className="text-sm text-slate-500">
          {dateInfo}
        </p>
      </div>

      <div className="flex flex-col gap-2 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
        <StatusItem icon={<CheckCircle2 size={16} />} label="Knowledge Core Synced" color="text-success" />
        <StatusItem icon={<CheckCircle2 size={16} />} label="TMView Monitoring Active" color="text-success" />
        <StatusItem icon={<ShieldAlert size={16} />} label="AI Drafting Restricted Mode ON" color="text-warning" />
        <StatusItem icon={<AlertTriangle size={16} />} label="Human Validation Required" color="text-danger" />
      </div>
    </header>
  );
}
