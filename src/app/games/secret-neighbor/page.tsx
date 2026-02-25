"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SecretNeighborPage() {
  const downloadLink = "https://orion.dlproxy.uk/download/22caYocy6wa4RiBmhjEtCpl4vToiqPaJibJFkhtXF0DYfbItQdnx5fRsQtFUKtANaOtgZhcHR55-1M6KOh6OIqZRgkM4k9TOZEBWwuQ-YrGbKk7GSVU77oggP9vM4dFSO1v67AkRn08IZdd7gsD3-I92Cmf_gdYC9CPsGdSIHx8BUC8FVZNDE6jbbsdKr_8Yyh7wuRhAVDpB3H9MQst8eXMn9bSMUKLVY37d2HA93TNy8939ipEQFP6FHJZP5d9bVNprp_G56ski6xRNT1jEYxRLrY6u8cMgXMRidgu5-eCEoyju3fv0uo2cAL3qs48Gm2Qf_LmLapg9fCFl2KAPpYNGtxeLquWlO6Duho-gkbeAM51X_mxi1ci35k5Ba2l8u2PxYCcESSOR4s0s8sicabODb3-OLmi-urGeviV5rrQM_I27F3k_tEs4Djc-ITv3a3gm1U1ruUQWp7PnOd3smjzROTBQbauMMIkSXVu1wXRwAeQslxDSiK-l7hxL4oATxx7j560-_-Ob4Oq0bgQSMlgW8wH22pfrbppAUh0KBB2vuwgq5TyAuSrXw4gGkiqwzPLeNlzhiNqzt_V1HyWLoU9fnHn0_YXJ7_lJ-JOOr1nTuoYMj9mzVt-Zz0BOWDdv?sig=1VWrVaQAStsPbU10nySjt_bAv85IykW4HjPlTr2SvJs";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-red-500/30">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="group flex items-center gap-1 cursor-pointer">
              <span className="text-2xl font-black italic tracking-tighter text-white">PDNI</span>
              <span className="text-2xl font-black italic tracking-tighter text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">GAMES</span>
            </div>
          </Link>
          <Link href="/all-games" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition">
            ← Back to library
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Poster du jeu */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-40">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-red-900/20">
                <img 
                  src="https://ankergames.net/uploads/poster/10-2024/dxPAVUXMUH.webp" 
                  alt="Secret Neighbor Poster" 
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
              
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full mt-6 bg-red-700 hover:bg-red-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <span>DOWNLOAD GAME (2.6 GB)</span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Infos principales */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-red-500/20">Multiplayer Social Horror</span>
                <span className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">Version v1.8.8.0</span>
              </div>
              <h1 className="text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                Secret <span className="text-red-600">Neighbor</span>
              </h1>
            </div>

            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              Secret Neighbor is a multiplayer Social Horror game set in the Hello Neighbor universe. Explore the Hello Neighbor house with your friends, but beware - one of you is the Neighbor in disguise.
            </p>

            <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8 space-y-6">
               <h3 className="text-lg font-black uppercase italic tracking-tighter text-red-500">Your Goal</h3>
               <p className="text-slate-400">
                Your group has one goal - sneak around the house, collecting the keys in order to unlock the basement door. The only problem is - one of you is the Neighbor, a traitor in disguise! 
                Cooperate with your teammates, stay together or tactically split up, use your perks and abilities.
               </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
               {["Action", "Adventure", "Horror", "Indie", "Multiplayer"].map(tag => (
                 <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-400">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>
        </section>

       

{/* --- SECTION GALERIE D'IMAGES --- */}
        <section className="mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">Game Screenshots Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[ "https://ankergames.net/uploads/screenshots/02-2025/Secret%20Neighbor%20Reviews_1740046111.webp",
             "https://ankergames.net/uploads/screenshots/02-2025/Secret%20Neighbor%20Steam%20Game_1740046111.webp",
              "https://ankergames.net/uploads/screenshots/02-2025/Secret%20Neighbor%20Online_1740046111.webp",
               "https://ankergames.net/uploads/screenshots/02-2025/Secret%20Neighbor%20AnkerGames_1740046111.webp" ].map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="rounded-xl overflow-hidden border border-white/10 cursor-zoom-in bg-slate-900"
              >
                <img src={src} alt={`Screenshot ${i}`} className="w-full h-full object-cover aspect-video" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION INSTALLATION & CONFIG --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* GUIDE D'INSTALLATION */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden">
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-4">
              <div className="p-3 bg-red-500/20 rounded-xl text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tighter text-xl text-white">Installation Guide</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Step-by-step setup process</p>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-red-500 font-black text-lg">1</span>
                <p className="text-sm text-slate-300">Game is **pre-installed / portable**, therefore you do not need to install the game.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-red-500 font-black text-lg">2</span>
                <p className="text-sm text-slate-300">Just **extract the rar / zip file**.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-red-500 font-black text-lg">3</span>
                <p className="text-sm text-slate-300">Simply **launch the game from secret neighbor.exe** inside the game folder.</p>
              </div>

              {/* IMPORTANT NOTES */}
              <div className="mt-8 p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl space-y-3">
                <h4 className="text-orange-400 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    ⚠️ Important Notes
                </h4>
                <ul className="text-[11px] text-slate-400 space-y-2 list-disc pl-4">
                  <li>Install necessary apps from **Redist** or **_CommonRedist**.</li>
                  <li>Always extract game in **Antivirus / Defender excluded folder**.</li>
                  <li>Always **run the game as administrator**.</li>
                  <li>For detailed guide, make sure to read **Installation Guide.txt**.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SYSTEM REQUIREMENTS */}
          <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden">
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tighter text-xl text-white">System Requirements</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Minimum specifications needed</p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-[10px] font-black text-center text-slate-500 uppercase tracking-[0.2em] mb-8">Requires a 64-bit processor and operating system</p>
              
              <div className="space-y-1">
                {[
                  { label: "OS", value: "Windows 10" },
                  { label: "Processor", value: "Intel Core i5-4690 3.5 GHz / AMD Ryzen 3 1300X 3.5 GHz" },
                  { label: "Memory", value: "8 GB RAM" },
                  { label: "Graphics", value: "NVIDIA GeForce GTX 1060 / Radeon RX 580" },
                  { label: "DirectX", value: "Version 11" },
                  { label: "Network", value: "Broadband Internet connection" },
                  { label: "Storage", value: "5 GB available space" },
                  { label: "Sound Card", value: "Stereo. Play with good stereo." },
                ].map((req, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.02]">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{req.label}</span>
                    <span className="text-xs font-bold text-slate-200 text-right ml-4">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}