"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BodycamPage() {
  // Lien de téléchargement (à adapter si besoin)
  const downloadLink = "https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXMoZ5G2YnhXmBfSxefvp9l9_edM1kC80QGyYmMoLD9g9NAQ-71-mRf3ngUxuKR1xEEmE69I4mRPFKO8g1T_Yn-A6oErelsOsTU_SiEHeywV5sLjCZZCSZ_rxLVIluyI03HAaOal-mDaUreblmyT8KuxpUwNYUTQis3jLEhDHqZEpI2l0nTWDyaX5YxZnz7Cnh2kYp51wx-wU5WRnMkgthkIj-TyOvnEWH57YWlja1zZSDWLanoG5HMZapctnvjPDe3_PGiNnJQn6slBL2quYrjd2ZJ1qzCZ-9SdfcRWVFI943T3jChaEdj95yL8MWaP195KmR4k7H53dGab7Iik--Yofg-QP3hY4MqRNSAtbXktxjGlH4rWCYXHdHkV9ICNbedrAiq9qwNFLBkimwro7TOLD2GJ0JEJp8cdlfgrhX53G2qvB0AXUbqviwRNyOCjQpBtSqyhJqngR2NEdg-KF-lem9KtRV-3RrZsJLOinK4Xflfyf0jqp1AA9ozqP1WA3zc?sig=3flCOOujspSXEfVlPEbRnz-o_yh_9U5UEgWOmrrkwfY"; 

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-emerald-500/30">
      
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#020617]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="group flex items-center gap-1 cursor-pointer">
              <span className="text-2xl font-black italic tracking-tighter text-white">PDNI</span>
              <span className="text-2xl font-black italic tracking-tighter text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">GAMES</span>
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
          
          {/* Colonne Gauche: Poster & Download */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-40">
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-emerald-900/20">
                <img 
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2406770/library_600x900_2x.jpg" 
                  alt="Bodycam Poster" 
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
              
              <div className="mt-6 space-y-3">
                <a href={downloadLink} className="block w-full">
                  <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>Download (35.2 GB)</span>
                  </button>
                </a>
                <button className="w-full bg-white/5 hover:bg-white/10 text-slate-400 font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-widest border border-white/5 flex items-center justify-center gap-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                   Watch Trailer
                </button>
              </div>
            </div>
          </motion.div>

          {/* Colonne Droite: Infos & Review */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-emerald-500 text-[#020617] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md">V 21150357</span>
                <span className="bg-white/5 text-slate-400 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-white/5">PC • 35.2 GB • 2024</span>
                <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Online
                </span>
              </div>
              <h1 className="text-8xl font-black italic uppercase tracking-tighter text-white leading-none mb-2">
                Body<span className="text-emerald-500">cam</span>
              </h1>
              <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Ultra-realistic Multiplayer FPS</p>
            </div>

            <p className="text-lg text-slate-400 leading-relaxed font-medium border-l-4 border-emerald-500 pl-6">
              Bodycam is an ultra-realistic multiplayer first-person shooter game built using the latest technologies available through Unreal Engine 5. Developed by two French video game enthusiasts, the game was designed to push the boundaries of realism and photorealism.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase italic tracking-tighter text-white flex items-center gap-3">
                <span className="text-emerald-500">/</span> Game Review
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Prepare to dive into intense combat phases with your teammates, plan strategies to triumph over your opponents using your equipment. Ultra-detailed environments allow for total immersion and in-depth tactics. Enjoy classic game modes like Deathmatch or Team Deathmatch, and also a brand new Body Bomb mode designed for competition.
              </p>
            </div>

            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["Action", "Horror", "Simulation", "Indie", "Open World", "Strategy", "Shooter", "Multiplayer", "FPS", "Tactical", "PvP", "Realistic"].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>


{/* --- SECTION GLOBALE --- */}
<section className="w-full max-w-7xl mx-auto px-4 mb-20">
  
  {/* TITRE GALERIE */}
  <h2 className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-8 text-center">
    Game Screenshots Gallery
  </h2>

  {/* GRILLE IMAGES - Alignée sur toute la largeur */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
     {[ "https://ankergames.net/uploads/screenshots/02-2025/Bodycam%20Steam%20Game_1739438903.webp",
             "https://ankergames.net/uploads/screenshots/02-2025/Bodycam%20Reviews_1739438904.webp",
              "https://ankergames.net/uploads/screenshots/02-2025/Bodycam%20Online_1739438904.webp", 
              "https://ankergames.net/uploads/screenshots/02-2025/Bodycam%20AnkerGames_1739438904.webp" ].map((src, i) => (
              <motion.div 
        key={i}
        whileHover={{ scale: 1.05, zIndex: 10 }}
        className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-video"
      >
        <img src="" alt={`Screenshot ${i}`} className="w-full h-full object-cover" />
      </motion.div>
    ))}
  </div>

  {/* CONTENEUR INSTALLATION & CONFIG - Corrigé pour éviter l'écrasement */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
    
    {/* CARTE INSTALLATION */}
    <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden flex flex-col w-full">
      <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-4">
        <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-500 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-tighter text-xl text-white whitespace-nowrap">Installation Guide</h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Step-by-step setup process</p>
        </div>
      </div>
      
      <div className="p-8 space-y-6 flex-1">
        <div className="flex gap-4 items-start">
          <span className="text-emerald-500 font-black text-lg flex-shrink-0">1</span>
          <p className="text-sm text-slate-300 leading-relaxed">Game is **pre-installed / portable**, therefore you do not need to install the game.</p>
        </div>
        <div className="flex gap-4 items-start">
          <span className="text-emerald-500 font-black text-lg flex-shrink-0">2</span>
          <p className="text-sm text-slate-300 leading-relaxed">Just **extract the rar / zip file**.</p>
        </div>
        <div className="flex gap-4 items-start">
          <span className="text-emerald-500 font-black text-lg flex-shrink-0">3</span>
          <p className="text-sm text-slate-300 leading-relaxed">Simply **launch the game from Bodycam.exe** inside the game folder.</p>
        </div>

        <div className="mt-8 p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl space-y-3">
          <h4 className="text-orange-400 font-black text-xs uppercase tracking-widest flex items-center gap-2">⚠️ Important Notes</h4>
          <ul className="text-[11px] text-slate-400 space-y-2 list-disc pl-4">
            <li>Install necessary apps from **Redist** or **_CommonRedist**.</li>
            <li>Always extract game in **Antivirus / Defender excluded folder**.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* CARTE SYSTEM REQUIREMENTS */}
    <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden flex flex-col w-full">
      <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center gap-4">
        <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-500 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-tighter text-xl text-white whitespace-nowrap">System Requirements</h3>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Minimum specifications needed</p>
        </div>
      </div>

      <div className="p-8 flex-1">
        <p className="text-[10px] font-black text-center text-slate-500 uppercase tracking-[0.2em] mb-8">Requires a 64-bit processor and operating system</p>
        <div className="space-y-1">
          {[
            { label: "OS", value: "Windows 10/11" },
            { label: "Processor", value: "AMD Ryzen 7 3800X" },
            { label: "Memory", value: "16 GB RAM" },
            { label: "Graphics", value: "NVIDIA RTX 3060" },
            { label: "Storage", value: "50 GB space" },
          ].map((req, i) => (
            <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.02] gap-4">
              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest flex-shrink-0">{req.label}</span>
              <span className="text-xs font-bold text-slate-200 text-right">{req.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
                


        </section>
      </main>
    </div>
  );
}