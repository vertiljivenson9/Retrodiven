import React from 'react';
export const VertilReggedit = ({ processes, services }: any) => (
  <div className="p-0 h-full bg-white text-zinc-900 font-sans">
    <div className="bg-zinc-100 p-2 border-b text-[10px] font-black uppercase">Registro de Sistema</div>
    <div className="p-4 space-y-4">
      <h3 className="text-[10px] font-black uppercase opacity-30">Procesos Activos</h3>
      {processes.map((p: any) => (
        <div key={p.pid} className="flex justify-between border-b py-2 text-xs">
          <span className="font-bold">{p.name}</span>
          <span className="text-green-600 font-black uppercase text-[9px]">{p.status}</span>
          <span className="opacity-40">{p.memoryUsage} MB</span>
        </div>
      ))}
    </div>
  </div>
);