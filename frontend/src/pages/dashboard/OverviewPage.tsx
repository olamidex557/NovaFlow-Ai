import { useAppStore } from '@/store/appStore';
import { mockAnalytics, mockVideos } from '@/lib/api/mock';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const statCards = [
  { label: 'Total Views', value: '2.4M', change: '+18.2%', color: 'var(--nova-cyan)', icon: '◎' },
  { label: 'Videos Published', value: '28', change: '+4 this week', color: 'var(--nova-violet)', icon: '▦' },
  { label: 'Subscribers', value: '12.8K', change: '+842 this week', color: 'var(--nova-green)', icon: '⊹' },
  { label: 'Avg. Engagement', value: '7.4%', change: '+1.2%', color: 'var(--nova-orange)', icon: '✦' },
];

const statusColors: Record<string, string> = {
  published: 'text-[var(--nova-green)] bg-[var(--nova-green)]/10',
  scheduled: 'text-[var(--nova-cyan)] bg-[var(--nova-cyan)]/10',
  draft: 'text-muted-foreground bg-muted/50',
  processing: 'text-[var(--nova-orange)] bg-[var(--nova-orange)]/10',
};

export default function OverviewPage() {
  const { setPage, user } = useAppStore();

  return (
    <div className="max-w-6xl mx-auto space-y-6 fade-in-up">
      {/* Welcome */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black" style={{fontFamily:'Syne,sans-serif'}}>Good morning, {user.name.split(' ')[0]} 👋</h2>
          <p className="text-muted-foreground text-sm mt-1">Here's what's happening with your channels today.</p>
        </div>
        <Button className="bg-[var(--nova-cyan)] text-black font-bold" onClick={() => setPage('create')}>
          ✦ New Video
        </Button>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((s, i) => (
          <div key={s.label} className={`gradient-border rounded-xl p-5 card-hover fade-in-up-${i+1}`}>
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</span>
              <span className="text-lg" style={{color: s.color}}>{s.icon}</span>
            </div>
            <div className="text-3xl font-black mb-1" style={{fontFamily:'Syne,sans-serif', color: s.color}}>{s.value}</div>
            <div className="text-xs text-[var(--nova-green)]">{s.change}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Chart */}
        <div className="lg:col-span-2 gradient-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold">Weekly Performance</h3>
            <Badge className="bg-[hsl(222,15%,13%)] text-muted-foreground border-border/40 text-xs">Last 7 days</Badge>
          </div>
          <div className="flex items-end gap-2 h-32">
            {mockAnalytics.weeklyData.map((d, i) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-sm relative group cursor-default"
                  style={{
                    height: `${(d.views / 8100) * 100}%`,
                    background: `linear-gradient(to top, var(--nova-cyan), var(--nova-violet))`,
                    opacity: 0.7 + i * 0.04,
                    minHeight: '8px',
                  }}
                >
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[hsl(222,15%,15%)] border border-border/50 rounded px-2 py-1 text-xs whitespace-nowrap z-10">
                    {d.views.toLocaleString()} views
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="gradient-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Quick Actions</h3>
          <div className="space-y-2">
            {[
              { label: 'Generate AI Script', icon: '✦', page: 'create', color: 'var(--nova-cyan)' },
              { label: 'Schedule a Video', icon: '⟐', page: 'schedule', color: 'var(--nova-violet)' },
              { label: 'View Analytics', icon: '◈', page: 'analytics', color: 'var(--nova-green)' },
              { label: 'Connect YouTube', icon: '▷', page: 'youtube', color: 'var(--nova-orange)' },
            ].map(a => (
              <button
                key={a.label}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[hsl(222,15%,12%)] hover:bg-[hsl(222,15%,14%)] transition-colors text-sm font-medium text-left"
                onClick={() => setPage(a.page as any)}
              >
                <span style={{color: a.color}}>{a.icon}</span>
                {a.label}
                <span className="ml-auto text-muted-foreground">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent videos */}
      <div className="gradient-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold">Recent Videos</h3>
          <button className="text-xs text-[var(--nova-cyan)] hover:underline" onClick={() => setPage('videos')}>View all →</button>
        </div>
        <div className="space-y-3">
          {mockVideos.slice(0, 4).map(v => (
            <div key={v.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[hsl(222,15%,12%)] transition-colors cursor-pointer" onClick={() => setPage('editor')}>
              {/* Thumbnail */}
              <div className="w-16 h-10 rounded-md bg-gradient-to-br flex-shrink-0 flex items-center justify-center text-xs font-bold"
                style={{background: `linear-gradient(135deg, hsl(222,18%,15%), hsl(222,15%,20%))`}}>
                <span className="text-muted-foreground">▷</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{v.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{v.date} · {v.type === 'short' ? '# Short' : '⊹ Long-form'}</div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                {v.views > 0 && <span className="text-xs text-muted-foreground">{v.views.toLocaleString()} views</span>}
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[v.status]}`}>{v.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
