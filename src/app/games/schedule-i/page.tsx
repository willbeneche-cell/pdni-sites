import React from 'react';
import { motion } from 'framer-motion';

const ScheduleIPage = () => {
  const downloadLink = "https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXNz54LGaOlfYsy55haaa6o8hL2XxENJS3b_OzJZixtswrTaonoHYzIxRfAATRJKboX5XYxWsfGFEc3M-AYIihTcI6ZYp2Q4BvpEyZPl16646_OlzVnn5LARBkNAB7eaf3aulZuuB5EM8QnIjFVF8lTtyprt2PgZE52492OVP4Z7xg8_h9CxHhsOg4avkdNWCwJoDGLAKbznBQYvS8GOvuj79azK1JEfDZkcgN9yvXKNbRoR26SD53T9N4z3WA9HwbpcSwHw0mA0LmaFQyR7gTi5KSMmTWFiqZ5rjWis7IG97YokiPnAuLhWLzHDhiXLnpb4X5oH6LkJdKrOCTM5kgIpzWxlZg_Db0h-f1ttS8UDjyxC3lg4I3_c79rXCRcN78Y-4WafjpEVid_T0SFHIb07sqijpC2N_bWQvI_XCHPTuuZrEZlHTU_c_WzfSRknrFn9zQfnqNhg-bCK8ck6bsNh5knScV-x5H9P2iMAcaXJSdS6pMXo4ajCGPYV2N-U1U0?sig=FCQCRkibMEU_AcP763LNuoNIs-hsJaepeHMIR5zm754";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* --- HEADER DU JEU --- */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-12 pb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* COVER ART */}
          <div className="w-full md:w-80 shrink-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4]">
              <img 
                src="https://ankergames.net/uploads/poster/03-2025/QYl37hCfJS.webp" 
                alt="Schedule I Cover" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="w-full mt-6 py-4 bg-slate-800/50 hover:bg-slate-800 border border-white/5 rounded-2xl flex items-center justify-center gap-3 transition-all">
              <span className="text-sm font-bold uppercase tracking-widest">Watch Trailer</span>
            </button>
          </div>

          {/* INFOS JEU */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Schedule I (Co-Op) P2P</p>
              <h1 className="text-5xl font-black text-white tracking-tighter">Schedule I</h1>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-lg">V 0.4.3f3</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg">PC</span>
              <span className="px-3 py-1 bg-slate-800 text-slate-400 rounded-lg">2.6 GB</span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-2xl">
              You're a small-time drug dealer rolling into a fresh town with no cash, no product and no connections. Build your drug empire from the ground up in the grungy west-coast city of Hyland Point.
            </p>

            <div className="flex gap-4">
              <a 
                href={downloadLink}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-lg shadow-blue-600/20"
              >
                Download <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION GALERIE D'IMAGES --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center underline decoration-blue-500/50 underline-offset-8">Game Screenshots Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[ 
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20Screenshot_1742366663.webp",
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20Gameplay_1742366663.webp",
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20Online_1742366663.webp",
            "https://ankergames.net/uploads/screenshots/03-2025/Schedule%20I%20AnkerGames_1742366663.webp" 
          ].map((src, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="rounded-2xl overflow-hidden border border-white/10 cursor-zoom-in bg-slate-900 shadow-xl"
            >
              <img src={src} alt={`Screenshot ${i}`} className="w-full h-full object-cover aspect-video" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION INSTALLATION & CONFIG (CÔTE À CÔTE) --- */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* GUIDE D'INSTALLATION */}
          <div className="bg-[#0f172a]/60 border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-5">
              <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tighter text-2xl text-white">Installation Guide</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Step-by-step setup process</p>
              </div>
            </div>
            
            <div className="p-10 space-y-6 flex-1">
              {[
                { n: "1", t: "Game is **pre-installed / portable**, therefore you do not need to install the game." },
                { n: "2", t: "Just **extract the rar / zip file**." },
                { n: "3", t: "Launch your **steam client**." },
                { n: "4", t: "Simply launch the game **Run Me!.bat** from the extracted game folder or from Steam." }
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <span className="text-blue-500 font-black text-xl">{step.n}</span>
                  <p className="text-[15px] text-slate-300 leading-relaxed">{step.t}</p>
                </div>
              ))}

              <div className="mt-8 p-6 bg-orange-500/5 border border-orange-500/20 rounded-3xl space-y-4">
                <h4 className="text-orange-400 font-black text-xs uppercase tracking-widest flex items-center gap-2">⚠️ Important Notes</h4>
                <ul className="text-xs text-slate-400 space-y-2 list-disc pl-5">
                  <li>Install necessary apps from **Redist** or **_CommonRedist**.</li>
                  <li>Always extract game in **Antivirus / Defender excluded folder**.</li>
                  <li>Always **run the game as administrator**.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SYSTEM REQUIREMENTS */}
          <div className="bg-[#0f172a]/60 border border-white/5 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-5">
              <div className="p-4 bg-purple-500/20 rounded-2xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tighter text-2xl text-white">System Requirements</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Minimum specifications needed</p>
              </div>
            </div>

            <div className="p-10 flex-1">
              <p className="text-[10px] font-black text-center text-slate-500 uppercase tracking-[0.2em] mb-10 italic underline decoration-purple-500/30 underline-offset-4">
                Requires a 64-bit processor and operating system
              </p>
              
              <div className="space-y-1">
                {[
                  { label: "OS", value: "Windows 10 (64-bit)" },
                  { label: "Processor", value: "3.5GHz 6-Core or similar" },
                  { label: "Memory", value: "16 GB RAM" },
                  { label: "Graphics", value: "GeForce GTX 3060 / Radeon RX 6700" },
                  { label: "DirectX", value: "Version 12" },
                  { label: "Storage", value: "8 GB available space" },
                ].map((req, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/[0.02]">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{req.label}</span>
                    <span className="text-sm font-bold text-slate-200 text-right">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TAGS / FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 pb-20 flex flex-wrap gap-2 justify-center">
        {["Schedule I AnkerGames", "Schedule I Online", "Schedule I Gameplay", "Schedule I PC Game", "Schedule I Pre-installed"].map((tag, i) => (
          <span key={i} className="px-4 py-2 bg-slate-900/50 border border-white/5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </footer>
    </div>
  );
};

export default ScheduleIPage;