import React, { useState } from 'react';
import { kernel } from '../services/osKernel';
export const Settings = ({ os, onUpdateOS }: any) => {
  const [name, setName] = useState(os.authorizedUser);
  const wallpapers = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e"
  ];
  const save = () => { 
    onUpdateOS({ authorizedUser: name }); 
    kernel.downloadIdentityKey(name);
    alert("Identidad Guardada. Llave .txt generada.");
  };
  return (
    <div className="p-8 bg-zinc-950 h-full text-white font-sans overflow-auto">
      <h2 className="text-xl font-black uppercase italic mb-8 text-cyan-500">Ajustes del Sistema</h2>
      <div className="space-y-8 max-w-sm">
        <section className="space-y-4">
          <label className="text-[10px] font-black uppercase opacity-40">Firma de Identidad (Núcleo)</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-cyan-400 font-mono" />
          <button onClick={save} className="w-full bg-cyan-600 py-4 rounded-xl font-black uppercase text-[10px]">Guardar y Generar Llave Física</button>
        </section>
        <section className="space-y-4">
          <label className="text-[10px] font-black uppercase opacity-40">Fondo de Pantalla</label>
          <div className="grid grid-cols-3 gap-2">
            {wallpapers.map((wp, i) => (
              <div key={i} onClick={() => onUpdateOS({ wallpaper: wp })} className="aspect-video bg-cover bg-center rounded-lg border border-white/10 cursor-pointer hover:border-cyan-500" style={{ backgroundImage: `url(${wp})` }}></div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};