import React, { useState } from 'react';
import { soundService } from '../services/SoundService';
import { PROJECT_MANIFEST } from '../services/ProjectSource';
import { kernel } from '../services/osKernel';

export const NexusForge = ({ os, onUpdateOS, openApp }: any) => {
  const [pin, setPin] = useState('');
  const [isLocked, setIsLocked] = useState(true);

  if (isLocked) return (
    <div className="h-full bg-black flex flex-col items-center justify-center p-8 font-mono">
      <h2 className="text-cyan-500 text-[11px] font-black uppercase tracking-widest mb-8">Nexus Security</h2>
      <input type="password" value={pin} onChange={e => setPin(e.target.value)} className="bg-zinc-900 border border-cyan-900 text-cyan-400 p-4 rounded-xl text-center outline-none focus:border-cyan-500" placeholder="PIN" maxLength={4} />
      <button onClick={() => pin === '2002' ? setIsLocked(false) : setPin('')} className="mt-4 bg-cyan-600 text-black px-8 py-3 rounded-xl font-black text-[10px] uppercase">Authorize</button>
    </div>
  );

  return (
    <div className="h-full bg-zinc-900 text-cyan-400 flex flex-col font-mono">
      <div className="p-6 border-b border-white/5 flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-widest">Nexus Cloud Engine</span>
        <button onClick={() => openApp('sovereignbridge')} className="bg-cyan-600 text-black px-4 py-2 rounded-lg text-[9px] font-black uppercase">Sync Global DNA</button>
      </div>
      <div className="flex-1 p-6 overflow-y-auto space-y-2">
        {PROJECT_MANIFEST.map((f, i) => (
          <div key={i} className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between items-center">
            <span className="text-[10px]">{f.path}{f.name}</span>
            <span className="text-[8px] opacity-30 uppercase font-black">Node Verified</span>
          </div>
        ))}
      </div>
    </div>
  );
};