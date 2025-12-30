import React, { useState, useEffect } from 'react';
import { OSState, WindowState, AppConfig } from './types';
import { APP_CONFIGS, DEFAULT_WALLPAPER } from './constants';
import { kernel } from './services/osKernel';
import { soundService } from './services/SoundService';

// Apps & Components
import { BootSequence } from './components/BootSequence';
import { LoginScreen } from './components/LoginScreen';
import { Window } from './components/Window';
import { Explorer } from './apps/Explorer';
import { NexusForge } from './apps/NexusForge';
import { SovereignBridge } from './apps/SovereignBridge';
import { PowerShell } from './apps/PowerShell';
import { VertilIDE } from './apps/VertilIDE';

const App: React.FC = () => {
  const [os, setOs] = useState<any>({
    booted: false, isLocked: true, isOff: true, wallpaper: DEFAULT_WALLPAPER, windows: [], files: [], installedApps: []
  });

  useEffect(() => {
    const saved = kernel.getSystemConfig();
    if (saved) setOs((prev: any) => ({ ...prev, ...saved }));
  }, []);

  const openApp = (appId: string, title?: string, icon?: string, initialData?: any) => {
    const config = APP_CONFIGS.find(a => a.id === appId);
    if (!config) return;
    soundService.playAppOpen();
    const newWindow: WindowState = {
      id: Math.random().toString(36).substring(7),
      appId: appId,
      title: title || config.name,
      icon: icon || config.icon,
      isMaximized: false,
      isMinimized: false,
      zIndex: os.windows.length + 10,
      initialData: initialData
    };
    setOs((prev: any) => ({ ...prev, windows: [...prev.windows, newWindow], activeWindowId: newWindow.id }));
  };

  if (os.isOff) return <BootSequence onBootComplete={() => setOs((prev: any) => ({ ...prev, isOff: false }))} />;
  
  return (
    <div className="fixed inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${os.wallpaper})` }}>
      <div className="p-6 grid grid-cols-4 gap-6 content-start h-[calc(100vh-48px)] overflow-y-auto no-scrollbar">
        {APP_CONFIGS.map(app => (
          <div key={app.id} onClick={() => openApp(app.id)} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-14 h-14 ${app.color} rounded-2xl flex items-center justify-center text-white shadow-xl group-active:scale-95 transition-all`}>
              <i className={`fas ${app.icon} text-xl`}></i>
            </div>
            <span className="text-[10px] text-white font-black uppercase tracking-widest text-center shadow-black drop-shadow-md">{app.name}</span>
          </div>
        ))}
      </div>
      {os.windows.map((win: any) => (
        <Window key={win.id} window={win} isActive={os.activeWindowId === win.id} onClose={() => {}} onMinimize={() => {}} onMaximize={() => {}} onFocus={() => {}}>
           {win.appId === 'nexusforge' && <NexusForge os={os} onUpdateOS={(u: any) => setOs((p: any) => ({...p, ...u}))} openApp={openApp} />}
           {win.appId === 'sovereignbridge' && <SovereignBridge os={os} onUpdateOS={(u: any) => setOs((p: any) => ({...p, ...u}))} initialData={win.initialData} />}
           {win.appId === 'powershell' && <PowerShell files={os.files} onUpdateFiles={() => {}} onSyncGitHub={() => {}} />}
        </Window>
      ))}
    </div>
  );
};
export default App;