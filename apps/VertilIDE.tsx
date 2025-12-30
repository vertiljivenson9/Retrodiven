import React, { useState } from 'react';
export const VertilIDE = ({ onBuild }: any) => {
  const [code, setCode] = useState('<!-- Code Here -->');
  return (
    <div className="h-full bg-zinc-900 flex flex-col">
      <div className="p-4 border-b border-white/5 flex justify-between">
        <span className="text-cyan-500 text-[10px] font-black">FORGE IDE</span>
        <button onClick={() => onBuild({ id: 'custom', name: 'NewApp', icon: 'fa-cube', color: 'bg-cyan-600' })} className="bg-cyan-600 text-black px-4 py-1 rounded text-[9px] font-black">BUILD</button>
      </div>
      <textarea value={code} onChange={e => setCode(e.target.value)} className="flex-1 bg-transparent p-6 text-cyan-400 font-mono text-xs outline-none" />
    </div>
  );
};