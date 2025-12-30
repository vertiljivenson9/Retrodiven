import React from 'react';
export const Explorer = ({ files }: any) => (
  <div className="p-6 bg-black h-full text-white font-mono">
    <div className="flex gap-4 mb-8 opacity-40 text-[10px] font-black uppercase tracking-widest">
      <span>Dispositivos</span><span>C: / root</span>
    </div>
    <div className="grid grid-cols-1 gap-2">
      {files.map((f: any) => (
        <div key={f.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4">
          <i className="fas fa-file-code text-cyan-500"></i>
          <span className="text-[11px] font-bold uppercase">{f.name}</span>
          <span className="ml-auto text-[8px] opacity-30">{f.size} KB</span>
        </div>
      ))}
      {files.length === 0 && <p className="text-center py-20 opacity-20 text-[10px] uppercase font-black">Directorio Vacío</p>}
    </div>
  </div>
);