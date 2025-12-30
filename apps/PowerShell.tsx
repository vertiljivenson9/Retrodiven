import React, { useState } from 'react';
export const PowerShell = ({ onSyncGitHub }: any) => {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState(['retroOS PowerShell v1.4', 'Ready.']);
  return (
    <div className="h-full bg-black text-indigo-300 font-mono p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto">{logs.map((l,i)=><div key={i}>{l}</div>)}</div>
      <form onSubmit={e => { e.preventDefault(); setLogs(p=>[...p, `PS> ${input}`]); setInput(''); }} className="mt-4 flex gap-2">
        <span>PS></span><input value={input} onChange={e=>setInput(e.target.value)} className="bg-transparent outline-none flex-1 text-white"/>
      </form>
    </div>
  );
};