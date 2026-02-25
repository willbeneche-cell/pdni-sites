"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PeakGamePage() {
  const downloadLink = "https://tunnel1.dlproxy.uk/download/WrTLulKik3KpjnMuO-0gDohCI1WaybS779E_l6yr1UHGRMFfTkE7B5t5Ys5_N2qu8u6HmpGsrEZKftnkvhgxcvRqn6Pp9kceoiJRSTvPjlVQU3D0uqhjBjfHmh9i-PrMvjGHYqHwGMu0bO9b0Jf_I2rfuPArt-dCAitGbF_T5AY6AmAiSbzU7RgJ4E3hknQrien-3iuC6GnYVdN4aL-Fv-XhlmNVi2HAX1rOAoVE8DMkPrz-90FLuV0O2iw5ZQUAFOlUL3H0eJ-cKzdhyRPYP-ZmPvTp0pa2P7pKNLWaZwhpIUzpV3scq0WyKYLRN0y7DT9CkSloKACz86skRQGNZOryVVpDMxtKJcuY3oUwa3BSP3JuHotsG3aemwpM8wAef-M1-cv_NOaJZzF23_kO6K5SjdGie4K02HrF2ApkwP8wZkpCBjXImzo_BU91DOjzLY2NajabRgzhtSZlpERPbhvhLhIdBZpVq7ZOg8LsyrD22RGDqFu3-BuDBDbItK29hf6y02rQR1dXWEVsyfDuHNTOxQ_DmYAPDKnivywKnlxMV6OTB6Ga1FM5OOfkMbJeYOdXT0sN_86pzZSIBSVnNElYlOE36Ak6x1XfpXGM73g?sig=XFf5f1olU4d5cwM8E_1b9FqyjyLL5OIkrtpTjAfpmko";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-purple-500/30">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="group flex items-center gap-1 cursor-pointer">
              <span className="text-2xl font-black italic tracking-tighter text-white">PDNI</span>
              <span className="text-2xl font-black italic tracking-tighter text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">GAMES</span>
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
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
                <img 
                  src="https://ankergames.net/uploads/poster/06-2025/IjkcUYYrie.webp" 
                  alt="PEAK Poster" 
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
              
              {/* BOUTON DOWNLOAD FONCTIONNEL */}
              <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <button className="w-full mt-6 bg-purple-600 hover:bg-purple-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                  <span>DOWNLOAD GAME (1.6 GB)</span>
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
                <span className="bg-purple-500/10 text-purple-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-purple-500/20">Co-op Online</span>
                <span className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">Version v1.54.a</span>
              </div>
              <h1 className="text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                PE<span className="text-purple-500 text-glow-purple">AK</span>
              </h1>
            </div>

            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center.
            </p>

            {/* Features list */}
            <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8 space-y-6">
              <h3 className="text-lg font-black uppercase italic tracking-tighter text-purple-400">Main Features</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-purple-500 font-bold">🧗 CLIMB:</span>
                  <p className="text-sm text-slate-400">Climb through 4 biomes on your way to the PEAK, each with their own life-threatening obstacles.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-500 font-bold">🌲 SURVIVE:</span>
                  <p className="text-sm text-slate-400">Discover a variety of helpful survival items, from energy drinks to climbing spikes.</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-500 font-bold">🗺️ NEW ISLAND EVERY DAY:</span>
                  <p className="text-sm text-slate-400">The game's map rotates every 24 hours! Try out the new layout each day.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SYSTEM REQUIREMENTS (Basé sur les standards de jeux similaires) */}
        <section className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10 max-w-2xl mx-auto">
          <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-8 text-center">System Requirements</h2>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">OS</span>
              <span className="text-white font-bold">Windows 10/11 (64-bit)</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Processor</span>
              <span className="text-white font-bold">Intel Core i5-4590 / AMD FX 8350</span>
            </div>
            <div className="flex justify-between py-3 border-b border-white/5">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Memory</span>
              <span className="text-white font-bold">8 GB RAM</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Storage</span>
              <span className="text-white font-bold">2 GB available space</span>
            </div>
          </div>
        </section>



{/* --- SECTION GALERIE D'IMAGES --- */}
        <section className="mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center font-italic">Game Screenshots Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://ankergames.net/uploads/screenshots/06-2025/peak-ankergame_1750150385.webp",
              "https://ankergames.net/uploads/screenshots/06-2025/peak-gameplay_1750150385.webp",
              "https://ankergames.net/uploads/screenshots/06-2025/peak-pc-game_1750150385.webp",
              "https://ankergames.net/uploads/screenshots/06-2025/peak-steam-game_1750150385.webp"
            ].map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl shadow-purple-500/5"
              >
                <img src={src} alt={`Peak Gameplay ${i}`} className="w-full h-full object-cover aspect-video hover:filter-none grayscale-[30%] hover:grayscale-0 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- SECTION TECHNIQUE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* INSTALLATION GUIDE */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm"
          >
            <div className="p-8 border-b border-white/5 bg-purple-500/5 flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="font-black uppercase tracking-tighter text-xl text-white italic">Installation Guide</h3>
            </div>
            
            <div className="p-8 space-y-6">
              {[
                "Game is pre-installed / portable, therefore you do not need to install the game.",
                "Just extract the rar / zip file.",
                "Simply launch the game from Run Me.bat"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="flex-none w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-black">{i + 1}</span>
                  <p className="text-sm text-slate-400 font-medium">{text}</p>
                </div>
              ))}

              <div className="mt-8 p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                <h4 className="text-red-400 font-black text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="animate-pulse">⚠️</span> Important Notes
                </h4>
                <ul className="space-y-3 text-[11px] text-slate-500 font-bold uppercase tracking-tight">
                  <li className="flex gap-2 leading-tight">• Install apps from Redist or _CommonRedist</li>
                  <li className="flex gap-2 leading-tight">• Extract in Antivirus / Defender excluded folder</li>
                  <li className="flex gap-2 leading-tight">• Always run the game as administrator</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* SYSTEM REQUIREMENTS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-sm"
          >
            <div className="p-8 border-b border-white/5 bg-purple-500/5 flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-black uppercase tracking-tighter text-xl text-white italic">System Requirements</h3>
            </div>

            <div className="p-8">
              <p className="text-[10px] font-black text-center text-slate-600 uppercase tracking-[0.3em] mb-8 italic">Requires a 64-bit processor and operating system</p>
              
              <div className="space-y-1">
                {[
                  { label: "OS", value: "Win 11" },
                  { label: "Processor", value: "Intel Core i5 @ 3.0 GHz or AMD Ryzen 5" },
                  { label: "Memory", value: "16 GB RAM" },
                  { label: "Graphics", value: "NVIDIA GeForce GTX 1060 or AMD RX 470" },
                  { label: "DirectX", value: "Version 12" },
                  { label: "Storage", value: "8 GB available space" },
                ].map((req, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/[0.03] group">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest group-hover:text-purple-400 transition-colors">{req.label}</span>
                    <span className="text-xs font-bold text-slate-200">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>




      </main>
    </div>
  );
}