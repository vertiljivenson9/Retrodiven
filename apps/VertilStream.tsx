import React, { useState } from 'react';
export const VertilStream = () => {
  const [url, setUrl] = useState("https://vertil-stream.netlify.app");
  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="h-12 bg-black flex items-center px-4 border-b border-white/10">
        <input value={url} onChange={e => setUrl(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-[10px] text-white/50" />
      </div>
      <iframe src={url} className="flex-1 w-full border-none bg-white" allow="autoplay; encrypted-media; fullscreen" />
    </div>
  );
};