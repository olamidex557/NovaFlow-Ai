import { useAppStore } from '@/store/appStore';

type Page = 'dashboard' | 'create' | 'videos' | 'schedule' | 'analytics' | 'youtube' | 'settings';

const navItems: { icon: string; label: string; page: Page }[] = [
  { icon: '⬡', label: 'Overview', page: 'dashboard' },
  { icon: '✦', label: 'Create Video', page: 'create' },
  { icon: '▦', label: 'My Videos', page: 'videos' },
  { icon: '⟐', label: 'Schedule', page: 'schedule' },
  { icon: '◈', label: 'Analytics', page: 'analytics' },
  { icon: '▷', label: 'YouTube', page: 'youtube' },
  { icon: '◎', label: 'Settings', page: 'settings' },
];

export default function Sidebar() {
  const { page, setPage, sidebarOpen } = useAppStore();

  return (
    <aside className={`${sidebarOpen ? 'w-56' : 'w-0 overflow-hidden'} transition-all duration-300 flex-shrink-0 bg-[hsl(222,18%,8%)] border-r border-border/50 flex flex-col h-screen`}>
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--nova-cyan)] to-[var(--nova-violet)] flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-black text-black">N</span>
          </div>
          <span className="font-black text-base" style={{fontFamily:'Syne,sans-serif'}}>NovaFlow</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map(item => {
          const active = page === item.page;
          return (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 text-left ${
                active
                  ? 'sidebar-active text-[var(--nova-cyan)]'
                  : 'text-muted-foreground hover:text-foreground hover:bg-[hsl(222,15%,13%)]'
              }`}
            >
              <span className="text-base w-5 text-center flex-shrink-0">{item.icon}</span>
              {item.label}
              {item.page === 'create' && (
                <span className="ml-auto text-[10px] bg-[var(--nova-cyan)]/20 text-[var(--nova-cyan)] px-1.5 py-0.5 rounded font-bold">NEW</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Credits */}
      <div className="p-4 border-t border-border/50">
        <div className="bg-[hsl(222,15%,12%)] rounded-xl p-4 border border-border/40">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-muted-foreground">Credits</span>
            <span className="text-[var(--nova-cyan)] font-semibold">2,400 / 5,000</span>
          </div>
          <div className="h-1.5 bg-[hsl(222,15%,18%)] rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{width:'48%', background:'linear-gradient(90deg, var(--nova-cyan), var(--nova-violet))'}} />
          </div>
          <button className="w-full mt-3 text-xs font-semibold text-[var(--nova-cyan)] hover:underline">Upgrade Plan →</button>
        </div>
      </div>
    </aside>
  );
}
