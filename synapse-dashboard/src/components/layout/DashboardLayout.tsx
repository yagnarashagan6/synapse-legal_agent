import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background font-inter font-sans">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 lg:ml-[280px] flex flex-col min-h-screen">
        <main className="flex-1 w-full">
          <div className="w-full mx-auto pb-12">
            <Header onMenuClick={() => setIsSidebarOpen(true)} />
            <div className="px-4 md:px-8 py-6 md:py-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
