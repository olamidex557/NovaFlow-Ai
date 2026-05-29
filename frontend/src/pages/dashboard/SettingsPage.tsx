import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';

const tabs = ['Profile', 'Billing', 'API Keys', 'Preferences'];

export default function SettingsPage() {
  const { user } = useAppStore();
  const [tab, setTab] = useState('Profile');
  const [saved, setSaved] = useState(false);

  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="max-w-4xl mx-auto space-y-5 fade-in-up">
      {/* Tabs */}
      <div className="flex gap-1 bg-[hsl(222,15%,12%)] rounded-lg p-1 w-fit">
        {tabs.map(t => (
          <button
            key={t}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              tab === t ? 'bg-[var(--nova-cyan)] text-black' : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setTab(t)}
          >{t}</button>
        ))}
      </div>

      {tab === 'Profile' && (
        <div className="gradient-border rounded-xl p-7 space-y-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--nova-cyan)] to-[var(--nova-violet)] flex items-center justify-center text-black font-black text-2xl">
              {user.name[0]}
            </div>
            <div>
              <h3 className="font-bold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <button className="text-xs text-[var(--nova-cyan)] hover:underline mt-1">Change avatar</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">Full name</Label>
              <Input defaultValue={user.name} className="bg-[hsl(222,15%,12%)] border-border/50 h-10" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">Email</Label>
              <Input defaultValue={user.email} className="bg-[hsl(222,15%,12%)] border-border/50 h-10" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">Default niche</Label>
              <Input placeholder="e.g. Business & Finance" className="bg-[hsl(222,15%,12%)] border-border/50 h-10" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">Website</Label>
              <Input placeholder="https://yoursite.com" className="bg-[hsl(222,15%,12%)] border-border/50 h-10" />
            </div>
          </div>
          <Button className={`font-bold ${saved ? 'bg-[var(--nova-green)] text-black' : 'bg-[var(--nova-cyan)] text-black'}`} onClick={save}>
            {saved ? '✓ Saved!' : 'Save changes'}
          </Button>
        </div>
      )}

      {tab === 'Billing' && (
        <div className="space-y-4">
          <div className="gradient-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold">Pro Plan</h3>
                <p className="text-sm text-muted-foreground">$79 / month · Renews Jun 15, 2024</p>
              </div>
              <Badge className="bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)] border-[var(--nova-cyan)]/20">Active</Badge>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Credits used</span>
                <span>{user.credits.toLocaleString()} / {user.creditsTotal.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-[hsl(222,15%,18%)] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${(user.credits/user.creditsTotal)*100}%`, background:'linear-gradient(90deg, var(--nova-cyan), var(--nova-violet))'}} />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-border/50 text-sm">Manage subscription</Button>
              <Button variant="outline" className="border-border/50 text-sm">View invoices</Button>
            </div>
          </div>
          <div className="gradient-border rounded-xl p-6">
            <h3 className="font-bold mb-4">Payment Method</h3>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[hsl(222,15%,12%)] border border-border/40">
              <div className="w-10 h-7 rounded bg-[hsl(222,15%,20%)] flex items-center justify-center text-xs font-bold">VISA</div>
              <span className="text-sm">•••• •••• •••• 4242</span>
              <span className="text-xs text-muted-foreground ml-auto">Expires 12/26</span>
            </div>
            <button className="text-xs text-[var(--nova-cyan)] hover:underline mt-3">+ Add new card</button>
          </div>
        </div>
      )}

      {tab === 'API Keys' && (
        <div className="gradient-border rounded-xl p-6 space-y-4">
          <div>
            <h3 className="font-bold mb-1">API Keys</h3>
            <p className="text-sm text-muted-foreground mb-5">Use these keys to access the NovaFlow API programmatically.</p>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[hsl(222,15%,11%)] border border-border/40 font-mono text-sm">
              <span className="flex-1 text-muted-foreground">nf_live_••••••••••••••••••••••••••••••••</span>
              <button className="text-xs text-[var(--nova-cyan)] hover:underline">Reveal</button>
              <button className="text-xs text-muted-foreground hover:text-foreground">Copy</button>
            </div>
          </div>
          <Button variant="outline" className="border-border/50 text-sm">+ Generate new key</Button>
          <div className="border-t border-border/30 pt-4">
            <Badge className="bg-[var(--nova-violet)]/10 text-[var(--nova-violet)] border-[var(--nova-violet)]/20 mb-2">Coming Soon</Badge>
            <p className="text-sm text-muted-foreground">Full API documentation and webhook support launching in Q3 2024.</p>
          </div>
        </div>
      )}

      {tab === 'Preferences' && (
        <div className="gradient-border rounded-xl p-6 space-y-5">
          {[
            { label: 'Email notifications', desc: 'Receive updates when videos are processed', on: true },
            { label: 'Auto-optimize posting time', desc: 'Let AI pick the best time to publish', on: true },
            { label: 'Auto-generate captions', desc: 'Always include captions in new videos', on: false },
            { label: 'Dark mode', desc: 'Always use dark interface', on: true },
            { label: 'Usage reports', desc: 'Weekly summary of your account activity', on: false },
          ].map(p => (
            <div key={p.label} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
              <div>
                <div className="text-sm font-medium">{p.label}</div>
                <div className="text-xs text-muted-foreground">{p.desc}</div>
              </div>
              <Switch defaultChecked={p.on} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
