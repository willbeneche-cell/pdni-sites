"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RvThereYetPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      
      {/* 1. HEADER / NAVBAR DE RETOUR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="group flex items-center gap-1 cursor-pointer">
              <span className="text-2xl font-black italic tracking-tighter text-white">PDNI</span>
              <span className="text-2xl font-black italic tracking-tighter text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">GAMES</span>
            </div>
          </Link>
          <Link href="/all-games" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition">
            ← Back to library
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        
        {/* 2. HERO SECTION DU JEU */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Poster du jeu */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-40">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-cyan-900/20">
                <img 
                  src="https://ankergames.net/uploads/poster/10-2025/nCnApk5YSA.webp" 
                  alt="RV There Yet Poster" 
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
<a 
  href="https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXM3a5mg8E01q2LmtxQRXiujEZsQvyzBd73k8Ohs9ICwIfqd3UtHnxkLamofcduc94Ly387lsG6FfIXCHvWNHXUW6NTvhHi_Hj1lokFJd_IkmUYtrHwU2wignMSU-5dDDCjiMqB7abNMgc0_Rl0Boy-iNkAutGNojNhPZb14BMnhhMzwr_eW9uL6jRDQPhYmOxUg8k6Gm98JCl_NiE7oApMQyLFjraYFHbrND7SMjPxQmoLclHWX4bVIQ8lfilM18hoK0vlgqO78aix_tQ5FEvwBXygHNKuUy0dp0uYQCqSTjGR1bgjJuKeBRcwu8lqvjjM66EZ_V82z0Ne_IrGmOrFvzLVxsbK5buEtqTd5B5sBq0qnJ5aBWUQ4Fooigt7BVFX09NQEjtbY_5IWMq8iQrV7AiYp5Uq0yMEvelKr27209wJwtA5VZ3nL46kUWxqX1oumgEZ4hpiN-YgsRG_aYD6EeBAHcXmCull8LLwp102w0mvsslbqdA7SppXAWtEOyz8?sig=bdpDI8HIRLl2ez4EjypC4S0xCL2R3afBQ4vZ8r-4KCE"
  target="_blank" 
  rel="noopener noreferrer"
  className="block w-full"
>
  <button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95">
    DOWNLOAD GAME (1.5 GB)
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
                <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-cyan-500/20">Co-op P2P</span>
                <span className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">Version v1.1.15619</span>
              </div>
              <h1 className="text-7xl font-black italic uppercase tracking-tighter text-white leading-none">
                RV There <span className="text-cyan-500">Yet</span>
              </h1>
            </div>

            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              You and your buddies are on your way home from a relaxing vacation but are forced to take an alternate route. Get your RV through the back country and find the exit to Route 65.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               {["Casual", "Indie", "Multiplayer", "Driving"].map(tag => (
                 <div key={tag} className="bg-slate-900/50 border border-white/5 p-3 rounded-xl text-center text-[10px] font-bold uppercase tracking-widest text-slate-300">
                   {tag}
                 </div>
               ))}
            </div>

            {/* Features list */}
            <div className="bg-slate-900/30 border border-white/5 rounded-3xl p-8 space-y-4">
              <h3 className="text-lg font-black uppercase italic tracking-tighter text-cyan-400">Game Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">🔹 Drive one RV together (up to 4 players)</li>
                <li className="flex items-center gap-2">🔹 Physics-based Winch</li>
                <li className="flex items-center gap-2">🔹 Proximity Chat & Online Co-op</li>
                <li className="flex items-center gap-2">🔹 Grill frozen meat patties</li>
              </ul>
            </div>
          </motion.div>
        </section>

        

{/* --- SECTION GALERIE D'IMAGES --- */}
        <section className="mb-20">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">Game Screenshots Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://ankergames.net/uploads/screenshots/10-2025/rv-there-yet-ankergame_AfwFTU_1761119476.webp",
              "https://ankergames.net/uploads/screenshots/10-2025/rv-there-yet-gameplay_o1Dfzo_1761119476.webp",
              "https://ankergames.net/uploads/screenshots/10-2025/rv-there-yet-pc-game_0FjSy6_1761119476.webp",
              "https://ankergames.net/uploads/screenshots/10-2025/rv-there-yet-steam-game_fz4t3d_1761119476.webp"
            ].map((src, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="rounded-xl overflow-hidden border border-white/10 cursor-zoom-in"
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
              <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <div>
                <h3 className="font-black uppercase tracking-tighter text-xl text-white">Installation Guide</h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Step-by-step setup process</p>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-cyan-500 font-black text-lg">1</span>
                <p className="text-sm text-slate-300">Game is **pre-installed / portable**, therefore you do not need to install the game.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-cyan-500 font-black text-lg">2</span>
                <p className="text-sm text-slate-300">Just **extract the rar / zip file**.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-cyan-500 font-black text-lg">3</span>
                <p className="text-sm text-slate-300">Simply **launch the game from Ride.exe** from steam.</p>
              </div>

              {/* IMPORTANT NOTES */}
              <div className="mt-8 p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl space-y-3">
                <h4 className="text-orange-400 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                   ⚠️ Important Notes
                </h4>
                <ul className="text-[11px] text-slate-400 space-y-2 list-disc pl-4">
                  <li>Install necessary apps from **Redist** or **_CommonRedist** to ensure game launches without any problems.</li>
                  <li>Always extract game in **Antivirus / Defender excluded folder**.</li>
                  <li>Always **run the game as administrator**.</li>
                  <li>For detailed guide, make sure to read **Installation Guide.txt** inside the game files.</li>
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
                  { label: "OS", value: "Windows 11" },
                  { label: "Processor", value: "Ryzen 9 3900XT or equivalent" },
                  { label: "Memory", value: "12 GB RAM" },
                  { label: "Graphics", value: "Nvidia 3080 or equivalent" },
                  { label: "DirectX", value: "Version 12" },
                  { label: "Network", value: "Broadband Internet connection" },
                  { label: "Storage", value: "3200 MB available space" },
                  { label: "Sound Card", value: "One with a microphone jack in" },
                ].map((req, i) => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.02]">
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{req.label}</span>
                    <span className="text-xs font-bold text-slate-200">{req.value}</span>
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