import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background font-inter font-sans">
      <Sidebar />
      <div className="flex-1 ml-[260px] flex flex-col h-screen overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto w-full">
          <div className="w-full mx-auto pb-12">
            <Header />
            <div className="p-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
