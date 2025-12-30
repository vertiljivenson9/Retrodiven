import React, { useState } from 'react';
export const Store = ({ onInstall }: any) => {
  const install = (app: any) => {
    alert("Iniciando conexión con repositorio...");
    setTimeout(() => onInstall(app), 2000);
  };
  return (
    <div className="p-8 bg-zinc-950 h-full text-white font-sans">
      <h2 className="text-xl font-black uppercase mb-8 italic">Vertil Store</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex justify-between items-center">
          <div><p className="font-black text-sm uppercase">CyberDash 2D</p><p className="text-[8px] opacity-40">Paquete VPX</p></div>
          <button onClick={()=>install({id:'v-1', name:'CyberDash', icon:'fa-gamepad', color:'bg-red-600'})} className="bg-white text-black px-6 py-2 rounded-full font-black text-[9px]">INSTALAR</button>
        </div>
      </div>
    </div>
  );
};