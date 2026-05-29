import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mockNiches, mockTones, mockScript } from '@/lib/api/mock';

export default function CreateVideoPage() {
  const { setPage } = useAppStore();
  const [step, setStep] = useState(1);
  const [niche, setNiche] = useState('');
  const [topic, setTopic] = useState('');
  const [videoType, setVideoType] = useState('');
  const [tone, setTone] = useState('');
  const [generating, setGenerating] = useState(false);
  const [script, setScript] = useState('');
  const [regenerating, setRegenerating] = useState(false);

  const generate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setScript(mockScript); setStep(3); }, 1800);
  };
  const regen = () => { setRegenerating(true); setTimeout(() => setRegenerating(false), 1400); };

  return (
    <div className="max-w-3xl mx-auto space-y-6 fade-in-up">
      {/* Progress steps */}
      <div className="flex items-center gap-2 mb-2">
        {[1,2,3].map(s => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              step >= s ? 'bg-[var(--nova-cyan)] text-black' : 'bg-[hsl(222,15%,15%)] text-muted-foreground'
            }`}>{s}</div>
            {s < 3 && <div className={`w-12 h-px ${step > s ? 'bg-[var(--nova-cyan)]' : 'bg-border'}`} />}
          </div>
        ))}
        <div className="ml-2 text-sm text-muted-foreground">
          {step === 1 ? 'Choose niche & topic' : step === 2 ? 'Configure video' : 'Review script'}
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div className="gradient-border rounded-xl p-7 space-y-6 fade-in-up">
          <div>
            <h3 className="font-bold text-lg mb-1">What's your niche?</h3>
            <p className="text-muted-foreground text-sm mb-4">Choose the category that best fits your content.</p>
            <div className="flex flex-wrap gap-2">
              {mockNiches.map(n => (
                <button
                  key={n}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    niche === n
                      ? 'border-[var(--nova-cyan)] bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)]'
                      : 'border-border/50 text-muted-foreground hover:border-[var(--nova-cyan)]/40 hover:text-foreground'
                  }`}
                  onClick={() => setNiche(n)}
                >{n}</button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Video topic</h3>
            <p className="text-muted-foreground text-sm mb-3">Enter your own topic or let AI suggest one.</p>
            <div className="flex gap-3">
              <Input
                placeholder="e.g. How to build passive income with no money"
                className="bg-[hsl(222,15%,12%)] border-border/50 focus:border-[var(--nova-cyan)]/50 h-11 flex-1"
                value={topic}
                onChange={e => setTopic(e.target.value)}
              />
              <Button variant="outline" className="border-border/50 h-11 shrink-0 font-medium" onClick={() => setTopic('Why 99% of people never build real wealth')}>
                ✦ AI Suggest
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-[var(--nova-cyan)] text-black font-bold px-8" onClick={() => setStep(2)} disabled={!niche && !topic}>
              Continue →
            </Button>
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="gradient-border rounded-xl p-7 space-y-6 fade-in-up">
          <div>
            <h3 className="font-bold text-lg mb-1">Video type</h3>
            <p className="text-muted-foreground text-sm mb-4">Choose your format.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { type: 'short', label: 'YouTube Short', desc: '60s vertical · High virality', icon: '📱' },
                { type: 'long', label: 'Long-form Video', desc: '5–15 min · Deep engagement', icon: '🖥' },
              ].map(vt => (
                <button
                  key={vt.type}
                  className={`p-5 rounded-xl border text-left transition-all ${
                    videoType === vt.type
                      ? 'border-[var(--nova-cyan)] bg-[var(--nova-cyan)]/8'
                      : 'border-border/50 hover:border-[var(--nova-cyan)]/30'
                  }`}
                  onClick={() => setVideoType(vt.type)}
                >
                  <div className="text-2xl mb-2">{vt.icon}</div>
                  <div className="font-bold text-sm mb-1">{vt.label}</div>
                  <div className="text-xs text-muted-foreground">{vt.desc}</div>
                  {videoType === vt.type && <div className="mt-2 w-2 h-2 rounded-full bg-[var(--nova-cyan)]" />}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Tone & style</h3>
            <p className="text-muted-foreground text-sm mb-4">How should the script feel?</p>
            <div className="flex flex-wrap gap-2">
              {mockTones.map(t => (
                <button
                  key={t}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                    tone === t
                      ? 'border-[var(--nova-violet)] bg-[var(--nova-violet)]/10 text-[var(--nova-violet)]'
                      : 'border-border/50 text-muted-foreground hover:border-[var(--nova-violet)]/40 hover:text-foreground'
                  }`}
                  onClick={() => setTone(t)}
                >{t}</button>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" className="border-border/50" onClick={() => setStep(1)}>← Back</Button>
            <Button className="bg-[var(--nova-cyan)] text-black font-bold px-8" onClick={generate} disabled={generating || !videoType}>
              {generating ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" /><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75" /></svg>
                  Generating script...
                </span>
              ) : '✦ Generate Script'}
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 — Script preview */}
      {step === 3 && script && (
        <div className="space-y-4 fade-in-up">
          <div className="gradient-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-bold text-lg">Your AI Script</h3>
                <p className="text-sm text-muted-foreground">{niche || 'Business & Finance'} · {videoType === 'short' ? 'YouTube Short' : 'Long-form'} · {tone || 'Energetic'}</p>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-[var(--nova-green)]/10 text-[var(--nova-green)] border-[var(--nova-green)]/20">Script ready</Badge>
              </div>
            </div>
            <div className="bg-[hsl(222,15%,10%)] rounded-xl p-5 font-mono text-sm leading-relaxed text-muted-foreground border border-border/40 max-h-80 overflow-y-auto whitespace-pre-wrap">
              {regenerating ? (
                <div className="flex items-center gap-2 text-[var(--nova-cyan)]">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25"/><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor" className="opacity-75"/></svg>
                  Regenerating script...
                </div>
              ) : script}
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <Button variant="outline" className="border-border/50" onClick={regen} disabled={regenerating}>
              ↺ Regenerate
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" className="border-border/50">⬇ Export</Button>
              <Button className="bg-[var(--nova-cyan)] text-black font-bold" onClick={() => setPage('editor')}>
                Continue to Editor →
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
