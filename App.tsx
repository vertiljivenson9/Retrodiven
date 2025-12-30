import React, { useState, useEffect } from 'react';
import { kernel } from './services/osKernel';
import { Window } from './components/Window';
import { LoginScreen } from './components/LoginScreen';
import { APP_CONFIGS } from './constants';
import { Explorer } from './apps/Explorer';
import { Settings } from './apps/Settings';
import { SearchVertil } from './apps/SearchVertil';
import { VertilStream } from './apps/VertilStream';
import { Store } from './apps/Store';

const App = () => {
  const [os, setOs] = useState({ isLocked: true, authorizedUser: 'Vertil', windows: [], files: [], wallpaper: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe' });
  useEffect(() => { const saved = kernel.getConfig(); if(saved) setOs(p=>({...p,...saved})); }, []);
  const openApp = (appId, title, icon) => {
    const win = { id: Math.random().toString(36).substring(7), appId, title, icon, zIndex: os.windows.length + 10 };
    setOs(p => ({ ...p, windows: [...p.windows, win], activeWindowId: win.id }));
  };
  if (os.isLocked) return <LoginScreen expectedUser={os.authorizedUser} onUnlock={() => setOs(p => ({...p, isLocked: false}))} />;
  return (
    <div className="fixed inset-0 bg-cover bg-center" style={{backgroundImage: \`url(\${os.wallpaper})\`}}>
      <div className="p-8 grid grid-cols-4 gap-8">
        {APP_CONFIGS.map(app => (
          <div key={app.id} onClick={() => openApp(app.id, app.name, app.icon)} className="flex flex-col items-center gap-2 cursor-pointer">
            <div className={\`w-14 h-14 \${app.color} rounded-2xl flex items-center justify-center text-white shadow-xl\`}><i className={\`fas \${app.icon} text-xl\`}></i></div>
            <span className="text-[10px] text-white font-black uppercase tracking-widest">{app.name}</span>
          </div>
        ))}
      </div>
      {os.windows.map(win => (
        <Window key={win.id} window={win} isActive={os.activeWindowId === win.id} onClose={id => setOs(p => ({...p, windows: p.windows.filter(w=>w.id!==id)}))} onFocus={id => setOs(p => ({...p, activeWindowId: id}))}>
          {win.appId === 'explorer' && <Explorer files={os.files} />}
          {win.appId === 'settings' && <Settings os={os} onUpdateOS={u => setOs(p => ({...p, ...u}))} />}
          {win.appId === 'search' && <SearchVertil />}
          {win.appId === 'stream' && <VertilStream />}
          {win.appId === 'store' && <Store onInstall={a => setOs(p => ({...p, installedApps: [...(p.installedApps||[]), a]}))} />}
        </Window>
      ))}
    </div>
  );
};
export default App;