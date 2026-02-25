import React from 'react';
import Link from 'next/link';

export default function ArkSurvivalEvolvedPage() {
  // Données spécifiques à ARK Survival Evolved basées sur les visuels
  const game = {
    title: "ARK Survival Evolved",
    subTitle: "ARK Survival Evolved Ultimate Survivor PDNI",
    version: "V 360.20",
    size: "129.7 GB",
    releaseYear: "2016",
    releaseDate: "06 Dec, 2016",
    publisher: "Studio Wildcard",
    image: "https://ankergames.net/uploads/poster/11-2024/G3yyVt5lN5.webp", 
    description: "As a man or woman stranded naked, freezing and starving on the shores of a mysterious island called ARK, you must hunt, harvest resources, craft items, grow crops, research technologies, and build shelters to withstand the elements. Use your cunning and resources to kill or tame & breed the leviathan dinosaurs and other primeval creatures roaming the land, and team up with or prey on hundreds of other players to survive, dominate... and escape!",
    genres: ["Adventure", "RPG", "Indie", "Open World", "Sci-fi"]
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
        
        {/* SECTION PRINCIPALE */}
        <section className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mt-4">
          
          {/* COLONNE GAUCHE : POSTER */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
              <img src={game.image} alt={game.title} className="w-full object-cover aspect-[3/4.5]" />
            </div>
            <button className="w-full bg-[#1e293b]/50 hover:bg-[#1e293b] text-white py-3 rounded-xl font-bold border border-white/5 transition flex items-center justify-center gap-2">
              <span className="text-xs">▷</span> Watch trailer
            </button>
          </div>

          {/* COLONNE DROITE : INFOS */}
          <div className="space-y-6">
            <div className="space-y-1">
              <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.3em]">{game.subTitle}</p>
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase italic">{game.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1 text-orange-400 text-sm">
                  ★★★★★ <span className="text-white font-bold ml-1">5.0/5</span> <span className="text-slate-500 text-xs font-normal">• 1 review</span>
                </div>
                <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] font-black border border-green-500/20 uppercase">
                  👍 100% recommend
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
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Updated Version
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
              <div className="flex items-center gap-2 bg-slate-800/30 p-1 px-3 rounded-lg border border-white/5">
                <button className="hover:text-white">👍 28</button>
                <span className="text-slate-600">|</span>
                <button className="hover:text-white">👎</button>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-400 leading-relaxed text-sm max-w-4xl italic">
              {game.description}
            </p>

            {/* TAGS FIXES */}
            <div className="flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest pt-4">
               <div className="bg-slate-800/50 p-2 px-4 rounded-lg border border-white/5">Release Group / <span className="text-white">pdni</span></div>
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

            {/* BOUTONS DOWNLOAD / DISCORD */}
            <div className="flex flex-wrap gap-4 pt-8">
              <a href="https://tunnel1.dlproxy.uk/download/pLY7i9H8fiD0pVYXWjxuovjRFjf8C2w5-wChqfdjKR_8LzLW1VVyDnrAqIwJ7u0nSpOB--e37GY8flfglEqimJ9ssYeH9f2nagpRLsd-LE7v9MgH_AtaMAd0UYI1fPqEcNEiTMJv9BwM7zrKTNl0vWJZq84_2knzDAGT11BC_4yahcC5MQO2g_H5HqKzJPGhmzYN8-wpe0QLYJ9ZSQcoN1iN_LTd_OwE0R8Ejo7OCpajbHFANeSPcZ4g3p8coMgu8Xlqloxyxy5pgkdqYer4IkIElSwfLhPnbHrQn5UC1ulF22OE3GIT3MwJgcAZLPfTEq4FwRPH1eUpkxAY_zP9EsBENhg4Fp3h4LkgO8W5rY8CYrxUSP9rO65EoAgOISD4t9bhQMLPqm0hQknKaxZ44asqYec8kz6BQ1D89Ibt97IzNm3PSCMD0MybUkKJswtD2Tz1FbgTQP29V7YUO9zzNiKmM5SyPOHheLOJ0QG8dD_BmcnQMN_NUi5ngTVrCpq_vgAhQTIHOByGQFfwPC77jAC1ysoq5Pqlt4vezWNtpMTvtuzAvsCfmOyoijBKFLNaEyxSXZztUx9t9Ls3in5DcjM665nxzpmPIz5Wk_jr6FYByEDTpjUNfKdXPTJ8guRB?sig=7VEN6LsFLdMqQrbzhkksgm2_OdY17FFlRHjgoPKOOBk" className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-12 py-4 rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center gap-2 uppercase italic tracking-tighter text-lg">
                Download <span className="text-xl">⬇</span>
              </a>
              <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black px-8 py-4 rounded-xl transition-all flex items-center gap-3 uppercase italic tracking-tighter relative overflow-hidden group">
                JOIN DISCORD <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] animate-pulse"></span>
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl border border-white/10 flex items-center gap-2 uppercase italic tracking-tighter">
                ⚡ Game Features
              </button>
            </div>
          </div>
        </section>

        {/* --- SECTION INFÉRIEURE (SCROLL) --- */}
{/* --- SECTION 2 : REVIEW, GALLERY & TECH INFO --- */}
        <section className="mt-24 space-y-16">
          
          {/* 1. TEXTE DE REVIEW DÉTAILLÉ */}
          <div className="max-w-5xl space-y-8">
            <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter border-b-2 border-cyan-500 w-fit pb-2">
              ARK Survival Evolved Free Download - Game Review
            </h2>
            
            <div className="space-y-6 text-slate-400 leading-relaxed text-sm italic">
              <p>
                Dinosaurs, Creatures, & Breeding! -- over 100+ creatures can be tamed using a <strong className="text-white">challenging</strong> capture-&-affinity process, involving weakening a feral creature to knock it unconscious, and then nursing it back to health with appropriate food. Once tamed, you can issue commands to your tames, which it may follow <strong className="text-white">depending</strong> on how well you've tamed and trained it. Tames, which can continue to level-up and consume food, can also carry Inventory and Equipment such as Armor, carry prey back to your <strong className="text-white">settlement</strong> depending on their strength, and larger tames can be ridden and directly controlled!
              </p>
              
              <p>
                Fly a Pterodactyl over the snow-capped mountains, lift allies over enemy walls, race through the jungle with a pack of <strong className="text-white">Raptors</strong>, tromp through an enemy base along a gigantic <strong className="text-white">brontosaurus</strong>, or chase down prey on the back of a raging T-Rex! Take part in a dynamic ecosystem life-cycle with its own predator & prey hierarchies, where you are just one creature among many species <strong className="text-white">struggling</strong> for dominance and survival. Tames can also be mated with the opposite gender, to selectively breed successive generations using a trait system based on recombinant genetic inheritance. This process includes both egg-based incubation and <strong className="text-white">mammalian</strong> gestation lifecycles! Or put more simply, raise babies!. <span className="text-cyan-500 underline cursor-pointer">Parkitect</span>
              </p>
            </div>
          </div>

          {/* 2. GAME SCREENSHOTS GALLERY */}
          <div className="space-y-8">
            <h2 className="text-center text-xl font-black text-white uppercase italic tracking-[0.3em]">
              Game Screenshots Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "https://ankergames.net/uploads/screenshots/03-2025/ARK%20Survival%20Evolved%20On%20PC_1741845422.webp", // Remplace par tes images réelles si besoin
                "https://ankergames.net/uploads/screenshots/03-2025/ARK%20Survival%20Evolved%20GamePlay_1741845422.webp",
                "https://ankergames.net/uploads/screenshots/03-2025/ARK%20Survival%20Evolved%20Online_1741845422.webp",
                "https://ankergames.net/uploads/screenshots/03-2025/ARK%20Survival%20Evolved%20AnkerGames_1741845422.webp"
              ].map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50 aspect-video group cursor-pointer">
                  <img 
                    src={img} 
                    alt={`Screenshot ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                </div>
              ))}
            </div>
          </div>
           </section>

{/* --- TROISIÈME PARTIE : GUIDES & TAGS --- */}
        <section className="mt-20 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 1. INSTALLATION GUIDE */}
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
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Game is pre-installed / portable, therefore you do not need to install the game.
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500 text-cyan-500 flex items-center justify-center text-xs font-black">2</span>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">
                    Just extract the rar / zip file.
                  </p>
                </div>
                <div className="flex gap-4 items-start bg-cyan-500/5 p-4 rounded-2xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan-500 text-cyan-500 flex items-center justify-center text-xs font-black">3</span>
                  <p className="text-sm text-white font-bold italic tracking-tight leading-relaxed">
                    Simply launch the game from ARK Survival Evolved / ARK / ShooterGame / Binaries / ShooterGame / 
                    <span className="inline-flex items-center gap-1 mx-2 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded text-cyan-400">
                       <span className="text-[10px]">⚡</span> shooterGame.exe
                    </span> 
                    inside the game folder.
                  </p>
                </div>
              </div>

              {/* IMPORTANT NOTES BOX */}
              <div className="bg-slate-950/50 border border-white/5 rounded-3xl p-8 space-y-6">
                <div className="flex items-center gap-3 text-orange-400">
                  <span className="text-lg">⚠️</span>
                  <span className="text-[11px] font-black uppercase tracking-[0.25em]">Important Notes</span>
                </div>
                <ul className="space-y-4 text-[11px] text-slate-500 italic leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span> 
                    Install necessary apps from Redist or _CommonRedist to ensure game launches without any problems.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span> 
                    Always extract game in Antivirus / Defender excluded folder - Please check our FAQs to know why it is Important.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span> 
                    Always run the game as administrator
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">•</span> 
                    For detailed guide, make sure to read Installation Guide.txt inside the game files.
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. SYSTEM REQUIREMENTS */}
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
                  MINIMUM
                </span>
                
                <div className="space-y-6">
                  {[
                    { label: "OS *", val: "Windows 7/8.1/10 (64-bit versions)" },
                    { label: "Processor", val: "Intel Core i5-2400/AMD FX-8320 or better" },
                    { label: "Memory", val: "8 GB RAM" },
                    { label: "Graphics", val: "NVIDIA GTX 670 2GB/AMD Radeon HD 7870 2GB or better" },
                    { label: "DirectX", val: "Version 10" },
                    { label: "Storage", val: "60 GB available space" }
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

          {/* 3. BOTTOM SEARCH TAGS */}
          <div className="flex flex-wrap justify-center gap-3 pt-10 border-t border-white/5">
            {[
              "ARK Survival Evolved PDNI",
              "ARK Survival Evolved Online",
              "ARK Survival Evolved Gameplay",
              "ARK Survival Evolved Pc Game",
              "ARK Survival Evolved Pre-Installed"
            ].map((tag, i) => (
              <span key={i} className="bg-slate-800/30 text-slate-500 border border-white/5 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-tighter hover:text-white hover:bg-slate-800 transition-all cursor-pointer">
                {tag}
              </span>
            ))}
          </div>

        </section>
      </main>

      {/* BOUTON REMONTER (Visible sur image_f25823) */}
      <div className="fixed bottom-10 right-10 z-50">
        <button className="bg-cyan-500 hover:bg-cyan-400 text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1">
          ↑
        </button>
      </div>
    </div>
  );
}