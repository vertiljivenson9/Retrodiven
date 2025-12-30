import React, { useState } from 'react';
import { sourceForge } from '../services/SourceForgeService';
import { PROJECT_MANIFEST } from '../services/ProjectSource';
export const SovereignBridge = ({ os }: any) => {
  const [token, setToken] = useState(os.githubToken || "");
  const [logs, setLogs] = useState(["Liaison Standby."]);
  const run = async () => {
    setLogs(p=>[...p, "Starting DNA Sync..."]);
    for(const f of PROJECT_MANIFEST) { await sourceForge.deployFile(f, token, os.githubRepo || 'vertiljivenson9/Retrodiven'); setLogs(p=>[...p, `Synced: ${f.name}`]); }
    setLogs(p=>[...p, "DONE."]);
  };
  return (
    <div className="h-full bg-black text-amber-500 p-8 font-mono">
      <h2 className="mb-6 font-black uppercase">Neural Mesh Liaison</h2>
      <input type="password" value={token} onChange={e=>setToken(e.target.value)} className="w-full bg-zinc-900 p-4 rounded border border-amber-900/30 text-amber-400 mb-4" placeholder="GitHub Jeton"/>
      <button onClick={run} className="w-full bg-amber-600 text-black py-4 font-black uppercase rounded-xl">Full Sync</button>
      <div className="mt-6 bg-zinc-950 p-4 rounded text-[9px] h-40 overflow-y-auto">{logs.map((l,i)=><div key={i}>{l}</div>)}</div>
    </div>
  );
};