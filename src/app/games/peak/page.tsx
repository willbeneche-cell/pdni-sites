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

      </main>
    </div>
  );
}