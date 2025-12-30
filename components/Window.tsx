import React, { useState } from 'react';
export const Window = ({ window: win, isActive, onClose, onMinimize, onFocus, children }: any) => {
  return (
    <div 
      onClick={() => onFocus(win.id)}
      className={`fixed flex flex-col overflow-hidden shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-3xl bg-zinc-950/95 ${isActive ? 'ring-2 ring-cyan-500/40' : ''}`}
      style={{ top: '10%', left: '5%', width: '90%', height: '75%', zIndex: win.zIndex, borderRadius: '24px', display: win.isMinimized ? 'none' : 'flex' }}
    >
      <div className="h-10 bg-black flex items-center justify-between px-4 shrink-0 border-b border-white/5">
        <div className="flex items-center gap-3">
          <i className={`fas ${win.icon} text-cyan-500 text-[10px]`}></i>
          <span className="text-white font-black uppercase text-[9px] tracking-widest truncate">{win.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onMinimize(win.id)} className="w-6 h-6 flex items-center justify-center hover:bg-white/5 rounded"><i className="fas fa-minus text-[8px] text-white/40"></i></button>
          <button onClick={() => onClose(win.id)} className="w-6 h-6 flex items-center justify-center hover:bg-red-600 rounded"><i className="fas fa-times text-[10px] text-white"></i></button>
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden bg-black">{children}</div>
    </div>
  );
};