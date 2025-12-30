import React, { useState } from 'react';
import { PROJECT_MANIFEST } from '../services/ProjectSource';
export const NexusForge = ({ os, openApp }: any) => {
  const [pin, setPin] = useState('');
  const [locked, setLocked] = useState(true);
  if(locked) return <div className="h-full bg-black flex flex-col items-center justify-center"><input type="password" value={pin} onChange={e=>setPin(e.target.value)} className="bg-zinc-900 p-4 rounded text-center text-cyan-400" placeholder="PIN"/><button onClick={()=>pin==='2002'&&setLocked(false)} className="mt-4 text-cyan-500 font-black">AUTH</button></div>;
  return (
    <div className="h-full bg-zinc-900 text-cyan-400 p-6 font-mono">
      <div className="flex justify-between items-center mb-8"><span className="text-[10px] font-black uppercase">Infrastructure Engine</span><button onClick={()=>openApp('sovereignbridge')} className="bg-cyan-600 text-black px-4 py-2 rounded font-black text-[9px]">SYNC DNA</button></div>
      <div className="space-y-2">{PROJECT_MANIFEST.map((f,i)=><div key={i} className="p-3 bg-black/40 rounded-xl text-[10px] border border-white/5">{f.path}{f.name}</div>)}</div>
    </div>
  );
};