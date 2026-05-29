import { useState } from 'react';
import { mockScheduled } from '@/lib/api/mock';
import { Badge } from '@/components/ui/badge';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function SchedulePage() {
  const [tz, setTz] = useState('Africa/Lagos');

  return (
    <div className="max-w-6xl mx-auto space-y-5 fade-in-up">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm">{mockScheduled.length} videos scheduled</p>
        <div className="flex items-center gap-3">
          <select
            className="bg-[hsl(222,15%,12%)] border border-border/50 rounded-lg px-3 py-2 text-sm text-muted-foreground focus:outline-none"
            value={tz} onChange={e => setTz(e.target.value)}
          >
            <option>Africa/Lagos</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
            <option>Asia/Tokyo</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Calendar grid */}
        <div className="lg:col-span-2 gradient-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold">May 2024</h3>
            <div className="flex gap-2">
              <button className="w-7 h-7 rounded border border-border/50 text-muted-foreground hover:text-foreground flex items-center justify-center">‹</button>
              <button className="w-7 h-7 rounded border border-border/50 text-muted-foreground hover:text-foreground flex items-center justify-center">›</button>
            </div>
          </div>
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {days.map(d => <div key={d} className="text-center text-xs text-muted-foreground py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({length: 31}, (_, i) => i + 1).map(day => {
              const hasEvent = mockScheduled.some(s => parseInt(s.date.split('-')[2]) === day);
              const isToday = day === 15;
              return (
                <div
                  key={day}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center text-sm cursor-pointer transition-all relative ${
                    isToday ? 'bg-[var(--nova-cyan)] text-black font-bold' :
                    hasEvent ? 'bg-[var(--nova-violet)]/15 text-[var(--nova-violet)] font-medium border border-[var(--nova-violet)]/30' :
                    'hover:bg-[hsl(222,15%,14%)] text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {day}
                  {hasEvent && !isToday && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[var(--nova-violet)]" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scheduled list */}
        <div className="space-y-4">
          <div className="gradient-border rounded-xl p-5">
            <h3 className="font-bold mb-4">Upcoming Uploads</h3>
            <div className="space-y-3">
              {mockScheduled.map(s => (
                <div key={s.id} className="flex items-start gap-3 p-3 rounded-lg bg-[hsl(222,15%,11%)] border border-border/40 card-hover cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-[var(--nova-cyan)] mt-1.5 flex-shrink-0 relative pulse-dot" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{s.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.date} · {s.time}</div>
                    <div className="text-xs text-[var(--nova-cyan)] mt-0.5">{s.channel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Time slot picker */}
          <div className="gradient-border rounded-xl p-5">
            <h3 className="font-bold mb-3 text-sm">Best Times to Post</h3>
            <p className="text-xs text-muted-foreground mb-4">Based on your audience activity (WAT)</p>
            <div className="space-y-2">
              {[['Fri 7 PM', 'Highest'], ['Sat 8 PM', 'High'], ['Wed 6 PM', 'Good']].map(([time, level]) => (
                <div key={time} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{time}</span>
                  <Badge className={`text-[10px] ${
                    level === 'Highest' ? 'bg-[var(--nova-green)]/10 text-[var(--nova-green)] border-[var(--nova-green)]/20' :
                    level === 'High' ? 'bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)] border-[var(--nova-cyan)]/20' :
                    'bg-[hsl(222,15%,15%)] text-muted-foreground border-border/40'
                  }`}>{level}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
