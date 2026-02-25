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
              <button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95">
                DOWNLOAD GAME (1.5 GB)
              </button>
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

        {/* 3. INSTALLATION ET CONFIGURATION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guide d'installation */}
          <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-8 flex items-center gap-3">
              <span className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 text-base">📦</span> Installation Guide
            </h2>
            <div className="space-y-6">
              {[
                "Download the game patch from the link above.",
                "Unzip the content into your main game folder.",
                "Launch the game via Launcher.exe as Administrator.",
                "In-game: Create a lobby or join friends via Steam/P2P overlay."
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="flex-none w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-bold">{i+1}</span>
                  <p className="text-sm text-slate-400 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-slate-900/50 border border-white/5 rounded-[2.5rem] p-10">
            <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-8 flex items-center gap-3">
              <span className="p-2 bg-purple-500/20 rounded-lg text-purple-400 text-base">⚙️</span> Requirements
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Memory</span>
                <span className="text-white font-bold">8 GB RAM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Graphics</span>
                <span className="text-white font-bold">NVIDIA GeForce GTX 1050</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/5">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">OS</span>
                <span className="text-white font-bold">Windows 10/11</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Storage</span>
                <span className="text-white font-bold">2 GB available space</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}