import React, { useState } from 'react';
export const VertilStream = () => {
  const [url, setUrl] = useState("https://www.bing.com");
  return (
    <div className="h-full flex flex-col bg-zinc-950">
      <div className="h-12 bg-black border-b border-white/10 flex items-center px-4 gap-4">
        <input value={url} onChange={e => setUrl(e.target.value)} className="flex-1 bg-white/5 border border-white/10 rounded-lg h-8 px-4 text-[10px] text-white/80" />
      </div>
      <iframe src={url} className="flex-1 w-full border-none bg-white" />
    </div>
  );
};