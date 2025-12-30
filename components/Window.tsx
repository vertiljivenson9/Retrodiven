import React from 'react';
export const Window = ({ window: win, isActive, onClose, onFocus, children }: any) => (
  <div 
    onClick={() => onFocus(win.id)}
    className={`fixed flex flex-col overflow-hidden shadow-2xl border border-white/10 backdrop-blur-3xl bg-zinc-950/95 ${isActive ? 'ring-2 ring-cyan-500/40' : ''}`}
    style={{ top: '10%', left: '5%', width: '90%', height: '75%', zIndex: win.zIndex, borderRadius: '24px', display: win.isMinimized ? 'none' : 'flex' }}
  >
    <div className="h-10 bg-black flex items-center justify-between px-4 shrink-0 border-b border-white/5">
      <div className="flex items-center gap-3">
        <i className={`fas ${win.icon} text-cyan-500 text-[10px]`}></i>
        <span className="text-white font-black uppercase text-[9px] tracking-widest truncate">{win.title}</span>
      </div>
      <button onClick={() => onClose(win.id)} className="w-8 h-8 flex items-center justify-center hover:bg-red-600 rounded-lg transition-all">
        <i className="fas fa-times text-white text-[12px]"></i>
      </button>
    </div>
    <div className="flex-1 relative overflow-hidden bg-black">{children}</div>
  </div>
);