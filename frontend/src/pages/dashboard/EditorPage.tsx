import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

const voices = [
  { id: 'v1', name: 'Marcus', style: 'Deep & Authoritative', gender: 'M' },
  { id: 'v2', name: 'Aria', style: 'Warm & Engaging', gender: 'F' },
  { id: 'v3', name: 'Zane', style: 'Energetic & Hype', gender: 'M' },
  { id: 'v4', name: 'Sophia', style: 'Clear & Professional', gender: 'F' },
];

const captions = [
  { t: '0s', text: 'Most people spend their entire lives working for money' },
  { t: '3s', text: 'but what if I told you there\'s a smarter way?' },
  { t: '8s', text: 'Let me break down the exact framework...' },
];

export default function EditorPage() {
  const { setPage } = useAppStore();
  const [selectedVoice, setSelectedVoice] = useState('v2');
  const [rendering, setRendering] = useState(false);
  const [rendered, setRendered] = useState(false);
  const [playhead, setPlayhead] = useState([0]);

  const handleRender = () => {
    setRendering(true);
    setTimeout(() => { setRendering(false); setRendered(true); }, 2500);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-5 fade-in-up">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <button className="hover:text-foreground transition-colors" onClick={() => setPage('videos')}>My Videos</button>
        <span>/</span>
        <span className="text-foreground font-medium">Why 99% of people never build real wealth</span>
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        {/* Preview */}
        <div className="lg:col-span-3 space-y-4">
          <div className="gradient-border rounded-xl overflow-hidden">
            {/* Video player */}
            <div className="bg-black aspect-video relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,18%,8%)] to-black" />
              {/* Fake video content */}
              <div className="relative z-10 text-center px-8">
                <div className="text-2xl font-black mb-2 text-glow-cyan" style={{fontFamily:'Syne,sans-serif'}}>Most people spend their entire lives working for money</div>
                <div className="w-12 h-0.5 mx-auto bg-[var(--nova-cyan)]" />
              </div>
              {/* Play button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-14 h-14 rounded-full bg-[var(--nova-cyan)]/20 border border-[var(--nova-cyan)]/40 flex items-center justify-center group-hover:bg-[var(--nova-cyan)]/30 transition-all">
                  <span className="text-[var(--nova-cyan)] text-xl ml-1">▶</span>
                </div>
              </button>
              {rendered && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-[var(--nova-green)]/20 text-[var(--nova-green)] border-[var(--nova-green)]/20">✓ Rendered</Badge>
                </div>
              )}
            </div>
            {/* Timeline */}
            <div className="p-4 border-t border-border/50 bg-[hsl(222,18%,8%)]">
              <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                <span>0:00</span>
                <div className="flex-1">
                  <Slider value={playhead} onValueChange={setPlayhead} max={60} className="w-full" />
                </div>
                <span>0:60</span>
              </div>
              {/* Caption timeline */}
              <div className="space-y-1.5">
                {captions.map(c => (
                  <div key={c.t} className="flex items-center gap-3 text-xs">
                    <span className="text-[var(--nova-cyan)] w-7 flex-shrink-0">{c.t}</span>
                    <div className="flex-1 bg-[hsl(222,15%,15%)] rounded px-3 py-1.5 text-muted-foreground hover:bg-[hsl(222,15%,18%)] cursor-pointer transition-colors">
                      {c.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="lg:col-span-2 space-y-4">
          {/* Voice */}
          <div className="gradient-border rounded-xl p-5">
            <h3 className="font-bold mb-4">Voice Selection</h3>
            <div className="space-y-2">
              {voices.map(v => (
                <button
                  key={v.id}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                    selectedVoice === v.id
                      ? 'border-[var(--nova-violet)] bg-[var(--nova-violet)]/8'
                      : 'border-border/40 hover:border-[var(--nova-violet)]/30'
                  }`}
                  onClick={() => setSelectedVoice(v.id)}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    v.gender === 'M' ? 'bg-[var(--nova-cyan)]/20 text-[var(--nova-cyan)]' : 'bg-[var(--nova-violet)]/20 text-[var(--nova-violet)]'
                  }`}>{v.name[0]}</div>
                  <div>
                    <div className="font-semibold text-sm">{v.name}</div>
                    <div className="text-xs text-muted-foreground">{v.style}</div>
                  </div>
                  {selectedVoice === v.id && <span className="ml-auto text-[var(--nova-violet)]">✓</span>}
                </button>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-3 border-border/50 text-xs">▷ Preview voice</Button>
          </div>

          {/* Captions */}
          <div className="gradient-border rounded-xl p-5">
            <h3 className="font-bold mb-3">Caption Style</h3>
            <div className="grid grid-cols-3 gap-2">
              {['Bold Yellow', 'White Outline', 'Minimal'].map((s) => (
                <button key={s} className="p-2 rounded-lg bg-[hsl(222,15%,12%)] border border-border/40 text-xs text-muted-foreground hover:border-[var(--nova-cyan)]/30 transition-colors">
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Render */}
          <Button
            className={`w-full h-12 font-bold text-base ${rendered ? 'bg-[var(--nova-green)] hover:bg-[var(--nova-green)]/90 text-black' : 'bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90'}`}
            onClick={rendered ? () => setPage('schedule') : handleRender}
            disabled={rendering}
          >
            {rendering ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75"/></svg>
                Rendering... 34%
              </span>
            ) : rendered ? '✓ Schedule Upload →' : '⟐ Render Video'}
          </Button>
          {rendered && <p className="text-xs text-center text-muted-foreground">Your video is ready. Schedule it or download.</p>}
        </div>
      </div>
    </div>
  );
}
