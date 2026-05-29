import { useState } from 'react';
import { mockChannels } from '@/lib/api/mock';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function YouTubePage() {
  const [connecting, setConnecting] = useState(false);
  const [channels, setChannels] = useState(mockChannels);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setChannels(prev => [...prev, {
        id: 'ch2', name: 'Nova Business', handle: '@novabiz', subscribers: 3280, connected: true, avatar: '',
      }]);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 fade-in-up">
      {/* Connect button */}
      <div className="gradient-border rounded-xl p-7 text-center">
        <div className="w-14 h-14 rounded-full bg-[#ff0000]/10 border border-[#ff0000]/20 flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#ff0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </div>
        <h3 className="font-black text-xl mb-2" style={{fontFamily:'Syne,sans-serif'}}>Connect a YouTube Channel</h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
          Connect your YouTube accounts to enable automated uploads, scheduling, and performance tracking across all your channels.
        </p>
        <Button
          className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold px-8 h-11"
          onClick={handleConnect}
          disabled={connecting}
        >
          {connecting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75"/></svg>
              Connecting via OAuth...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Connect with YouTube
            </span>
          )}
        </Button>
        <p className="text-xs text-muted-foreground mt-3">You'll be redirected to Google to authorize access.</p>
      </div>

      {/* Connected channels */}
      {channels.length > 0 && (
        <div className="gradient-border rounded-xl p-6">
          <h3 className="font-bold mb-4">Connected Channels ({channels.length})</h3>
          <div className="space-y-3">
            {channels.map(ch => (
              <div key={ch.id} className="flex items-center gap-4 p-4 rounded-xl bg-[hsl(222,15%,11%)] border border-border/40">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff0000]/30 to-[var(--nova-violet)]/30 flex items-center justify-center text-lg font-black flex-shrink-0">
                  {ch.name[0]}
                </div>
                <div className="flex-1">
                  <div className="font-bold">{ch.name}</div>
                  <div className="text-sm text-muted-foreground">{ch.handle} · {ch.subscribers.toLocaleString()} subscribers</div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-[var(--nova-green)]/10 text-[var(--nova-green)] border-[var(--nova-green)]/20">Connected</Badge>
                  <button className="text-xs text-muted-foreground hover:text-destructive transition-colors">Disconnect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Permissions */}
      <div className="gradient-border rounded-xl p-6">
        <h3 className="font-bold mb-4">OAuth Permissions</h3>
        <div className="space-y-3">
          {[
            { label: 'Upload videos', desc: 'Publish videos on your behalf', granted: true },
            { label: 'Read analytics', desc: 'Access view count and engagement data', granted: true },
            { label: 'Manage playlists', desc: 'Create and organize playlists', granted: true },
            { label: 'Account details', desc: 'Read channel name and profile info', granted: true },
          ].map(p => (
            <div key={p.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
              <div>
                <div className="text-sm font-medium">{p.label}</div>
                <div className="text-xs text-muted-foreground">{p.desc}</div>
              </div>
              <span className="text-[var(--nova-green)] text-sm">✓ Granted</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
