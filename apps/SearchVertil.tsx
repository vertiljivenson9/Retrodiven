import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
export const SearchVertil = () => {
  const [q, setQ] = useState('');
  const [res, setRes] = useState('');
  const [mode, setMode] = useState('surface');
  const search = async (e: any) => {
    e.preventDefault(); setRes('Indexing neural data...');
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: mode === 'surface' ? `Search global web: ${q}` : `Simulate Tor Onion bridge access for: ${q}`,
        config: { tools: mode === 'surface' ? [{ googleSearch: {} }] : [] }
      });
      setRes(response.text);
    } catch (err) { setRes("ERROR: Connection Timeout."); }
  };
  return (
    <div className={`h-full flex flex-col ${mode === 'onion' ? 'bg-zinc-950 text-emerald-500' : 'bg-white text-zinc-900'}`}>
      <div className="p-4 border-b flex justify-between items-center shrink-0">
        <span className="text-[10px] font-black uppercase tracking-widest">SearchVertil v1.6</span>
        <div className="flex bg-black/5 p-1 rounded-lg">
          <button onClick={() => setMode('surface')} className={`px-4 py-1 rounded text-[8px] font-black ${mode === 'surface' ? 'bg-white shadow-sm' : 'opacity-40'}`}>SURFACE</button>
          <button onClick={() => setMode('onion')} className={`px-4 py-1 rounded text-[8px] font-black ${mode === 'onion' ? 'bg-emerald-600 text-black' : 'opacity-40'}`}>ONION</button>
        </div>
      </div>
      <form onSubmit={search} className="p-4 shrink-0">
        <input value={q} onChange={e => setQ(e.target.value)} className="w-full p-4 rounded-xl border border-black/10 text-xs font-mono" placeholder="Query..." />
      </form>
      <div className="flex-1 p-6 overflow-y-auto text-[11px] leading-relaxed font-mono whitespace-pre-wrap">{res}</div>
    </div>
  );
};