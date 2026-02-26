"use client"; // Obligatoire pour les animations
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Composant pour les affiches de jeux avec animation au survol
const GamePoster = ({ title, image, slug, index }: { title: string, image: string, slug: string, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group cursor-pointer"
  >
    <Link href={`/games/${slug}`}>
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/5 bg-slate-900 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
        />
        {/* Overlay progressif au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity flex items-end p-5">
          <div className="translate-y-2 group-hover:translate-y-0 transition-transform">
            <span className="text-white font-black text-xs uppercase italic tracking-tighter block mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Play Now</span>
            <span className="text-white font-bold text-sm leading-tight">{title}</span>
          </div>
        </div>
        {/* Effet de brillance (Glossy) au hover */}
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
    </Link>
  </motion.div>
);

export default function Home() {
  const trendingGames = [
    { title: "Ark - Survival Evolved", slug: "ark-survival-evolved", image: "https://ankergames.net/uploads/poster/11-2024/G3yyVt5lN5.webp" },
    { title: "Ark - Survival Ascended", slug: "ark-survival-ascended", image: "https://ankergames.net/uploads/poster/11-2024/GXo1ega1el.webp" },
    { title: "GTA V", slug: "gta-v", image: "https://ankergames.net/uploads/poster/11-2024/rC9KLPG02A.webp" },
    { title: "Palworld", slug: "palworld", image: "https://ankergames.net/uploads/poster/10-2024/Q2xluhoHEe.webp" },
    { title: "Poppy Playtime", slug: "poppy-playtime", image: "https://ankergames.net/uploads/poster/02-2025/92fRpM2bRE.webp" },
    { title: "YAPYAP", slug: "yapyap", image: "https://ankergames.net/uploads/poster/02-2026/yapyap-poster_c03I3S_1770188816.webp" },
    { title: "Minecraft", slug: "minecraft", image: "https://ankergames.net/uploads/poster/11-2024/N3wybAOOpM.webp" },
    { title: "RV There Yet", slug: "rv-there-yet", image: "https://ankergames.net/uploads/poster/10-2025/nCnApk5YSA.webp" },
    { title: "Peak", slug: "peak", image: "https://ankergames.net/uploads/poster/06-2025/IjkcUYYrie.webp" },
    { title: "REPO", slug: "repo", image: "https://ankergames.net/uploads/poster/02-2025/nckvIRSHDS.webp" },
    { title: "Secret Neighbor", slug: "secret-neighbor", image: "https://ankergames.net/uploads/poster/10-2024/dxPAVUXMUH.webp" },
    { title: "BodyCam", slug: "bodycam", image: "https://ankergames.net/uploads/poster/10-2024/H1Njv5HchV.webp" },
    { title: "Schedule I", slug: "schedule-i", image: "https://ankergames.net/uploads/poster/03-2025/QYl37hCfJS.webp" },
    { title: "Sons Of The Forest", slug: "sons-of-the-forest", image: "https://ankergames.net/uploads/poster/10-2024/gtCM3aiaZc.webp" },
    { title: "Inside The Backrooms", slug: "inside-the-backrooms", image: "https://ankergames.net/uploads/poster/11-2024/GJ0RPMoGrs.webp" },
    { title: "Escape The Backrooms", slug: "escape-the-backrooms", image: "https://ankergames.net/uploads/poster/10-2024/La83HeVh5s.webp" },
    { title: "Lethal Company", slug: "lethal-company", image: "https://ankergames.net/uploads/poster/10-2024/xeQh3iSoMk.webp" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* EFFET DE FOND : Glows animés */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* 1. NAVBAR */}
      <header className="flex items-center justify-between px-8 py-5 bg-[#020617]/40 backdrop-blur-2xl sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-12">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black italic tracking-tighter flex items-center gap-1 cursor-pointer"
          >
            <span className="text-white">PDNI</span>
            <span className="text-cyan-500 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">GAMES</span>
          </motion.div>
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link href="/all-games" className="hover:text-cyan-400 transition-colors">All Games</Link>
       <Link href="/categories" className="hover:text-cyan-400 transition-colors">Categories</Link>
            <Link href="#" className="text-white border-b-2 border-cyan-500 pb-1">Trending</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition">Login</button>
          <button className="text-xs font-black uppercase tracking-widest bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-cyan-900/20 active:scale-95">
            Join Community
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto p-6 md:p-10 space-y-16 relative z-10">
        
        {/* 2. HERO SECTION DYNAMIQUE */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 bg-slate-900/50 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent z-10" />
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 10 }}
            src="https://ankergames.net/uploads/poster/11-2024/cover-7hCoHIlLND.webp" 
            className="w-full h-[600px] object-cover opacity-60" 
            alt="Hero background"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-20 max-w-3xl space-y-8">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full border border-cyan-500/30">
                Featured Game
              </span>
              <h1 className="text-7xl md:text-8xl font-black text-white italic tracking-tighter uppercase mt-6 leading-[0.85]">
                Ark <br /> <span className="text-cyan-500">Ascended</span>
              </h1>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <Link href="/games/ark-survival-ascended" className="group relative bg-white text-black font-black px-10 py-4 rounded-2xl transition-all hover:scale-105 overflow-hidden">
                <span className="relative z-10">DOWNLOAD NOW →</span>
                <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <button className="text-white font-bold border border-white/10 px-10 py-4 rounded-2xl hover:bg-white/5 transition">
                Gameplay
              </button>
            </motion.div>
          </div>
        </motion.section>

        {/* 3. GAME GRID AVEC TITRE STYLISÉ */}
        <div className="space-y-10">
          <div className="flex items-end justify-between border-b border-white/5 pb-6">
            <div>
              <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">Trending Games</h2>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-2">Most played this week</p>
            </div>
            <div className="flex gap-2">
                <div className="w-12 h-[2px] bg-cyan-500"></div>
                <div className="w-4 h-[2px] bg-slate-700"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {trendingGames.map((game, i) => (
              <GamePoster key={i} index={i} {...game} />
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER SIMPLE & CLEAN */}
      <footer className="mt-20 border-t border-white/5 p-10 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">
        © 2026 PDNI GAMES - THE NEXT GENERATION OF GAMING
      </footer>
    </div>
  );
}