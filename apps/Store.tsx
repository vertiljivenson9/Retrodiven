import React, { useState } from 'react';
export const Store = ({ onInstall }: any) => {
  const [loading, setLoading] = useState(false);
  const CATALOG = [
    { id: 'app-1', name: 'CyberDash', icon: 'fa-gamepad', color: 'bg-red-600' },
    { id: 'app-2', name: 'V-Cam', icon: 'fa-camera', color: 'bg-green-600' }
  ];
  const install = (app: any) => {
    setLoading(true);
    setTimeout(() => { onInstall(app); setLoading(false); alert("Paquete VPX Instalado."); }, 2000);
  };
  return (
    <div className="p-8 bg-zinc-950 h-full text-white font-sans overflow-auto">
      <h2 className="text-xl font-black uppercase italic mb-8">Vertil Store</h2>
      <div className="grid grid-cols-1 gap-4">
        {CATALOG.map(app => (
          <div key={app.id} className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${app.color} rounded-2xl flex items-center justify-center text-white text-xl`}>
                <i className={`fas ${app.icon}`}></i>
              </div>
              <span className="font-black text-sm uppercase">{app.name}</span>
            </div>
            <button onClick={() => install(app)} className="bg-white text-black px-6 py-2 rounded-full font-black text-[9px]">INSTALAR</button>
          </div>
        ))}
      </div>
      {loading && <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center text-cyan-400 font-mono text-xs z-[1000]"><i className="fas fa-spinner animate-spin text-4xl mb-6"></i>DESCOMPRIMIENDO BLOQUE VPX...</div>}
    </div>
  );
};