import React from 'react';
import Link from 'next/link';

export default function GTAVPage() {
  // Données extraites de l'image image_f2d85c.jpg
  const game = {
    title: "Grand Theft Auto V",
    subTitle: "Grand Theft Auto V / GTA 5 PDNI",
    version: "V 3751.0 Online 1.72",
    size: "117.6 GB",
    releaseYear: "2013",
    releaseDate: "17 Sep, 2013",
    publisher: "Rockstar Games",
    image: "https://ankergames.net/uploads/poster/11-2024/rC9KLPG02A.webp", // Remplace par ton lien réel
    description: "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.",
    genres: ["Action", "Adventure", "Open World"]
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* 1. FIL D'ARIANE */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-[10px] flex gap-2 text-slate-500 uppercase font-bold tracking-widest">
        <Link href="/" className="hover:text-white transition">Home</Link> / 
        <Link href="/games" className="hover:text-white transition">Games</Link> / 
        <span className="text-slate-300">{game.title}</span>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* --- SECTION PRINCIPALE (image_f2d85c.jpg) --- */}
        <section className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mt-4">
          
          {/* COLONNE GAUCHE */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
              <img src={game.image} alt={game.title} className="w-full object-cover aspect-[3/4.5]" />
            </div>
            <button className="w-full bg-[#1e293b]/50 hover:bg-[#1e293b] text-white py-3 rounded-xl font-bold border border-white/5 transition flex items-center justify-center gap-2">
              <span className="text-xs">▷</span> Watch trailer
            </button>
            <div className="bg-slate-800/20 border border-white/5 rounded-xl p-1 flex justify-between text-[10px] font-black uppercase">
                <button className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-lg border border-cyan-500/20">Legacy</button>
                <button className="text-slate-500 px-4 py-2">Edition</button>
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">{game.subTitle}</p>
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">{game.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-orange-400 text-sm">
                  ★★★★☆ <span className="text-white font-bold ml-1">4.8/5</span> <span className="text-slate-500 text-xs font-normal">• 9 reviews</span>
                </div>
                <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] font-black border border-green-500/20 uppercase">
                  👍 89% recommend
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
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Last Updated - 2 weeks ago
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="bg-[#22c55e] text-black font-black px-4 py-2 rounded-lg text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] tracking-tighter">
                {game.version}
              </span>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition italic font-bold">
                ♡ Favorite
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition italic font-bold">
                ⚐ Report
              </button>
              <div className="flex items-center gap-2 bg-slate-800/30 p-1 px-3 rounded-lg border border-white/5 text-xs">
                <button className="hover:text-white flex items-center gap-1 font-bold">👍 284</button>
                <span className="text-slate-700">|</span>
                <button className="hover:text-white">👎</button>
              </div>
            </div>

            {}
            <p className="text-slate-400 leading-relaxed text-sm max-w-4xl italic">
              {game.description}
            </p>

            {}
            <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest pt-4">
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Release Group / <span className="text-white">PDNI</span></div>
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Released / <span className="text-white">{game.releaseDate}</span></div>
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Publisher / <span className="text-white">{game.publisher}</span></div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {game.genres.map((genre) => (
                <span key={genre} className="bg-slate-800/40 text-[10px] font-bold px-3 py-1 rounded border border-white/5 hover:bg-slate-700 transition cursor-pointer uppercase tracking-widest">
                  {genre}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <a href="https://tunnel1.dlproxy.uk/download/XAJeWO15O4C19Ai3Jvuqitqg5l1_CCncB25Eaa4Z71JAAM2ppGVMblIY3AWDW8k1fY0JuJ6RuqfNreqTDOqV3ZNpqRZ8J8r9qy-NDNYXkXN9_Rr8S9PgywXbtsE4bjoPzO4TiRoCcYrgouBm-EJqtBSiuPQS94EbAoj-N8Q3KvFXq76S-LEYakmKNBoljh6NR3Lc0-hkX_9MNh5lUr1ITUggstA6bZEtIxRo_Kv9RLmmXfs3T98o9V_v4NT8Ab2ou0JQnMjRkE2s-KqGzKQM7b9Q8lJbvyCj_GgjJsImnRbVyPYSY7I1vM1VRyJuraIkBalhyuVYmjIy99Sifxah5nW8rZQai0uzvrZTpxOETso8jxPSUvTB8l4KoWYaYoGEYHSr5KZpEoe57fL8AQ3ma2AWsxC3Lgv9Z1cYi-faCHJgKaWxyUBiRXx2Iql2b2C9xyppJoPKA9ge-M4_MnWD_EN7FsCC_YewsxV6zptBsMeK8h7asJ1N7lc4xSuD5dHEha-2asn8Q2ivXcHoK6TjsfUq8o4Hx4hkQaXjIBbDgBAGiGOUtBi2QCBLawUf7SnYs1Nv5Db7Cv4Li4GytM5j8NQXNpbdkVib2Rxe6chkvHH1ALPqfW2Z43_iOwIX_BjQ?sig=BoXdv5V1nytHmCFzKP8Q2dWW6b041ABsbj8JKjA9WRk" target="_blank" className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-12 py-4 rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center gap-2 uppercase italic tracking-tighter text-lg">
                Download <span className="text-xl">⬇</span>
              </a>
              <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black px-8 py-4 rounded-xl transition-all flex items-center gap-3 uppercase italic tracking-tighter">
                JOIN DISCORD <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] animate-pulse"></span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl border border-white/10 flex items-center gap-2 uppercase italic tracking-tighter">
                ⚡ Game Features
              </button>
            </div>
          </div>
        </section>

        {}
        <section className="mt-24 space-y-8">
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter border-b-2 border-cyan-500 w-fit pb-2">
                Grand Theft Auto V Free Download - Game Review
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm italic max-w-5xl">
                GTAV players on PC can <strong className="text-white">migrate</strong> their Story Mode progress and GTA Online <strong className="text-white">characters</strong> and <strong className="text-white">progression</strong> to the newly upgraded version... Enjoy new <strong className="text-white">high-performance</strong> vehicle upgrades and <strong className="text-white">improvements</strong> like the Career Builder...
            </p>
        </section>

        {}
        <section className="mt-24 space-y-16">
          
          {}
          <div className="space-y-8">
            <h2 className="text-center text-xl font-black text-white uppercase italic tracking-[0.3em]">
              Game Screenshots Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://ankergames.net/uploads/screenshots/03-2025/Grand%20Theft%20Auto%20V%20Action%20Gameplay_1741779414.webp", // Ville de nuit
                "https://ankergames.net/uploads/screenshots/03-2025/Grand%20Theft%20Auto%20V%20Preinstalled%20Steam_1741779414.webp", // Trevor dans le désert
                "https://ankergames.net/uploads/screenshots/03-2025/Grand%20Theft%20Auto%20V%20Screenshot_1741779414.webp", // Course de moto
                "https://ankergames.net/uploads/screenshots/03-2025/Grand%20Theft%20Auto%20V%20Wallpaper%20AnkerGames_1741779414.webp"  // Signe Vinewood
              ].map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50 aspect-video group cursor-pointer shadow-lg shadow-black/40">
                  <img 
                    src={img} 
                    alt={`GTA V Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            
            {}
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
                    ✨ Simply launch the game from <span className="text-cyan-400">PlayGTAV.bat</span> inside the game folder.
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
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Always extract game in Antivirus / Defender excluded folder - Please check our FAQs on explaination.</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> Always run the game as administrator</li>
                  <li className="flex gap-2"><span className="text-orange-500">•</span> For detailed guide, make sure to read Installation Guide.txt inside the game files.</li>
                </ul>
              </div>
            </div>

            {/* SYSTÈME REQUIS GTA V */}
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
                    { label: "OS", val: "Windows 10 64 Bit" },
                    { label: "Processor", val: "Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)" },
                    { label: "Memory", val: "8 GB RAM" },
                    { label: "Graphics", val: "NVIDIA GTX 660 2GB / AMD HD 7870 2GB" },
                    { label: "Storage", val: "125 GB available space" },
                    { label: "Sound Card", val: "100% DirectX 10 compatible" }
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
        </section>
      </main>
    </div>
  );
}