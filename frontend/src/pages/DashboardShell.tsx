import { useAppStore } from '@/store/appStore';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import OverviewPage from '@/pages/dashboard/OverviewPage';
import CreateVideoPage from '@/pages/dashboard/CreateVideoPage';
import MyVideosPage from '@/pages/dashboard/MyVideosPage';
import SchedulePage from '@/pages/dashboard/SchedulePage';
import AnalyticsPage from '@/pages/dashboard/AnalyticsPage';
import YouTubePage from '@/pages/dashboard/YouTubePage';
import SettingsPage from '@/pages/dashboard/SettingsPage';
import EditorPage from '@/pages/dashboard/EditorPage';

export default function DashboardShell() {
  const { page, sidebarOpen } = useAppStore();

  const renderPage = () => {
    switch (page) {
      case 'create': return <CreateVideoPage />;
      case 'videos': return <MyVideosPage />;
      case 'schedule': return <SchedulePage />;
      case 'analytics': return <AnalyticsPage />;
      case 'youtube': return <YouTubePage />;
      case 'settings': return <SettingsPage />;
      case 'editor': return <EditorPage />;
      default: return <OverviewPage />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-0'}`}>
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 grain">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}
