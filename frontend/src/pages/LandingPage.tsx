import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const features = [
  { icon: '✦', title: 'AI Script Generation', desc: 'Generate viral-ready scripts in seconds with topic, tone, and niche intelligence.', color: 'var(--nova-cyan)' },
  { icon: '◈', title: 'Auto Video Creation', desc: 'Transform scripts into Shorts and long-form videos with AI-powered visuals and b-roll.', color: 'var(--nova-violet)' },
  { icon: '◎', title: 'Voice Synthesis', desc: 'Studio-quality voiceovers in 40+ voices and languages — no mic required.', color: 'var(--nova-green)' },
  { icon: '⟐', title: 'Smart Scheduling', desc: 'Auto-schedule uploads at peak times across all your YouTube channels.', color: 'var(--nova-orange)' },
  { icon: '⬡', title: 'Deep Analytics', desc: 'Track views, retention, CTR, and revenue across all content — all in one dashboard.', color: 'var(--nova-cyan)' },
  { icon: '⊹', title: 'Multi-Channel Hub', desc: 'Connect unlimited YouTube accounts and manage everything from a single workspace.', color: 'var(--nova-violet)' },
];

const plans = [
  { name: 'Starter', price: 29, desc: 'For solo creators getting started', features: ['30 videos/month', '100 AI scripts', '3 YouTube channels', 'Basic analytics', 'Email support'], cta: 'Start Free Trial', highlight: false },
  { name: 'Pro', price: 79, desc: 'For serious creators & small agencies', features: ['Unlimited videos', 'Unlimited scripts', '10 YouTube channels', 'Advanced analytics', 'Priority support', 'Custom branding', 'API access'], cta: 'Get Pro', highlight: true },
  { name: 'Agency', price: 199, desc: 'For agencies managing multiple brands', features: ['Everything in Pro', 'Unlimited channels', 'White-label dashboard', 'Team seats (5)', 'Dedicated support', 'Custom integrations'], cta: 'Contact Sales', highlight: false },
];

const stats = [
  { val: '2.4M+', label: 'Videos Created' },
  { val: '48K+', label: 'Active Creators' },
  { val: '12B+', label: 'Views Generated' },
  { val: '4.9★', label: 'Average Rating' },
];

