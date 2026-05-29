import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { mockVideos } from '@/lib/api/mock';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const statusColors: Record<string, string> = {
  published: 'text-[var(--nova-green)] bg-[var(--nova-green)]/10 border-[var(--nova-green)]/20',
  scheduled: 'text-[var(--nova-cyan)] bg-[var(--nova-cyan)]/10 border-[var(--nova-cyan)]/20',
  draft: 'text-muted-foreground bg-muted/30 border-border/40',
  processing: 'text-[var(--nova-orange)] bg-[var(--nova-orange)]/10 border-[var(--nova-orange)]/20',
};

export default function MyVideosPage() {
  const { setPage } = useAppStore();
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = mockVideos.filter(v => {
    if (filter !== 'all' && v.status !== filter) return false;
    if (search && !v.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-5 fade-in-up">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">{mockVideos.length} videos total</p>
        </div>
        <Button className="bg-[var(--nova-cyan)] text-black font-bold" onClick={() => setPage('create')}>
          + New Video
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex gap-1 bg-[hsl(222,15%,12%)] rounded-lg p-1">
          {['all', 'published', 'scheduled', 'draft', 'processing'].map(f => (
            <button
              key={f}
              className={`px-3 py-1.5 rounded-md text-xs font-medium capitalize transition-all ${
                filter === f ? 'bg-[var(--nova-cyan)] text-black' : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setFilter(f)}
            >{f}</button>
          ))}
        </div>
        <Input
          placeholder="Search videos..."
          className="max-w-xs bg-[hsl(222,15%,12%)] border-border/50 h-9 text-sm"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Video list */}
      <div className="gradient-border rounded-xl overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-border/50 text-xs text-muted-foreground uppercase tracking-wider">
          <div className="col-span-5">Title</div>
          <div className="col-span-2">Type</div>
          <div className="col-span-2">Views</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1" />
        </div>
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">No videos found.</div>
        ) : filtered.map(v => (
          <div key={v.id} className="grid grid-cols-12 gap-4 px-5 py-4 items-center border-b border-border/30 hover:bg-[hsl(222,15%,11%)] transition-colors cursor-pointer" onClick={() => setPage('editor')}>
            <div className="col-span-5 flex items-center gap-3">
              <div className="w-14 h-9 rounded bg-gradient-to-br from-[hsl(222,18%,16%)] to-[hsl(222,15%,22%)] flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">▷</div>
              <div className="font-medium text-sm truncate">{v.title}</div>
            </div>
            <div className="col-span-2">
              <span className="text-xs text-muted-foreground">{v.type === 'short' ? '# Short' : '⊹ Long'}</span>
            </div>
            <div className="col-span-2 text-sm">{v.views > 0 ? v.views.toLocaleString() : '—'}</div>
            <div className="col-span-2">
              <span className={`text-xs px-2 py-1 rounded-full font-medium border ${statusColors[v.status]}`}>{v.status}</span>
            </div>
            <div className="col-span-1 flex justify-end">
              <button className="text-muted-foreground hover:text-foreground transition-colors text-lg">⋯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
