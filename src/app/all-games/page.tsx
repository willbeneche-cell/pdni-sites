"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Liste complète de tes jeux
const ALL_GAMES = [
  { title: "Ark - Survival Evolved", slug: "ark-survival-evolved", image: "https://ankergames.net/uploads/poster/11-2024/G3yyVt5lN5.webp", cat: "Survie" },
  { title: "Ark - Survival Ascended", slug: "ark-survival-ascended", image: "https://ankergames.net/uploads/poster/11-2024/GXo1ega1el.webp", cat: "Survie" },
  { title: "GTA V", slug: "gta-v", image: "https://ankergames.net/uploads/poster/11-2024/rC9KLPG02A.webp", cat: "Action" },
  { title: "Palworld", slug: "palworld", image: "https://ankergames.net/uploads/poster/10-2024/Q2xluhoHEe.webp", cat: "Survie" },
  { title: "Poppy Playtime", slug: "poppy-playtime", image: "https://ankergames.net/uploads/poster/02-2025/92fRpM2bRE.webp", cat: "Horreur" },
  { title: "YAPYAP", slug: "yapyap", image: "https://ankergames.net/uploads/poster/02-2026/yapyap-poster_c03I3S_1770188816.webp", cat: "Action" },
  { title: "Minecraft", slug: "minecraft", image: "https://ankergames.net/uploads/poster/11-2024/N3wybAOOpM.webp", cat: "Survie" },
  { title: "RV There Yet", slug: "rv-there-yet", image: "https://ankergames.net/uploads/poster/10-2025/nCnApk5YSA.webp", cat: "Simulation" },
  { title: "Peak", slug: "peak", image: "https://ankergames.net/uploads/poster/06-2025/IjkcUYYrie.webp", cat: "Aventure" },
  { title: "REPO", slug: "repo", image: "https://ankergames.net/uploads/poster/02-2025/nckvIRSHDS.webp", cat: "Horreur" },
  { title: "Secret Neighbor", slug: "secret-neighbor", image: "https://ankergames.net/uploads/poster/10-2024/dxPAVUXMUH.webp", cat: "Horreur" },
  { title: "BodyCam", slug: "bodycam", image: "https://ankergames.net/uploads/poster/10-2024/H1Njv5HchV.webp", cat: "Action" },
  { title: "Schedule I", slug: "schedule-i", image: "https://ankergames.net/uploads/poster/03-2025/QYl37hCfJS.webp", cat: "Horreur" },
  { title: "Sons Of The Forest", slug: "sons-of-the-forest", image: "https://ankergames.net/uploads/poster/11-2024/GJ0RPMoGrs.webp", cat: "Survie" },
  { title: "Inside The Backrooms", slug: "inside-the-backrooms", image: "https://ankergames.net/uploads/poster/10-2024/gtCM3aiaZc.webp", cat: "Horreur" },
  { title: "Escape The Backrooms", slug: "escape-the-backrooms", image: "https://ankergames.net/uploads/poster/10-2024/La83HeVh5s.webp", cat: "Horreur" },
  { title: "Lethal Company", slug: "lethal-company", image: "https://ankergames.net/uploads/poster/10-2024/xeQh3iSoMk.webp", cat: "Horreur" },
];

export default function AllGamesPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Survie", "Horreur", "Action", "Simulation", "Aventure"];

  const filteredGames = ALL_GAMES.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || game.cat === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      
      {/* HEADER LOGO */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-1 cursor-pointer">
              <span className="text-2xl font-black italic tracking-tighter">PDNI</span>
              <span className="text-2xl font-black italic tracking-tighter text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">GAMES</span>
            </motion.div>
          </Link>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            {filteredGames.length} Games Available
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 pt-32 pb-20">
        
        {/* TITRE & RECHERCHE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter">
              All <span className="text-cyan-500">Games</span>
            </h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-2">The complete PDNI library</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Barre de recherche stylisée */}
            <div className="relative group">
              <input 
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-80 bg-slate-900/50 border border-white/10 rounded-xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-cyan-500 transition-all"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</div>
            </div>
          </div>
        </div>

        {/* FILTRES RAPIDES */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                ? "bg-cyan-500 text-black shadow-[0_0_20px_rgba(6,182,212,0.4)]" 
                : "bg-white/5 text-slate-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRILLE DE JEUX AVEC ANIMATION DE FILTRE */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredGames.map((game) => (
              <motion.div
                key={game.slug}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link href={`/games/${game.slug}`}>
                  <div className="relative aspect-[2/3] rounded-2xl overflow-hidden border border-white/5 bg-slate-900">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 p-4">
                      <p className="text-[10px] text-cyan-500 font-black uppercase tracking-tighter mb-1">{game.cat}</p>
                      <h3 className="text-xs font-bold leading-tight line-clamp-2">{game.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* SI AUCUN RÉSULTAT */}
        {filteredGames.length === 0 && (
          <div className="text-center py-40">
            <h2 className="text-2xl font-black uppercase italic text-slate-700 tracking-tighter">No games found for "{search}"</h2>
          </div>
        )}
      </main>
    </div>
  );
}