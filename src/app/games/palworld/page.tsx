import React from 'react';
import Link from 'next/link';

export default function PalworldPage() {
  // Données spécifiques à Palworld extraites de l'image
  const game = {
    title: "Palworld",
    subTitle: "Palworld (Co-Op) PDNI",
    version: "V 0.7.1.86065",
    size: "24.9 GB",
    releaseYear: "2024",
    releaseDate: "19 Jan, 2024",
    publisher: "Pocketpair",
    image: "https://ankergames.net/uploads/poster/10-2024/Q2xluhoHEe.webp", // Remplacez par votre lien réel
    description: "In this game, you can peacefully live alongside mysterious creatures known as Pals or risk your life to drive off a ruthless poaching syndicate. Pals can be used to fight, or they can be made to work on farms or factories. You can even sell them or eat them!",
    genres: ["Action", "Adventure", "RPG", "Indie", "Multiplayer"]
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* 1. NAVIGATION / BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-[10px] flex gap-2 text-slate-500 uppercase font-bold tracking-widest">
        <Link href="/" className="hover:text-white transition">Home</Link> / 
        <Link href="/games" className="hover:text-white transition">Games</Link> / 
        <span className="text-slate-300">{game.title}</span>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* --- SECTION PRINCIPALE (HERO) --- */}
        <section className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mt-4">
          
          {/* COLONNE GAUCHE : POSTER & TRAILER */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              <img src={game.image} alt={game.title} className="w-full object-cover aspect-[3/4.5]" />
            </div>
            <button className="w-full bg-[#1e293b]/50 hover:bg-[#1e293b] text-white py-3 rounded-xl font-bold border border-white/5 transition flex items-center justify-center gap-2">
              <span className="text-xs">▷</span> Watch trailer
            </button>
            <div className="bg-slate-800/20 border border-white/5 rounded-xl p-1 flex justify-between text-[10px] font-black uppercase">
                <button className="bg-green-500/10 text-green-400 px-4 py-2 rounded-lg border border-green-500/20">Multiplayer...</button>
                <button className="text-slate-500 px-4 py-2">Edition</button>
            </div>
          </div>

          {/* COLONNE DROITE : INFOS & ACTIONS */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">{game.subTitle}</p>
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">{game.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-orange-400 text-sm">
                  ★★★★☆ <span className="text-white font-bold ml-1">4.5/5</span> <span className="text-slate-500 text-xs font-normal">• 6 reviews</span>
                </div>
                <button className="bg-slate-800/50 hover:bg-slate-700 text-white text-[10px] font-black px-3 py-1.5 rounded-lg border border-white/10 uppercase transition">
                  + Log in to rate
                </button>
                <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] font-black border border-green-500/20 uppercase">
                  👍 83% recommend
                </div>
                <button className="text-cyan-500 text-xs font-bold hover:underline italic">Read reviews ❯</button>
              </div>
            </div>

            {/* BARRE TECHNIQUE */}
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-black tracking-widest text-slate-400 border-b border-white/5 pb-6">
              <div className="bg-slate-800 text-white px-2 py-1 rounded">PC</div>
              <div>{game.size}</div>
              <div>{game.releaseYear}</div>
              <div className="text-slate-500 uppercase">Published on, 1 year ago</div>
              <div className="flex items-center gap-2 text-cyan-400 italic">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Last Updated - 2 weeks ago (Content)
              </div>
            </div>

            {/* ACTIONS VERSION */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="bg-[#22c55e] text-black font-black px-4 py-2 rounded-lg text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] tracking-tighter">
                {game.version}
              </span>
              <button className="bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 px-4 py-2 rounded-lg text-xs border border-orange-500/20 transition font-black flex items-center gap-2">
                ● Update Available <span className="text-[8px]">▼</span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition font-bold italic">♡ Favorite</button>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition font-bold italic">⚐ Report</button>
              <div className="flex items-center gap-2 bg-slate-800/30 p-1 px-3 rounded-lg border border-white/5 text-xs">
                <button className="hover:text-white flex items-center gap-1 font-bold">👍 123</button>
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
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Release Group / <span className="text-white">PDNI</span></div>
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

            {/* BOUTONS DE TÉLÉCHARGEMENT */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a href="https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXPx_kogi7e08IJGzJY5q05_s9fK5N5XOPwb9rrbmSO430llvP5yiuw01v2cbAsEK3wFfoagwzYFEhdCtqXtHvcTuBasQ_uJVwhU4qQ1incTI7xj7XXdHwR5mAlgFtkLXmjYyBnYwAGXLdtSHEVcSVjz6L9vhgr1tDK5Aj0UdY8vQ6izYmcBb7MMXKRMN5MHKc0OwQwbTs_pITKRF_O5EuDoPkob0KKDZ9LrUJHlNqBaaomuX-XGRFbYAYc095GPlh6vm7Wn3hn4VJGm8Z_R0stPHT-1M_-FFngpgHVe3kV3wBB9WFLxEwe8WZkEabA2mF2Q8HRFZ3Uft9TDocOj1M-U-730z3mLxEc7BeGQWymyG7X3FitgOKu3ZIfDzO34nCCt9BXkEd_uVb-Su29oxojDNZXDYATfXaj5SOnujzepq_n2C2gAEKEsutcA4RwfwhkyuvCglELoQKb8IAh8TIU8UoBrxvAahZN06vBcLlEU2o4FFderXy5DX95i3nwJOaA?sig=bdpDI8HIRLl2ez4EjypC4S0xCL2R3afBQ4vZ8r-4KCE" target="_blank" className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-12 py-4 rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center gap-2 uppercase italic tracking-tighter text-lg">
                Download <span className="text-xl">⬇</span>
              </a>
              <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black px-8 py-4 rounded-xl transition-all flex items-center gap-3 uppercase italic tracking-tighter">
                JOIN DISCORD <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] animate-pulse"></span>
              </button>
              <button className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-bold px-6 py-4 rounded-xl border border-cyan-500/20 flex items-center gap-2 uppercase italic tracking-tighter">
                📖 Guides <span className="bg-cyan-500 text-black text-[10px] px-1.5 py-0.5 rounded-full not-italic">1</span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl border border-white/10 flex items-center gap-2 uppercase italic tracking-tighter">
                ⚡ Game Features
              </button>
            </div>
          </div>
        </section>

        {/* --- SECTION REVIEW --- */}
        <section className="mt-24 space-y-8">
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter border-b-2 border-cyan-500 w-fit pb-2">
                Palworld Free Download - Game Review
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm italic max-w-5xl">
                In a harsh environment where food is scarce and vicious <strong className="text-white">poachers</strong> roam, danger waits around every corner. To survive, you must tread carefully and make <strong className="text-white">difficult choices</strong>... Pals can be mounted to traverse the land, sea and sky—allowing you to <strong className="text-white">traverse</strong> all kinds of environment... <span className="text-cyan-500 underline cursor-pointer">Yarimono</span>
            </p>
        </section>

     
{/* --- SECTION 2 : PALWORLD GALLERY & TECH INFO --- */}
        <section className="mt-24 space-y-16">
          
          {/* 1. GAME SCREENSHOTS GALLERY */}
          <div className="space-y-8">
            <h2 className="text-center text-xl font-black text-white uppercase italic tracking-[0.3em]">
              Game Screenshots Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://ankergames.net/uploads/screenshots/02-2025/Palworld%20PC%20Game_1739349732.webp", // Pal de feu
                "https://ankergames.net/uploads/screenshots/02-2025/Palworld%20Reviews_1739349732.webp",  // Exploration vol
                "https://ankergames.net/uploads/screenshots/02-2025/Palworld%20Online_1739349733.webp", // Combat base
                "https://ankergames.net/uploads/screenshots/02-2025/Palworld%20AnkerGames_1739349733.webp"  // Travail à la mine
              ].map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50 aspect-video group cursor-pointer shadow-lg shadow-black/40">
                  <img 
                    src={img} 
                    alt={`Palworld Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 2. INSTALLATION & REQUIREMENTS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            
            {/* INSTALLATION GUIDE */}
            <div className="bg-[#0f172a]/60 border border-white/5 rounded-[2.5rem] p-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="bg-cyan-500/10 p-4 rounded-2xl border border-cyan-500/20 text-cyan-500 text-2xl shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  📦
                </div>
                <div>
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-xl">Installation Guide</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Step-by-step setup process</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500 text-cyan-500 flex items-center justify-center text-xs font-black">1</span>
                  <p className="text-sm text-slate-400 font-medium">Game is pre-installed / portable, therefore you do not need to install the game.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500 text-cyan-500 flex items-center justify-center text-xs font-black">2</span>
                  <p className="text-sm text-slate-400 font-medium">Just extract the rar / zip file.</p>
                </div>
                <div className="flex gap-4 items-start bg-cyan-500/5 p-4 rounded-2xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500 text-cyan-500 flex items-center justify-center text-xs font-black">3</span>
                  <p className="text-sm text-white font-bold italic tracking-tight">
                    ✨ Simply launch the game from <span className="text-cyan-400">GDK_Helper.bat</span> the game folder.
                  </p>
                </div>
              </div>

              {/* NOTES IMPORTANTES */}
              <div className="bg-slate-950/50 border border-white/5 rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-orange-400">
                  <span className="text-lg">⚠️</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em]">Important Notes</span>
                </div>
                <ul className="space-y-4 text-[11px] text-slate-500 italic leading-relaxed">
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Install necessary apps from Redist or _CommonRedist to ensure game launches without any problems.</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Always extract game in Antivirus / Defender excluded folder - Please check our FAQs to know why it is Important.</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Always run the game as administrator</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> For detailed guide, make sure to read Installation Guide.txt inside the game files.</li>
                </ul>
              </div>
            </div>

            {/* SYSTEM REQUIREMENTS */}
            <div className="bg-[#0f172a]/60 border border-white/5 rounded-[2.5rem] p-10 space-y-8">
              <div className="flex items-center gap-5">
                <div className="bg-cyan-500/10 p-4 rounded-2xl border border-cyan-500/20 text-cyan-500 text-2xl">
                  ⌨️
                </div>
                <div>
                  <h3 className="text-white font-black uppercase italic tracking-tighter text-xl">System Requirements</h3>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Minimum specifications needed</p>
                </div>
              </div>

              <div className="relative border-t border-white/5 pt-10 mt-4">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#020617] px-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] whitespace-nowrap">
                  REQUIRES A 64-BIT PROCESSOR AND OPERATING SYSTEM
                </span>
                
                <div className="space-y-5">
                  {[
                    { label: "OS", val: "Windows 10 or later (64-Bit)" },
                    { label: "Processor", val: "i9-9900K 3.6 GHz 8 Core" },
                    { label: "Memory", val: "32 GB RAM" },
                    { label: "Graphics", val: "GeForce RTX 2070" },
                    { label: "DirectX", val: "Version 11" },
                    { label: "Storage", val: "40 GB available space" }
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

          {/* 3. TAGS DE RECHERCHE */}
          <div className="flex flex-wrap justify-center gap-2 pt-10">
            {[
              "Palworld PC Game",
              "Palworld Steam",
              "Palworld Pre-Installed",
              "Palworld Online",
              "Palworld PDNI"
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