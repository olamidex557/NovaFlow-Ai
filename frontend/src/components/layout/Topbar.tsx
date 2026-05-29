import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';

const pageTitles: Record<string, string> = {
  dashboard: 'Overview',
  create: 'Create Video',
  videos: 'My Videos',
  schedule: 'Schedule',
  analytics: 'Analytics',
  youtube: 'YouTube Accounts',
  settings: 'Settings',
  editor: 'Video Editor',
};

export default function Topbar() {
  const { page, user, setPage, setAuth, setSidebar, sidebarOpen } = useAppStore();

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-border/50 bg-[hsl(222,18%,8%)]/80 backdrop-blur-sm flex-shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebar(!sidebarOpen)}
          className="text-muted-foreground hover:text-foreground transition-colors p-1"
        >
          <div className="space-y-1">
            <div className="w-4 h-0.5 bg-current" />
            <div className="w-4 h-0.5 bg-current" />
            <div className="w-4 h-0.5 bg-current" />
          </div>
        </button>
        <h1 className="font-bold text-lg" style={{fontFamily:'Syne,sans-serif'}}>{pageTitles[page] || 'Dashboard'}</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm" className="bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90 font-bold text-xs" onClick={() => setPage('create')}>
          + Create Video
        </Button>
        {/* Notification */}
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--nova-cyan)]" />
        </button>
        {/* Avatar */}
        <button
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          onClick={() => { setAuth(false); setPage('landing'); }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--nova-cyan)] to-[var(--nova-violet)] flex items-center justify-center text-black font-bold text-sm">
            {user.name[0]}
          </div>
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium leading-none">{user.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{user.plan} plan</div>
          </div>
        </button>
      </div>
    </header>
  );
}
