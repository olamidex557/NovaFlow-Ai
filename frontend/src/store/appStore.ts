import { create } from 'zustand';
import { mockUser } from '@/lib/api/mock';

type Page = 'landing' | 'login' | 'register' | 'dashboard' | 'create' | 'videos' | 'schedule' | 'analytics' | 'youtube' | 'settings' | 'editor';

interface AppStore {
  page: Page;
  isAuthenticated: boolean;
  user: typeof mockUser;
  sidebarOpen: boolean;
  setPage: (p: Page) => void;
  setAuth: (auth: boolean) => void;
  setSidebar: (open: boolean) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  page: 'landing',
  isAuthenticated: false,
  user: mockUser,
  sidebarOpen: true,
  setPage: (page) => set({ page }),
  setAuth: (isAuthenticated) => set({ isAuthenticated }),
  setSidebar: (sidebarOpen) => set({ sidebarOpen }),
}));
