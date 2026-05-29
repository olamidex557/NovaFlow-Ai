import { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AuthPage() {
  const { page, setPage, setAuth } = useAppStore();
  const isLogin = page === 'login';
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setAuth(true); setPage('dashboard'); }, 1000);
  };

  return (
    <div className="min-h-screen mesh-bg grain flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-10">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--nova-cyan)] to-[var(--nova-violet)]  flex items-center justify-center">
            <span className="text-sm font-black text-black">N</span>
          </div>
          <span className="font-black text-xl" style={{fontFamily:'Syne,sans-serif'}}>NovaFlow <span className="text-[var(--nova-cyan)]">AI</span></span>
        </div>

        <div className="gradient-border rounded-2xl p-8">
          <h2 className="text-2xl font-black mb-1" style={{fontFamily:'Syne,sans-serif'}}>
            {isLogin ? 'Welcome back' : 'Create your account'}
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            {isLogin ? 'Sign in to your NovaFlow workspace' : 'Start your 14-day free trial — no card needed'}
          </p>

          <div className="space-y-4">
            {!isLogin && (
              <div>
                <Label className="text-xs text-muted-foreground mb-1 block">Full name</Label>
                <Input placeholder="Alex Rivera" className="bg-[hsl(222,15%,12%)] border-border/50 focus:border-[var(--nova-cyan)]/50 h-11" />
              </div>
            )}
            <div>
              <Label className="text-xs text-muted-foreground mb-1 block">Email</Label>
              <Input type="email" placeholder="you@example.com" className="bg-[hsl(222,15%,12%)] border-border/50 focus:border-[var(--nova-cyan)]/50 h-11" />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <Label className="text-xs text-muted-foreground">Password</Label>
                {isLogin && <button className="text-xs text-[var(--nova-cyan)] hover:underline" onClick={() => setPage('login')}>Forgot?</button>}
              </div>
              <Input type="password" placeholder="••••••••" className="bg-[hsl(222,15%,12%)] border-border/50 focus:border-[var(--nova-cyan)]/50 h-11" />
            </div>
            <Button className="w-full h-11 bg-[var(--nova-cyan)] text-black hover:bg-[var(--nova-cyan)]/90 font-bold mt-2" onClick={handleSubmit} disabled={loading}>
              {loading ? 'Signing in...' : isLogin ? 'Sign in →' : 'Create account →'}
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-border/50" />
            <span className="text-xs text-muted-foreground">or continue with</span>
            <div className="flex-1 h-px bg-border/50" />
          </div>

          <Button variant="outline" className="w-full h-11 border-border/50 font-medium" onClick={handleSubmit}>
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </Button>

          <p className="text-sm text-center text-muted-foreground mt-6">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button className="text-[var(--nova-cyan)] hover:underline font-medium" onClick={() => setPage(isLogin ? 'register' : 'login')}>
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          By continuing you agree to our <span className="underline cursor-pointer">Terms</span> and <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}
