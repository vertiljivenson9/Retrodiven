import React, { useState } from 'react';
import { sourceForge } from '../services/SourceForgeService';
import { PROJECT_MANIFEST } from '../services/ProjectSource';

export const SovereignBridge = ({ os, onUpdateOS }: any) => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [logs, setLogs] = useState<string[]>(["[BRIDGE] Liaison Neural prête."]);
  const [token, setToken] = useState(os.githubToken || "");

  const runSync = async () => {
    setIsSyncing(true);
    setLogs(p => [...p, ">>> INITIATING DNA MESH..."]);
    for (const file of PROJECT_MANIFEST) {
      setLogs(p => [...p, `Inyecting: ${file.name}`]);
      await sourceForge.deployFile(file, token, os.githubRepo || "vertiljivenson9/Retrodiven");
    }
    setLogs(p => [...p, ">>> MESH COMPLETE."]);
    setIsSyncing(false);
  };

  return (
    <div className="h-full bg-black text-amber-500 p-6 font-mono flex flex-col">
      <h2 className="text-[11px] font-black uppercase tracking-widest mb-6 border-b border-amber-900/30 pb-4">Sovereign Bridge v3.0</h2>
      <input type="password" value={token} onChange={e => setToken(e.target.value)} className="bg-zinc-900 border border-amber-900/30 p-4 rounded-xl text-amber-400 mb-4 outline-none" placeholder="GitHub Token" />
      <button onClick={runSync} disabled={isSyncing} className="bg-amber-600 text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-amber-500 disabled:opacity-30">Full Neural Mesh</button>
      <div className="flex-1 mt-6 bg-zinc-950 p-4 rounded-xl overflow-y-auto text-[9px] space-y-1">
        {logs.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );
};