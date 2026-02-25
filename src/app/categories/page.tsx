"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { id: 'survival', title: 'Survie', icon: '🏕️', count: 5, color: 'from-green-500' },
  { id: 'horror', title: 'Horreur', icon: '👻', count: 8, color: 'from-red-600' },
  { id: 'action', title: 'Action', icon: '💥', count: 12, color: 'from-orange-500' },
  { id: 'multiplayer', title: 'Multijoueur', icon: '👥', count: 15, color: 'from-cyan-500' },
  { id: 'simulation', title: 'Simulation', icon: '🚜', count: 4, color: 'from-purple-500' },
  { id: 'adventure', title: 'Aventure', icon: '🗺️', count: 7, color: 'from-yellow-500' },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan-500/30">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      {/* --- HEADER AVEC LOGO RETOUR --- */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#020617]/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-1 cursor-pointer"
            >
              <span className="text-2xl font-black italic tracking-tighter text-white">PDNI</span>
              <span className="text-2xl font-black italic tracking-tighter text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,1)] transition-all">
                GAMES
              </span>
            </motion.div>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-cyan-500"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500/80">Explorer</span>
          </div>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter">
            Browse by <span className="text-cyan-500">Category</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4">
            Find your next favorite game genre
          </p>
        </motion.div>

        {/* Grille des catégories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Link href={`/categories/${cat.id}`}>
                <div className="relative h-48 rounded-[2rem] border border-white/5 bg-slate-900/40 p-8 overflow-hidden group cursor-pointer transition-all hover:border-cyan-500/30">
                  
                  {/* Effet de gradient au hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-500">
                        {cat.icon}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-black/40 px-3 py-1 rounded-full border border-white/5 group-hover:text-white group-hover:border-white/20 transition-all">
                        {cat.count} Games
                      </span>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-black uppercase italic tracking-tighter group-hover:text-cyan-400 transition-colors">
                        {cat.title}
                      </h3>
                      <div className="w-8 h-1 bg-cyan-500 mt-2 group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}