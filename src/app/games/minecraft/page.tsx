import React from 'react';
import Link from 'next/link';

export default function MinecraftPage() {
  // Données extraites de l'interface Minecraft
  const game = {
    title: "Minecraft",
    subTitle: "Minecraft Windows 10 version",
    version: "Xbox Store Ver",
    size: "2.0 GB",
    releaseYear: "2009",
    releaseDate: "17 May, 2009",
    publisher: "Other Developers",
    rating: "5.0/5",
    reviews: "9 reviews",
    uploader: "Zoro",
    description: "Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art – the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not! Let's explore what Minecraft is all about!",
    genres: ["Action", "Adventure", "Survival"]
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-green-500/30">
      
      {/* 1. BREADCRUMBS */}
      <nav className="max-w-7xl mx-auto px-6 py-4 text-[10px] flex gap-2 text-slate-500 uppercase font-bold tracking-widest">
        <Link href="/" className="hover:text-white transition">Home</Link> / 
        <Link href="/games" className="hover:text-white transition">Games</Link> / 
        <span className="text-slate-300">{game.title}</span>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* --- SECTION 1 : HERO & INFOS PRINCIPALES --- */}
        <section className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mt-4">
          
          {/* GAUCHE : POSTER & ACTIONS */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-green-900/10">
              <img 
                src="https://ankergames.net/uploads/poster/11-2024/N3wybAOOpM.webp" 
                alt={game.title} 
                className="w-full object-cover aspect-[3/4.5]" 
              />
            </div>
            <button className="w-full bg-[#1e293b]/50 hover:bg-[#1e293b] text-white py-3 rounded-xl font-bold border border-white/5 transition flex items-center justify-center gap-2 uppercase tracking-tighter text-xs">
              <span className="text-xs">▷</span> Watch trailer
            </button>
          </div>

          {/* DROITE : CONTENU */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">{game.subTitle}</p>
              <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic">{game.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  ★★★★★ <span className="text-slate-300 font-bold ml-1">{game.rating}</span> 
                  <span className="text-slate-500 text-xs font-normal ml-1">• {game.reviews}</span>
                </div>
                <button className="bg-slate-800/50 hover:bg-slate-700 text-white text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/10 uppercase transition">
                  + Log in to rate
                </button>
                <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg border border-green-500/20 text-[10px] font-black uppercase tracking-tighter">
                  <span className="text-xs">👍</span> 100% recommend
                </div>
              </div>
            </div>

            {/* STATS TECHNIQUES */}
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black tracking-widest text-slate-400 border-b border-white/5 pb-6">
              <div className="bg-slate-800 text-white px-2 py-1 rounded">PC</div>
              <div>{game.size}</div>
              <div>{game.releaseYear}</div>
              <div className="text-slate-500 uppercase">Published on, 1 year ago</div>
              <div className="flex items-center gap-2 text-cyan-400 italic">
                Last Updated - 2 weeks ago (Content)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-green-500 to-emerald-700 flex items-center justify-center text-[8px] text-white">Z</div>
                <span className="text-white uppercase">Updated Content by {game.uploader}</span>
              </div>
            </div>

            {/* VERSION & FAVORITE */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="bg-[#22c55e] text-black font-black px-4 py-2 rounded-lg text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] tracking-tighter">
                {game.version}
              </span>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition font-bold italic">♡ Favorite</button>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition font-bold italic">⚐ Report</button>
              <div className="flex items-center gap-2 bg-slate-800/30 p-1 px-3 rounded-lg border border-white/5 text-xs">
                <button className="hover:text-white flex items-center gap-1 font-bold">👍 197</button>
                <span className="text-slate-700">|</span>
                <button className="hover:text-white">👎</button>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-400 leading-relaxed text-sm max-w-4xl italic">
              {game.description}
            </p>

            {/* TAGS TECHNIQUE */}
            <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest pt-4">
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Release Group / <span className="text-white">OFME</span></div>
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Released / <span className="text-white">{game.releaseDate}</span></div>
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Publisher / <span className="text-white">{game.publisher}</span></div>
            </div>

            {/* GENRES */}
            <div className="flex flex-wrap gap-2 pt-2">
              {game.genres.map((genre) => (
                <span key={genre} className="bg-slate-800/40 text-[10px] font-bold px-3 py-1 rounded border border-white/5 hover:bg-slate-700 transition cursor-pointer uppercase tracking-widest">
                  {genre}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-12 py-4 rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center gap-2 uppercase italic tracking-tighter text-lg">
                Download <span className="text-xl">⬇</span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl border border-white/10 flex items-center gap-2 uppercase italic tracking-tighter">
                📖 Guides <span className="bg-cyan-500 text-black px-1.5 py-0.5 rounded text-[8px] not-italic">1</span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl border border-white/10 flex items-center gap-2 uppercase italic tracking-tighter">
                ⚡ Game Features
              </button>
            </div>
          </div>
        </section>


        {/* --- SECTION 2 : MINECRAFT GALLERY & TECH INFO --- */}
        <section className="mt-24 space-y-16">
          
          {/* 1. GAME SCREENSHOTS GALLERY */}
          <div className="space-y-8">
            <h2 className="text-center text-xl font-black text-white uppercase italic tracking-[0.3em]">
              Game Screenshots Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://ankergames.net/uploads/screenshots/04-2025/minecraft-ankergames_1744101856.webp", // Montagnes
                "https://ankergames.net/uploads/screenshots/04-2025/minecraft-online_1744101856.webp", // Forêt dense
                "https://ankergames.net/uploads/screenshots/04-2025/minecraft-gameplay_1744101856.webp", // Plaine ensoleillée
                "https://ankergames.net/uploads/screenshots/04-2025/minecraft-screenshot_1744101856.webp"  // Vue subjective forêt
              ].map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50 aspect-video group cursor-pointer shadow-lg shadow-black/40">
                  <img 
                    src={img} 
                    alt={`Minecraft Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                </div>
              ))}
            </div>
          </div>

  

         
        </section>

{}
        <section className="mt-24 space-y-16">
          
         

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            
            {/* 2. INSTALLATION GUIDE */}
            <div className="bg-[#0f172a]/60 border border-white/5 rounded-[2.5rem] p-10 space-y-8 shadow-2xl">
              <div className="flex items-center gap-5">
                <div className="bg-green-500/10 p-4 rounded-2xl border border-green-500/20 text-green-500 text-2xl">
                  📦
                </div>
                <div>
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-xl">Installation Guide</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Step-by-step setup process</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Download Section */}
                <div className="space-y-3">
                  <h4 className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span> To download the game:
                  </h4>
                  <div className="space-y-2 ml-4">
                    <p className="text-sm text-slate-400 leading-relaxed"><span className="text-green-500 font-bold mr-2">2.</span> Download the demo version of Minecraft for Windows 10 from the official Microsoft Store.</p>
                    <p className="text-sm text-slate-400 leading-relaxed"><span className="text-green-500 font-bold mr-2">3.</span> Download the patch and unzip it into any folder.</p>
                  </div>
                </div>

                {/* Play Section */}
                <div className="space-y-3">
                  <h4 className="text-white text-[11px] font-black uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-500 rounded-full"></span> To play the game:
                  </h4>
                  <div className="bg-green-500/5 p-4 rounded-2xl border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)] ml-4">
                    <p className="text-sm text-white font-bold italic tracking-tight">
                      ✨ Launch the game via <span className="text-green-400 underline decoration-dotted">Launcher.exe</span>
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed ml-4 italic">
                    <span className="text-green-500 font-bold mr-2">6.</span> In-game: Login → Accept an invitation from a friend via Xbox Game Bar Overlay → Create a server → Play
                  </p>
                </div>
              </div>
            </div>

            {/* 3. SYSTEM REQUIREMENTS (RECOMMENDED) */}
            <div className="bg-[#0f172a]/60 border border-white/5 rounded-[2.5rem] p-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="bg-green-500/10 p-4 rounded-2xl border border-green-500/20 text-green-500 text-2xl">
                  ⌨️
                </div>
                <div>
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-xl">System Requirements</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Recommended specifications</p>
                </div>
              </div>

              <div className="relative border-t border-white/5 pt-10 mt-4">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#020617] px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] whitespace-nowrap">
                  RECOMMENDED CONFIGURATION
                </span>
                
                <div className="space-y-5">
                  {[
                    { label: "OS", val: "Windows 10" },
                    { label: "CPU", val: "Intel Core i7-6500U or A8-6600K" },
                    { label: "Memory", val: "8 GB" },
                    { label: "Graphics Card", val: "NVIDIA GeForce 940M or Radeon HD 8570D" },
                    { label: "File Size", val: "2 GB" }
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/5 pb-3 last:border-0">
                      <span className="text-slate-500 font-bold uppercase tracking-wider">{spec.label}</span>
                      <span className="text-slate-200 font-black italic text-right ml-4">{spec.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4. NAVIGATION TAGS */}
          <div className="flex flex-wrap justify-center gap-2 pt-10 border-t border-white/5">
            {[
              "Minecraft AnkerGames",
              "Minecraft Online",
              "Minecraft gameplay",
              "Minecraft Pc game",
              "Minecraft pre-installed",
              "Multiplayer"
            ].map((tag, i) => (
              <span key={i} className="bg-slate-800/30 text-slate-500 border border-white/5 px-3 py-1.5 rounded text-[10px] font-bold uppercase tracking-tighter hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}