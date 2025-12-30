import React, { useState, useEffect } from 'react';
import { kernel } from './services/osKernel';
import { Window } from './components/Window';
import { NexusForge } from './apps/NexusForge';
import { SovereignBridge } from './apps/SovereignBridge';
import { Explorer } from './apps/Explorer';
import { PowerShell } from './apps/PowerShell';
import { VertilIDE } from './apps/VertilIDE';
import { VertilMedia } from './apps/MediaPlayer';

const App = () => {
  const [os, setOs] = useState<any>({ isOff: true, windows: [], files: [], githubRepo: 'vertiljivenson9/Retrodiven' });
  
  useEffect(() => { const saved = kernel.getSystemConfig(); if(saved) setOs(p=>({...p,...saved})); }, []);

  const openApp = (appId: string, title?: string, icon?: string) => {
    const win = { id: Math.random().toString(36).substring(7), appId, title: title || appId, icon: icon || 'fa-cube', zIndex: os.windows.length + 10 };
    setOs(p => ({ ...p, windows: [...p.windows, win], activeWindowId: win.id }));
  };

  if (os.isOff) return <div className="fixed inset-0 bg-black flex items-center justify-center"><button onClick={()=>setOs(p=>({...p,isOff:false}))} className="text-white font-black tracking-widest border border-white/20 px-8 py-4 rounded-full">POWER ON</button></div>;

  return (
    <div className="fixed inset-0 bg-zinc-900 bg-cover" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe)'}}>
      <div className="p-8 grid grid-cols-4 gap-6">
        <div onClick={()=>openApp('nexusforge', 'Nexus', 'fa-tower-broadcast')} className="flex flex-col items-center gap-2 cursor-pointer text-white">
          <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-xl"><i className="fas fa-tower-broadcast text-xl"></i></div>
          <span className="text-[10px] font-black uppercase tracking-widest">Nexus</span>
        </div>
        <div onClick={()=>openApp('explorer', 'Explorer', 'fa-folder')} className="flex flex-col items-center gap-2 cursor-pointer text-white">
          <div className="w-14 h-14 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-xl"><i className="fas fa-folder text-xl"></i></div>
          <span className="text-[10px] font-black uppercase tracking-widest">Explorer</span>
        </div>
        <div onClick={()=>openApp('ide', 'Forge IDE', 'fa-code')} className="flex flex-col items-center gap-2 cursor-pointer text-white">
          <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center shadow-xl"><i className="fas fa-code text-xl"></i></div>
          <span className="text-[10px] font-black uppercase tracking-widest">Forge IDE</span>
        </div>
      </div>

      {os.windows.map((win:any) => (
        <Window key={win.id} window={win} isActive={os.activeWindowId === win.id} onClose={id=>setOs(p=>({...p,windows:p.windows.filter(w=>w.id!==id)}))} onFocus={id=>setOs(p=>({...p,activeWindowId:id}))} onMinimize={()=>{}}>
          {win.appId === 'nexusforge' && <NexusForge os={os} onUpdateOS={u=>setOs(p=>({...p,...u}))} openApp={openApp} />}
          {win.appId === 'sovereignbridge' && <SovereignBridge os={os} />}
          {win.appId === 'explorer' && <Explorer files={os.files} />}
          {win.appId === 'powershell' && <PowerShell onSyncGitHub={()=>{}} />}
          {win.appId === 'ide' && <VertilIDE onBuild={app=>setOs(p=>({...p, installedApps: [...(p.installedApps||[]), app]}))} />}
        </Window>
      ))}
    </div>
  );
};
export default App;