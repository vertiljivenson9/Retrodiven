import React, { useState } from 'react';
export const Store = ({ onInstallApp }: any) => {
  const [loading, setLoading] = useState(false);
  const install = (app: any) => {
    setLoading(true);
    setTimeout(() => { onInstallApp(app); setLoading(false); }, 2000);
  };
  return (
    <div className="p-8 bg-zinc-950 h-full text-white">
      <h2 className="text-xl font-black uppercase mb-8 italic">Vertil Store</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center">
          <div><p className="font-black text-sm uppercase">CyberDash 2D</p><p className="text-[8px] opacity-40 uppercase">V-Game Package</p></div>
          <button onClick={() => install({ id: 'v-game-1', name: 'CyberDash', icon: 'fa-gamepad', color: 'bg-indigo-600' })} className="bg-white text-black px-6 py-2 rounded-full font-black text-[9px] uppercase">Instalar</button>
        </div>
      </div>
      {loading && <div className="fixed inset-0 bg-black/90 flex items-center justify-center font-mono text-[9px] text-cyan-500 animate-pulse">DESCOMPRIMIENDO VPX...</div>}
    </div>
  );
};