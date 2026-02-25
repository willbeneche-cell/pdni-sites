"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ScheduleIPage = () => {
  const downloadLink = "https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXNz54LGaOlfYsy55haaa6o8hL2XxENJS3b_OzJZixtswrTaonoHYzIxRfAATRJKboX5XYxWsfGFEc3M-AYIihTcI6ZYp2Q4BvpEyZPl16646_OlzVnn5LARBkNAB7eaf3aulZuuB5EM8QnIjFVF8lTtyprt2PgZE52492OVP4Z7xg8_h9CxHhsOg4avkdNWCwJoDGLAKbznBQYvS8GOvuj79azK1JEfDZkcgN9yvXKNbRoR26SD53T9N4z3WA9HwbpcSwHw0mA0LmaFQyR7gTi5KSMmTWFiqZ5rjWis7IG97YokiPnAuLhWLzHDhiXLnpb4X5oH6LkJdKrOCTM5kgIpzWxlZg_Db0h-f1ttS8UDjyxC3lg4I3_c79rXCRcN78Y-4WafjpEVid_T0SFHIb07sqijpC2N_bWQvI_XCHPTuuZrEZlHTU_c_WzfSRknrFn9zQfnqNhg-bCK8ck6bsNh5knScV-x5H9P2iMAcaXJSdS6pMXo4ajCGPYV2N-U1U0?sig=FCQCRkibMEU_AcP763LNuoNIs-hsJaepeHMIR5zm754";

  return (
    <div className="min-h-screen bg-[#050814] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
          
          {/* Affiche du jeu (Style Premium) */}
          <div className="w-full max-w-[320px] shrink-0 group">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 aspect-[3/4]">
              <img 
                src="https://ankergames.net/uploads/poster/03-2025/QYl37hCfJS.webp" 
                alt="Schedule I Cover" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-60"></div>
            </div>
            <button className="w-full mt-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-sm group">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-white group-hover:text-blue-400 transition-colors">Watch Trailer</span>
            </button>
          </div>

          {/* Infos détaillées */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-md border border-blue-500/30">P2P Online</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Released Dec 10, 2024</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-white tracking-tighter italic">SCHEDULE I</h1>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-black">V 0.4.3f3</span>
              <span className="px-4 py-2 bg-slate-800/50 text-slate-400 border border-white/5 rounded-xl text-xs font-black uppercase">PC</span>
              <span className="px-4 py-2 bg-slate-800/50 text-slate-400 border border-white/5 rounded-xl text-xs font-black uppercase">2.6 GB</span>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-3xl border-l-2 border-blue-500/30 pl-6">
              Produce a <span className="text-white italic">range of drugs</span> to satisfy your customers, each with its own unique production process. Build your drug empire from the ground up in the grungy west-coast city of Hyland Point.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a 
                href={downloadLink}
                className="px-12 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-[1.5rem] font-black uppercase tracking-widest flex items-center gap-4 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1"
              >
                Download Now <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
              <button className="px-8 py-5 bg-slate-800/40 hover:bg-slate-800 border border-white/10 rounded-[1.5rem] text-white font-black uppercase tracking-widest transition-all">
                Game Features
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center mb-12">
           <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-500 mb-2">Visual Showcase</h2>
           <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20Screenshot_1742366663.webp",
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20Gameplay_1742366663.webp",
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20Online_1742366663.webp",
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20AnkerGames_1742366663.webp" 
          ].map((src, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl relative group"
            >
              <img src={src} alt={`Screenshot ${i}`} className="w-full h-full object-cover aspect-video group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- TECHNICAL SECTION (Grid 2 cols) --- */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Installation Box */}
          <div className="bg-[#0c1226] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">Install Guide</h3>
            </div>

            <div className="space-y-6 relative z-10">
              {[
                { n: "01", t: "Game is **pre-installed**. No installer needed." },
                { n: "02", t: "Extract the **RAR/ZIP** file carefully." },
                { n: "03", t: "Launch your **Steam client** (Required)." },
                { n: "04", t: "Run **Run Me!.bat** as Administrator." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start group/item">
                  <span className="text-blue-500 font-black text-lg font-mono opacity-50 group-hover/item:opacity-100 transition-opacity">{step.n}</span>
                  <p className="text-slate-300 font-medium leading-relaxed">{step.t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specs Box */}
          <div className="bg-[#0c1226] border border-white/5 rounded-[3rem] p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">Requirements</h3>
            </div>

            <div className="space-y-4">
              {[
                { l: "OS", v: "Windows 10 (64-bit)" },
                { l: "CPU", v: "3.5GHz 6-Core" },
                { l: "RAM", v: "16 GB" },
                { l: "GPU", v: "RTX 3060 / RX 6700" },
                { l: "DISK", v: "8 GB available" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.l}</span>
                  <span className="text-sm font-bold text-white uppercase">{item.v}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Footer Tags */}
      <div className="max-w-7xl mx-auto px-6 pb-20 flex flex-wrap gap-3 justify-center opacity-40 hover:opacity-100 transition-opacity">
        {["Schedule I", "P2P Co-Op", "AnkerGames", "Multiplayer", "Simulation"].map(tag => (
          <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 border border-white/10 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ScheduleIPage;