export default function LandingPage() {
  const { setPage, setAuth } = useAppStore();

  const handleDemo = () => { setAuth(true); setPage('dashboard'); };

  return (
    <div className="min-h-screen mesh-bg grain overflow-x-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--nova-cyan)] to-[var(--nova-violet)] flex items-center justify-center">
              <span className="text-xs font-black text-black">N</span>
            </div>
            <span className="font-bold text-lg" style={{fontFamily:'Syne,sans-serif'}}>NovaFlow <span className="text-[var(--nova-cyan)]">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <span className="hover:text-foreground transition-colors cursor-pointer">Docs</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setPage('login')}>Sign in</Button>
            <Button size="sm" className="bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90 font-semibold" onClick={handleDemo}>Start Free</Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-36 pb-24 px-6 relative grid-pattern">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Orbital decoration */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 -z-10">
            <div className="absolute inset-0 rounded-full border border-[var(--nova-cyan)]/10" />
            <div className="absolute inset-8 rounded-full border border-[var(--nova-violet)]/10" />
            <div className="w-3 h-3 rounded-full bg-[var(--nova-cyan)]/60 absolute top-0 left-1/2 -translate-x-1/2 blur-sm" style={{animation:'orbit 6s linear infinite'}} />
            <div className="w-2 h-2 rounded-full bg-[var(--nova-violet)]/60 absolute top-0 left-1/2 -translate-x-1/2 blur-sm" style={{animation:'orbit2 9s linear infinite'}} />
            <div className="w-2 h-2 rounded-full bg-[var(--nova-green)]/60 absolute top-0 left-1/2 -translate-x-1/2 blur-sm" style={{animation:'orbit3 7s linear infinite'}} />
          </div>

          <Badge className="mb-6 bg-[var(--nova-cyan)]/10 text-[var(--nova-cyan)] border-[var(--nova-cyan)]/20 fade-in-up">
            ✦ AI Video Automation Platform
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] mb-6 fade-in-up-1">
            Create. Schedule.<br />
            <span className="shimmer-text">Go Viral.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up-2 leading-relaxed">
            NovaFlow AI turns your ideas into YouTube-ready videos in minutes — with AI scripts, voiceovers, auto-editing, and smart scheduling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up-3">
            <Button size="lg" className="bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90 font-bold px-8 h-12 text-base" onClick={handleDemo}>
              Start creating free →
            </Button>
            <Button size="lg" variant="outline" className="border-border/60 h-12 text-base" onClick={handleDemo}>
              View live demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 fade-in-up-4">No credit card required · 14-day free trial</p>
        </div>

        {/* Dashboard preview */}
        <div className="max-w-5xl mx-auto mt-16 fade-in-up-4">
          <div className="gradient-border rounded-2xl overflow-hidden glow-cyan">
            <div className="bg-[hsl(222,18%,9%)] rounded-2xl">
              {/* Mini browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="flex-1 mx-4 bg-[hsl(222,15%,13%)] rounded-md px-3 py-1 text-xs text-muted-foreground">app.novaflow.ai/dashboard</div>
              </div>
              {/* Mini dashboard preview */}
              <div className="p-4 grid grid-cols-4 gap-3">
                {[['2.4M', 'Total Views', 'var(--nova-cyan)'], ['128', 'Videos Created', 'var(--nova-violet)'], ['12.8K', 'Subscribers', 'var(--nova-green)'], ['$4,820', 'Est. Revenue', 'var(--nova-orange)']].map(([val, label, color]) => (
                  <div key={label} className="bg-[hsl(222,15%,12%)] rounded-lg p-3 border border-border/40">
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="text-lg font-bold" style={{color}}>{val}</div>
                  </div>
                ))}
                <div className="col-span-4 bg-[hsl(222,15%,12%)] rounded-lg p-3 border border-border/40">
                  <div className="text-xs text-muted-foreground mb-3">Weekly Views</div>
                  <div className="flex items-end gap-2 h-16">
                    {[42, 51, 68, 49, 72, 81, 64].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`, background:`linear-gradient(to top, var(--nova-cyan), var(--nova-violet))`, opacity:0.7+i*0.04}} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M','T','W','T','F','S','S'].map((d,i) => <span key={i} className="text-xs text-muted-foreground flex-1 text-center">{d}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-border/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[var(--nova-cyan)] mb-1" style={{fontFamily:'Syne,sans-serif'}}>{s.val}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--nova-violet)]/10 text-[var(--nova-violet)] border-[var(--nova-violet)]/20">Platform Features</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Everything you need to<br /><span className="shimmer-text">dominate YouTube</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">One platform. All the tools. Zero guesswork.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="gradient-border rounded-xl p-6 card-hover cursor-default">
                <div className="text-2xl mb-4" style={{color: f.color}}>{f.icon}</div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[var(--nova-green)]/10 text-[var(--nova-green)] border-[var(--nova-green)]/20">Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Simple, transparent pricing</h2>
            <p className="text-muted-foreground text-lg">Start free, scale when you're ready.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-xl p-7 border card-hover ${plan.highlight ? 'border-[var(--nova-cyan)]/40 bg-[hsl(222,18%,11%)] glow-cyan' : 'border-border/40 bg-[hsl(222,18%,9%)]'}`}>
                {plan.highlight && <div className="text-xs text-[var(--nova-cyan)] font-bold mb-3 tracking-widest">MOST POPULAR</div>}
                <div className="mb-1 font-bold text-lg">{plan.name}</div>
                <div className="text-muted-foreground text-sm mb-4">{plan.desc}</div>
                <div className="mb-6">
                  <span className="text-4xl font-black" style={{fontFamily:'Syne,sans-serif'}}>${plan.price}</span>
                  <span className="text-muted-foreground text-sm">/mo</span>
                </div>
                <Button className={`w-full mb-6 font-semibold ${plan.highlight ? 'bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90' : 'variant-outline border-border/60'}`} onClick={handleDemo}>
                  {plan.cta}
                </Button>
                <ul className="space-y-2">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="text-[var(--nova-green)]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to automate your<br /><span className="shimmer-text">content machine?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">Join 48,000+ creators using NovaFlow AI to grow their channels on autopilot.</p>
          <Button size="lg" className="bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90 font-bold px-12 h-13 text-lg" onClick={handleDemo}>
            Get started for free →
          </Button>
          <p className="text-sm text-muted-foreground mt-4">14-day free trial · Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-10 px-6 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[var(--nova-cyan)] to-[var(--nova-violet)] flex items-center justify-center">
            <span className="text-xs font-black text-black">N</span>
          </div>
          <span className="font-semibold text-foreground">NovaFlow AI</span>
        </div>
        <p>© 2024 NovaFlow AI · Privacy · Terms</p>
      </footer>
    </div>
  );
}
