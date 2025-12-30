import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
export const SearchVertil = () => {
  const [q, setQ] = useState('');
  const [res, setRes] = useState('');
  const [mode, setMode] = useState('surface');
  const search = async (e: any) => {
    e.preventDefault(); setRes('Buscando...');
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: mode === 'surface' ? "Search global: " + q : "Simulate onion access for: " + q,
      config: { tools: mode === 'surface' ? [{ googleSearch: {} }] : [] }
    });
    setRes(model.text);
  };
  return (
    <div className={`h-full flex flex-col ${mode === 'onion' ? 'bg-zinc-950 text-emerald-500' : 'bg-white text-black'}`}>
      <div className="p-4 border-b flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-widest">SearchVertil v1.4</span>
        <div className="flex bg-black/5 p-1 rounded-lg">
          <button onClick={() => setMode('surface')} className={`px-4 py-1 rounded text-[8px] font-black ${mode === 'surface' ? 'bg-white' : ''}`}>SURFACE</button>
          <button onClick={() => setMode('onion')} className={`px-4 py-1 rounded text-[8px] font-black ${mode === 'onion' ? 'bg-emerald-600 text-black' : ''}`}>ONION</button>
        </div>
      </div>
      <form onSubmit={search} className="p-6">
        <input value={q} onChange={e => setQ(e.target.value)} className="w-full p-4 rounded-xl border border-black/10 text-xs" placeholder="Query..." />
      </form>
      <div className="flex-1 p-6 overflow-y-auto text-xs whitespace-pre-wrap">{res}</div>
    </div>
  );
};