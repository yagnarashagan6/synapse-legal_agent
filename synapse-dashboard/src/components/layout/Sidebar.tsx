import { cn } from '../../lib/utils';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  FileEdit, 
  Database, 
  Megaphone, 
  LogOut 
} from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: ShieldCheck, label: 'Trademark Intelligence' },
    { icon: FileEdit, label: 'AI Legal Drafting' },
    { icon: Database, label: 'Legal Knowledge Core' },
    { icon: Megaphone, label: 'Marketing & Communications' },
  ];

  return (
    <aside className="w-[260px] h-screen bg-sidebar text-white flex flex-col fixed left-0 top-0 overflow-y-auto">
      {/* Logo & Brand */}
      <div className="p-6 flex flex-col gap-1 border-b border-sidebar-border border-opacity-20 relative">
        <h1 className="text-xl font-semibold tracking-tight">Synapse OS</h1>
        <div className="text-xs text-gold uppercase tracking-wider font-semibold">MUTATIS LEGAL</div>
        {/* Language Toggle */}
        <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-medium text-slate-400">
          <span className="cursor-pointer hover:text-white transition-colors">FR</span>
          <span>/</span>
          <span className="text-white">EN</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
              item.active 
                ? "bg-slate-800/50 text-white" 
                : "text-slate-400 hover:text-white hover:bg-slate-800/30"
            )}
          >
            <item.icon size={18} className={cn("", item.active ? "text-gold" : "text-slate-400")} />
            {item.label}
          </a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-4 mt-auto border-t border-slate-800">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-semibold text-gold border border-slate-600">
            SE
          </div>
          <div className="flex-1 overflow-hidden">
            <h4 className="text-sm font-semibold truncate text-white">Sophie Everarts</h4>
            <p className="text-xs text-slate-400 truncate">Senior Partner</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-4 py-3 mt-2 w-full rouded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/30 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
