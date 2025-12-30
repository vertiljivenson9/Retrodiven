import React, { useState, useRef } from 'react';
export const LoginScreen = ({ expectedUser, onUnlock }: any) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const handleFile = (e: any) => {
    const file = e.target.files[0]; if (!file) return;
    setIsVerifying(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result.trim();
      setTimeout(() => {
        if (content.toLowerCase() === expectedUser.toLowerCase()) onUnlock();
        else { alert("ERROR: Firma de Identidad Incorrecta."); setIsVerifying(false); }
      }, 2000);
    };
    reader.readAsText(file);
  };
  return (
    <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center text-white">
      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-10 rotate-12">
        <span className="text-black font-black text-4xl -rotate-12 italic">rOS</span>
      </div>
      <h1 className="text-xl font-black uppercase tracking-widest mb-12">V-Identity Shield</h1>
      <button onClick={() => fileRef.current.click()} disabled={isVerifying} className="bg-cyan-600 px-12 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest shadow-2xl">
        {isVerifying ? "Verificando..." : "Inyectar Llave (.txt)"}
      </button>
      <input type="file" ref={fileRef} onChange={handleFile} className="hidden" accept=".txt" />
    </div>
  );
};