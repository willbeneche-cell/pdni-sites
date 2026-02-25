import React from 'react';
import Link from 'next/link';

// Composant pour les affiches de jeux
const GamePoster = ({ title, image, slug }: { title: string, image: string, slug: string }) => (
  <Link href={`/games/${slug}`}>
    <div className="group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/5 transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-white font-medium text-sm">{title}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      
      {/* 1. NAVBAR */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-8">
          <div className="text-xl font-black tracking-tighter flex items-center gap-1">
            <span className="text-white">PDNI</span>
            <span className="text-cyan-500">GAMES</span>
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-400">
            <Link href="/" className="hover:text-white transition">All Games</Link>
            <Link href="#" className="hover:text-white transition">Top</Link>
            <Link href="#" className="text-white border-b-2 border-cyan-500 pb-1">Trending</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg transition">Sign up</button>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto p-6 space-y-10">
        
        {/* 2. HERO SECTION */}
        <section className="relative group rounded-[2rem] overflow-hidden border border-white/5 bg-slate-900/50">
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent z-10" />
          <img 
            src="https://ankergames.net/uploads/poster/11-2024/cover-7hCoHIlLND.webp" 
            className="w-full h-[500px] object-cover opacity-50" 
            alt="Hero background"
          />
          
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-12 max-w-2xl space-y-6">
            <h1 className="text-6xl font-black text-white italic tracking-tighter uppercase">Ark - Survival Ascended</h1>
            <div className="flex items-center gap-4">
              <Link href="/games/ark-survival-ascended" className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-8 py-3 rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                Download Now →
              </Link>
            </div>
          </div>
        </section>

        {/* 3. GAME GRID */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Trending Games</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {/* ICI : Les slugs correspondent aux noms de tes dossiers */}
            <GamePoster title="Ark - Survival Evolved" slug="ark-survival-evolved" image="https://ankergames.net/uploads/poster/11-2024/G3yyVt5lN5.webp" />
            <GamePoster title="Ark - Survival Ascended" slug="ark-survival-ascended" image="https://ankergames.net/uploads/poster/11-2024/GXo1ega1el.webp" />
            <GamePoster title="GTA V" slug="gta-v" image="https://ankergames.net/uploads/poster/11-2024/rC9KLPG02A.webp" />
            <GamePoster title="Palworld" slug="palworld" image="https://ankergames.net/uploads/poster/10-2024/Q2xluhoHEe.webp" />
            <GamePoster title="Poppy Playtime" slug="poppy-playtime" image="https://ankergames.net/uploads/poster/02-2025/92fRpM2bRE.webp" />
            <GamePoster title="YAPYAP" slug="yapyap" image="https://ankergames.net/uploads/poster/02-2026/yapyap-poster_c03I3S_1770188816.webp" />
            <GamePoster title="Minecraft" slug="minecraft" image="https://ankergames.net/uploads/poster/11-2024/N3wybAOOpM.webp" />
            <GamePoster title="RV There Yet" slug="rv-there-yet" image="https://ankergames.net/uploads/poster/10-2025/nCnApk5YSA.webp" />     
            <GamePoster title="Peak" slug="peak" image="https://ankergames.net/uploads/poster/06-2025/IjkcUYYrie.webp" />                        
            <GamePoster title="REPO" slug="repo" image="https://ankergames.net/uploads/poster/02-2025/nckvIRSHDS.webp" />     
            <GamePoster title="Secret Neighbor" slug="secret-neighbor" image="https://ankergames.net/uploads/poster/10-2024/dxPAVUXMUH.webp" />     
            <GamePoster title="BodyCam" slug="bodycam" image="https://ankergames.net/uploads/poster/10-2024/H1Njv5HchV.webp" />     
            <GamePoster title="Schedule I" slug="schedule-i" image="https://ankergames.net/uploads/poster/03-2025/QYl37hCfJS.webp" />     
            <GamePoster title="Sons Of The Forest" slug="sons-of-the-forest" image="https://ankergames.net/uploads/poster/11-2024/GJ0RPMoGrs.webp" />     
            <GamePoster title="Inside The Backrooms" slug="inside-the-backrooms" image="https://ankergames.net/uploads/poster/10-2024/gtCM3aiaZc.webp" />     
            <GamePoster title="Escape The Backrooms" slug="escape-the-backrooms" image="https://ankergames.net/uploads/poster/10-2024/La83HeVh5s.webp" />     
            <GamePoster title="Lethal Company" slug="lethal-company" image="https://ankergames.net/uploads/poster/10-2024/xeQh3iSoMk.webp" />    
          </div>
        </div>
      </main>
    </div>
  );
}