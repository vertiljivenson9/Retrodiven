import React, { useState } from 'react';
export const Explorer = ({ files, onAddFile }: any) => {
  const [path, setPath] = useState('/');
  const handleImport = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev: any) => {
      onAddFile({ id: Math.random().toString(36), name: file.name, size: Math.round(file.size/1024), content: ev.target.result, path });
    };
    reader.readAsText(file);
  };
  return (
    <div className="p-6 bg-zinc-950 h-full text-white font-mono flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black uppercase opacity-40">Explorador de Archivos / {path}</h3>
        <label className="bg-cyan-600 px-4 py-1.5 rounded-lg text-[9px] font-black uppercase cursor-pointer">
          Importar
          <input type="file" onChange={handleImport} className="hidden" />
        </label>
      </div>
      <div className="flex-1 overflow-auto space-y-2">
        {files.map((f: any) => (
          <div key={f.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:bg-white/10">
            <div className="flex items-center gap-4">
              <i className="fas fa-file-code text-cyan-500"></i>
              <span className="text-[11px] font-bold uppercase">{f.name}</span>
            </div>
            <span className="text-[8px] opacity-30">{f.size} KB</span>
          </div>
        ))}
      </div>
    </div>
  );
};