import React from 'react';
export const VertilReggedit = ({ processes, installedApps, onUninstall }: any) => (
  <div className="h-full bg-zinc-100 flex flex-col font-sans text-zinc-900">
    <div className="bg-zinc-200 p-2 border-b text-[10px] font-black uppercase">Editor de Registro y Tareas</div>
    <div className="flex-1 overflow-auto p-4 space-y-8">
      <section>
        <h3 className="text-[9px] font-black uppercase opacity-40 mb-3">Procesos Activos</h3>
        {processes.map((p: any) => (
          <div key={p.pid} className="flex justify-between border-b border-zinc-200 py-3 text-xs">
            <span className="font-bold">{p.name} <span className="opacity-30 text-[9px]">PID: {p.pid}</span></span>
            <span className="text-green-600 font-black uppercase text-[9px]">{p.status}</span>
          </div>
        ))}
      </section>
      <section>
        <h3 className="text-[9px] font-black uppercase opacity-40 mb-3">Aplicaciones Instaladas</h3>
        {installedApps.map((a: any) => (
          <div key={a.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm mb-2 border border-zinc-200">
            <div className="flex items-center gap-3">
              <i className={`fas ${a.icon} text-cyan-600`}></i>
              <span className="font-bold text-xs uppercase">{a.name}</span>
            </div>
            <button onClick={() => onUninstall(a.id)} className="text-[9px] font-black text-red-500 uppercase">Eliminar</button>
          </div>
        ))}
      </section>
    </div>
  </div>
);