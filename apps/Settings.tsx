import React, { useState } from 'react';
import { kernel } from '../services/osKernel';
export const Settings = ({ os, onUpdateOS }: any) => {
  const [name, setName] = useState(os.authorizedUser);
  const save = () => { onUpdateOS({ authorizedUser: name }); kernel.downloadIdentityDisk(name); };
  return (
    <div className="p-8 bg-zinc-950 h-full text-white">
      <h2 className="text-xl font-black italic uppercase mb-8 text-cyan-500">Ajustes del Sistema</h2>
      <div className="space-y-6 max-w-sm">
        <label className="text-[10px] font-black uppercase opacity-40">Firma de Identidad</label>
        <input value={name} onChange={e => setName(e.target.value)} className="w-full bg-black border border-white/10 p-4 rounded-xl text-cyan-400 font-mono" />
        <button onClick={save} className="w-full bg-cyan-600 py-4 rounded-xl font-black uppercase text-[10px]">Guardar y Generar Llave .txt</button>
        <div className="pt-8 border-t border-white/5">
          <p className="text-[10px] opacity-40 uppercase">Hardware</p>
          <div className="mt-2 flex justify-between text-xs font-mono"><span>RAM</span><span>1.8 / 8 GB</span></div>
          <div className="mt-2 flex justify-between text-xs font-mono"><span>SSD</span><span>4.2 / 32 GB</span></div>
        </div>
      </div>
    </div>
  );
};