// Mock data layer — replace with real API calls when backend is ready

export const mockUser = {
  id: 'u_01',
  name: 'Alex Rivera',
  email: 'alex@novaflow.ai',
  avatar: '',
  plan: 'Pro',
  credits: 2400,
  creditsTotal: 5000,
};

export const mockVideos = [
  { id: 'v1', title: 'How to Build Habits That Stick', status: 'published', type: 'short', views: 128400, date: '2024-05-10', thumbnail: '' },
  { id: 'v2', title: '10 Morning Routines of Millionaires', status: 'scheduled', type: 'long', views: 0, date: '2024-05-18', thumbnail: '' },
  { id: 'v3', title: 'AI Tools That Replace Your Entire Team', status: 'draft', type: 'short', views: 0, date: '2024-05-14', thumbnail: '' },
  { id: 'v4', title: 'Why 99% of Creators Fail', status: 'published', type: 'short', views: 54200, date: '2024-05-07', thumbnail: '' },
  { id: 'v5', title: 'The Future of Work in 2025', status: 'published', type: 'long', views: 31800, date: '2024-05-02', thumbnail: '' },
  { id: 'v6', title: 'Passive Income: Real vs Fake', status: 'processing', type: 'short', views: 0, date: '2024-05-15', thumbnail: '' },
];

export const mockAnalytics = {
  totalViews: 214400,
  totalVideos: 28,
  avgEngagement: 7.4,
  subscribers: 12840,
  weeklyData: [
    { day: 'Mon', views: 4200, engagement: 6.8 },
    { day: 'Tue', views: 5100, engagement: 7.2 },
    { day: 'Wed', views: 6800, engagement: 8.1 },
    { day: 'Thu', views: 4900, engagement: 7.0 },
    { day: 'Fri', views: 7200, engagement: 8.4 },
    { day: 'Sat', views: 8100, engagement: 7.9 },
    { day: 'Sun', views: 6400, engagement: 6.5 },
  ],
  topVideos: mockVideos.filter(v => v.views > 0).sort((a,b) => b.views - a.views),
};

export const mockChannels = [
  { id: 'ch1', name: 'Alex Rivera', handle: '@alexrivera', subscribers: 12840, connected: true, avatar: '' },
];

export const mockScheduled = [
  { id: 's1', title: '10 Morning Routines of Millionaires', date: '2024-05-18', time: '10:00 AM', channel: '@alexrivera' },
  { id: 's2', title: 'The Mindset Nobody Talks About', date: '2024-05-20', time: '2:00 PM', channel: '@alexrivera' },
  { id: 's3', title: 'Stop Wasting Time on Social Media', date: '2024-05-22', time: '9:00 AM', channel: '@alexrivera' },
];

export const mockNiches = ['Business & Finance', 'Health & Fitness', 'Tech & AI', 'Personal Development', 'Relationships', 'Travel', 'Food & Cooking', 'Education'];
export const mockTones = ['Professional', 'Casual & Friendly', 'Energetic', 'Storytelling', 'Authoritative', 'Humorous'];

export const mockScript = `🎬 HOOK (0-3s)
"Most people spend their entire lives working for money — but what if I told you there's a smarter way?"

📖 SETUP (3-8s)
Let me break down the exact framework that top 1% earners use to build passive income streams without burning out.

💡 MAIN CONTENT (8-50s)
Step 1: Identify your leverage point
Not all income is created equal. Time-for-money is a trap. Instead, focus on:
• Digital products that sell while you sleep
• Systems that replace your daily effort
• Platforms that amplify your existing knowledge

Step 2: The 80/20 of passive income
Most creators fail because they chase 10 streams at once. Pick ONE. Master it. Then scale.

Step 3: The compound effect
Small daily actions — 30 minutes of focused work — compound over 12 months into something unrecognizable.

🎯 CTA (50-60s)
"If this resonated, follow for part 2 where I break down my exact income streams. Drop a 💰 in the comments if you're ready to start."`;
