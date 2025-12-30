import React, { useState, useEffect } from 'react';
import { kernel } from './services/osKernel';
import { soundService } from './services/SoundService';
import { BootSequence } from './components/BootSequence';
import { Window } from './components/Window';
import { NexusForge } from './apps/NexusForge';
import { SovereignBridge } from './apps/SovereignBridge';
import { PowerShell } from './apps/PowerShell';

const App = () => {
  const [os, setOs] = useState<any>({
    isOff: true, wallpaper: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe', windows: [],
    githubRepo: 'vertiljivenson9/Retrodiven', githubToken: '', authorizedUser: 'Vertil'
  });

  useEffect(() => {
    const saved = kernel.getSystemConfig();
    if (saved) setOs((p: any) => ({ ...p, ...saved }));
  }, []);

  const openApp = (appId: string, title?: string, icon?: string, data?: any) => {
    soundService.playAppOpen();
    const win = { id: Math.random().toString(36).substring(7), appId, title: title || appId, icon: icon || 'fa-cube', zIndex: os.windows.length + 10, initialData: data };
    setOs((p: any) => ({ ...p, windows: [...p.windows, win], activeWindowId: win.id }));
  };

  if (os.isOff) return <BootSequence onBootComplete={() => setOs((p: any) => ({ ...p, isOff: false }))} />;

  return (
    <div className="fixed inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${os.wallpaper})` }}>
      <div className="p-8 grid grid-cols-4 gap-8">
        <div onClick={() => openApp('nexusforge', 'Nexus Forge', 'fa-tower-broadcast')} className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-active:scale-95 transition-all"><i className="fas fa-tower-broadcast text-2xl"></i></div>
          <span className="text-[10px] text-white font-black uppercase">Nexus Forge</span>
        </div>
        <div onClick={() => openApp('powershell', 'Terminal', 'fa-terminal')} className="flex flex-col items-center gap-2 cursor-pointer group">
          <div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center text-white shadow-xl group-active:scale-95 transition-all"><i className="fas fa-terminal text-2xl"></i></div>
          <span className="text-[10px] text-white font-black uppercase">Terminal</span>
        </div>
      </div>
      {os.windows.map((win: any) => (
        <Window key={win.id} window={win} isActive={os.activeWindowId === win.id} onClose={(id: any) => setOs((p: any) => ({...p, windows: p.windows.filter((w: any) => w.id !== id)}))} onFocus={(id: any) => setOs((p: any) => ({...p, activeWindowId: id}))}>
          {win.appId === 'nexusforge' && <NexusForge os={os} onUpdateOS={(u: any) => setOs((p: any) => ({...p, ...u}))} openApp={openApp} />}
          {win.appId === 'sovereignbridge' && <SovereignBridge os={os} onUpdateOS={(u: any) => setOs((p: any) => ({...p, ...u}))} />}
          {win.appId === 'powershell' && <PowerShell files={[]} onUpdateFiles={() => {}} onSyncGitHub={(r: any, t: any) => setOs((p: any) => ({...p, githubRepo: r, githubToken: t}))} />}
        </Window>
      ))}
    </div>
  );
};
export default App;