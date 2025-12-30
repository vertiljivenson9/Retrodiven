import React, { useState } from 'react';
import { kernel } from '../services/osKernel';
export const Settings = ({ os, onUpdateOS }: any) => {
  const [name, setName] = useState(os.authorizedUser);
  const save = () => { onUpdateOS({ authorizedUser: name }); kernel.downloadKey(name); };
  return (
    <div className="p-8 bg-zinc-950 h-full text-white font-sans">
      <h2 className="text-xl font-black uppercase italic mb-8 text-cyan-500">Configuración Central</h2>
      <div className="space-y-6 max-w-sm">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase opacity-40">Identidad del Núcleo</label>
          <input value={name} onChange={e=>setName(e.target.value)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-cyan-400 font-mono" />
        </div>
        <button onClick={save} className="w-full bg-cyan-600 py-4 rounded-xl font-black uppercase text-[10px]">Actualizar y Bajar Llave</button>
      </div>
    </div>
  );
};