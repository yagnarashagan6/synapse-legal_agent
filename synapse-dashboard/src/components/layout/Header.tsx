import { CheckCircle2, AlertTriangle, ShieldAlert, Menu } from 'lucide-react';
import { StatusItem } from './StatusItem';

interface HeaderProps {
  dateInfo?: string;
  onMenuClick?: () => void;
}

export function Header({ 
  dateInfo = "Tuesday, Oct 24 • Legal Operations",
  onMenuClick 
}: HeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 pt-6 px-4 md:px-8 border-b border-border bg-background">
      <div className="flex items-start justify-between w-full md:w-auto">
        <div className="mb-0">
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800 mb-1 leading-tight">
            Welcome back, Sophie Everarts de Velp
          </h1>
          <p className="text-gold font-medium mb-1 text-sm md:text-base">
            Legal Intelligence Command Center
          </p>
          <p className="text-xs md:text-sm text-slate-500">
            {dateInfo}
          </p>
        </div>
        
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -mr-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full md:w-auto bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
        <StatusItem icon={<CheckCircle2 size={16} />} label="Knowledge Core Synced" color="text-success" />
        <StatusItem icon={<CheckCircle2 size={16} />} label="TMView Monitoring Active" color="text-success" />
        <StatusItem icon={<ShieldAlert size={16} />} label="AI Drafting Restricted Mode ON" color="text-warning" />
        <StatusItem icon={<AlertTriangle size={16} />} label="Human Validation Required" color="text-danger" />
      </div>
    </header>
  );
}
