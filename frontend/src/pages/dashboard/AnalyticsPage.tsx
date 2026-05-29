import { mockAnalytics } from '@/lib/api/mock';
import { Badge } from '@/components/ui/badge';

const topStats = [
  { label: 'Total Views', value: '2.4M', sub: '+18.2% this month', color: 'var(--nova-cyan)' },
  { label: 'Watch Time', value: '184K hrs', sub: '+12.4% this month', color: 'var(--nova-violet)' },
  { label: 'Subscribers', value: '12.8K', sub: '+842 this month', color: 'var(--nova-green)' },
  { label: 'Avg. CTR', value: '7.4%', sub: 'Industry avg: 4.2%', color: 'var(--nova-orange)' },
];

export default function AnalyticsPage() {
  const maxViews = Math.max(...mockAnalytics.weeklyData.map(d => d.views));

  return (
    <div className="max-w-6xl mx-auto space-y-6 fade-in-up">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {topStats.map((s, i) => (
          <div key={s.label} className={`gradient-border rounded-xl p-5 card-hover fade-in-up-${i+1}`}>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{s.label}</div>
            <div className="text-3xl font-black mb-1" style={{fontFamily:'Syne,sans-serif', color: s.color}}>{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Views chart */}
        <div className="lg:col-span-2 gradient-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold">Views this week</h3>
            <div className="flex gap-1">
              {['7D','1M','3M'].map((t,i) => (
                <button key={t} className={`px-3 py-1 rounded text-xs font-medium ${i===0 ? 'bg-[var(--nova-cyan)] text-black' : 'text-muted-foreground hover:text-foreground'}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-3 h-40 mb-3">
            {mockAnalytics.weeklyData.map((d, i) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group cursor-default">
                <div className="relative w-full">
                  <div
                    className="w-full rounded-t-md transition-all group-hover:opacity-100"
                    style={{
                      height: `${(d.views / maxViews) * 160}px`,
                      background: `linear-gradient(to top, var(--nova-cyan), var(--nova-violet))`,
                      opacity: 0.6 + i * 0.06,
                    }}
                  />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[hsl(222,15%,15%)] border border-border/50 rounded px-2 py-1 text-xs whitespace-nowrap z-10">
                    {d.views.toLocaleString()}
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top videos */}
        <div className="gradient-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Top Performing</h3>
          <div className="space-y-3">
            {mockAnalytics.topVideos.map((v, i) => (
              <div key={v.id} className="flex items-center gap-3">
                <span className="text-xs font-bold text-muted-foreground w-4">{i+1}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium truncate">{v.title}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="h-1 rounded-full bg-[hsl(222,15%,18%)] flex-1">
                      <div className="h-full rounded-full" style={{
                        width: `${(v.views / mockAnalytics.topVideos[0].views) * 100}%`,
                        background: 'linear-gradient(90deg, var(--nova-cyan), var(--nova-violet))',
                      }} />
                    </div>
                    <span className="text-[10px] text-muted-foreground flex-shrink-0">{(v.views/1000).toFixed(0)}K</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engagement table */}
      <div className="gradient-border rounded-xl p-6">
        <h3 className="font-bold mb-5">Daily Breakdown</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-5 text-xs text-muted-foreground uppercase tracking-wider border-b border-border/30 pb-2">
            <span>Day</span>
            <span>Views</span>
            <span>Watch Time</span>
            <span>Engagement</span>
            <span>Subscribers</span>
          </div>
          {mockAnalytics.weeklyData.map(d => (
            <div key={d.day} className="grid grid-cols-5 text-sm py-1">
              <span className="font-medium">{d.day}</span>
              <span>{d.views.toLocaleString()}</span>
              <span className="text-muted-foreground">{Math.round(d.views * 0.06)}h</span>
              <span style={{color: d.engagement > 7.5 ? 'var(--nova-green)' : 'var(--nova-orange)'}}>{d.engagement}%</span>
              <span className="text-muted-foreground">+{Math.round(d.views * 0.008)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue placeholder */}
      <div className="gradient-border rounded-xl p-6 border-dashed">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold mb-1">Revenue Tracking</h3>
            <p className="text-sm text-muted-foreground">AdSense, sponsorships, and merch revenue — coming soon.</p>
          </div>
          <Badge className="bg-[var(--nova-violet)]/10 text-[var(--nova-violet)] border-[var(--nova-violet)]/20">Coming Soon</Badge>
        </div>
      </div>
    </div>
  );
}
