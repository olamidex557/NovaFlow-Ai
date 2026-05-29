import { useAppStore } from '@/store/appStore';
import LandingPage from '@/pages/LandingPage';
import AuthPage from '@/pages/AuthPage';
import DashboardShell from '@/pages/DashboardShell';

export default function App() {
  const { page } = useAppStore();

  if (page === 'landing') return <LandingPage />;
  if (page === 'login' || page === 'register') return <AuthPage />;
  return <DashboardShell />;
}
