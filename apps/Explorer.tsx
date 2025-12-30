import React, { useState } from 'react';
export const Explorer = ({ files }: any) => {
  return (
    <div className="p-6 bg-zinc-950 h-full text-white font-mono">
      <h2 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">System Explorer</h2>
      <div className="grid grid-cols-1 gap-2">
        {files.map((f: any) => (
          <div key={f.id} className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center gap-4">
            <i className="fas fa-file-code text-cyan-500"></i>
            <span className="text-[11px] font-bold">{f.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};