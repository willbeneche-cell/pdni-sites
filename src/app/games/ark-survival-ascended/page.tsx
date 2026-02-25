import React from 'react';
import Link from 'next/link';

export default function ArkSurvivalAscendedPage() {
  // Données spécifiques à ARK Ascended
  const game = {
    title: "ARK Survival Ascended",
    subTitle: "ARK: Survival Ascended (Co-Op) OFME",
    version: "B 28072025",
    size: "204.45 GB",
    releaseDate: "25 Oct, 2023",
    publisher: "Studio Wildcard",
    image: "https://ankergames.net/uploads/poster/11-2024/GXo1ega1el.webp",
    description: "Respawn into a new dinosaur survival experience beyond your wildest dreams... as ARK is reimagined from the ground-up into the next-generation of videogame technology with Unreal Engine 5!",
    genres: ["Action", "Adventure", "RPG", "Indie", "Multiplayer"]
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* 1. FIL D'ARIANE (Breadcrumbs) */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-[10px] flex gap-2 text-slate-500 uppercase font-bold tracking-widest">
        <Link href="/" className="hover:text-white transition">Home</Link> / 
        <span>Games</span> / 
        <span className="text-slate-300">{game.title}</span>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-20">
        <section className="relative grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 mt-4">
          
          {/* COLONNE GAUCHE : VISUEL */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black">
              <img 
                src={game.image} 
                alt={game.title} 
                className="w-full object-cover aspect-[3/4.5]" 
              />
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
                  ★★★★★ <span className="text-white font-bold ml-1">5.0/5</span>
                </div>
                <div className="bg-green-500/10 text-green-500 px-2 py-0.5 rounded text-[10px] font-black border border-green-500/20 uppercase tracking-tighter">
                  👍 100% recommend
                </div>
              </div>
            </div>

            {/* BARRE D'INFOS TECHNIQUES */}
            <div className="flex items-center gap-6 text-[10px] font-black tracking-widest text-slate-400 border-b border-white/5 pb-6">
              <div className="bg-slate-800 text-white px-2 py-1 rounded">PC</div>
              <div>{game.size}</div>
              <div>{game.releaseDate}</div>
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Updated Version
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#22c55e] text-black font-black px-4 py-2 rounded-lg text-sm shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                {game.version}
              </span>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition italic font-bold tracking-tighter">
                ♡ Favorite
              </button>
              <button className="bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg text-sm border border-white/5 transition italic font-bold tracking-tighter">
                ⚐ Report
              </button>
            </div>

            {/* DESCRIPTION */}
            <p className="text-slate-400 leading-relaxed text-sm max-w-4xl italic">
              {game.description}
            </p>

            {/* GENRES */}
            <div className="flex flex-wrap gap-2 pt-2">
              {game.genres.map((genre) => (
                <span key={genre} className="bg-slate-800/40 text-[10px] font-bold px-3 py-1 rounded border border-white/5 hover:bg-slate-700 transition cursor-pointer uppercase tracking-widest">
                  {genre}
                </span>
              ))}
            </div>

            {/* BOUTONS DE TÉLÉCHARGEMENT */}
            <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
              <a href="https://carina.dlproxy.uk/download/OYPmilzKKg0cU4B_aELQ9xz6UklOkcS2lwKf3aOeeH7wMMvnYWSxWFc7nFoV-iZuNXBNYC8m4EroRji5p_lxtQQEtiOPdws9W-fn6c__V3QVnTm_xviw7yQFFJXLFClC5SNFrxk5fpjc3BBbAYZVSLZ_r3XG8WX89KcY0ysfFiDJfFlWsOL6umzzk7FauiU_JmaEYiqBAhE9PhtKnPsh8CSfRAkvhjq9Yvq2NUboGYhVEK0jx4wvrdPcvWuIWEU7w-A_h4_UReEZ1bp9AvlgtO15qHndixicVN40nDK0hpi_lzhT8klLQbB7xB22Q_ttzbOXmMKmfYWILG1u5gUbR1hXuDL6tpo-npPzt7rCs0F3NBhAQEzdfCmmhsoYMO4DIGeo-ETDoVykKeyQ89UxMnP8iFC2DVRqZAyU0hD0Jk1kmM2GqUNOzHMMGYv_HsqGwIP0azlDzwV0SnKIC_0n6lysdbKg9SyBlTbJSBYBhbeptYnEdVL_zA1HSlHQTIal5jVjMjTADEAkH6RcX5tuKaiDtAQ3z7KJnxjjNYA4CJ0a-PzxHLr-KWInIPacc-8KdO35WjisN5MSZcCb1lZ_aJk3h256Aa1Q0zJmSrbUJQ889HQ88SJDpT7JfHtQm9yV?sig=R1O3kRq9IQXGcwAkuwmc87Ulok4RCZRfK4HTf2CUbMo" className="bg-cyan-500 hover:bg-cyan-400 text-black font-black px-12 py-4 rounded-xl transition-all shadow-[0_0_40px_rgba(6,182,212,0.3)] flex items-center gap-2 uppercase italic tracking-tighter text-lg">
                Download <span className="text-xl">⬇</span>
              </a>
              <button className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-black px-8 py-4 rounded-xl transition-all flex items-center gap-3 uppercase italic tracking-tighter">
                JOIN DISCORD <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] animate-pulse"></span>
              </button>
            </div>
          </div>
        </section>

        {/* REVIEW SECTION */}
        <section className="mt-24 space-y-8">
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter border-b-2 border-cyan-500 w-fit pb-2">
            ARK Survival Ascended Free Download - Game Review
          </h2>
          <div className="space-y-6 text-slate-400 leading-8 text-md max-w-5xl italic">
            <p>
              ARK: Survival Ascended a été entièrement recréé avec <strong className="text-cyan-400">Unreal Engine 5</strong>. Préparez-vous à une expérience de survie nouvelle génération avec des graphismes époustouflants et une physique réaliste.
            </p>
          </div>
        </section>


        {/* --- SECTION GALERIE PHOTO --- */}
        <section className="mt-20 space-y-10">
          <h2 className="text-center text-xl font-black text-white uppercase italic tracking-[0.2em]">
            Game Screenshots Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://ankergames.net/uploads/screenshots/04-2025/ark-survival-ascended-screenshot_1744111778.webp", // Remplace par tes vrais liens
              "https://ankergames.net/uploads/screenshots/04-2025/ark-survival-ascended-gameplay_1744111779.webp",
              "https://ankergames.net/uploads/screenshots/04-2025/ark-survival-ascended-ankergames_1744111779.webp",
              "https://ankergames.net/uploads/screenshots/04-2025/ark-survival-ascended-online_1744111779.webp"
            ].map((img, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
                <img src={img} alt="Screenshot" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION GUIDES & CONFIGS --- */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* 1. INSTALLATION GUIDE */}
          <div className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">
                <span className="text-cyan-500 text-xl">📦</span>
              </div>
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">Installation Guide</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Step-by-step setup process</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                "Game is pre-installed / portable, therefore you do not need to install the game.",
                "Just extract the rar / zip file.",
                "Simply launch the game ARK Survival Ascended.exe inside the game folder."
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-cyan-500/30 text-cyan-500 flex items-center justify-center text-[10px] font-black group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Note Importante */}
            <div className="bg-orange-500/5 border border-orange-500/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-orange-400">
                <span>⚠️</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Important Notes</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Install necessary apps from Redist or _CommonRedist to ensure game launches without any problems.",
                  "Always extract game in Antivirus / Defender excluded folder.",
                  "Always run the game as administrator.",
                  "For detailed guide, make sure to read Installation Guide.txt inside the game files."
                ].map((note, i) => (
                  <li key={i} className="text-[11px] text-slate-500 flex gap-2 leading-relaxed italic">
                    <span className="text-orange-500">•</span> {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. SYSTEM REQUIREMENTS */}
          <div className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-8 space-y-8">
            <div className="flex items-center gap-4">
              <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">
                <span className="text-cyan-500 text-xl">⌨️</span>
              </div>
              <div>
                <h3 className="text-white font-black uppercase italic tracking-tighter text-lg">System Requirements</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Minimum specifications needed</p>
              </div>
            </div>

            <div className="relative border-t border-white/5 pt-8">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#020617] px-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                Recommended
              </span>
              
              <div className="space-y-4">
                {[
                  { label: "OS", val: "Windows 10/11 with updates" },
                  { label: "Processor", val: "AMD Ryzen 5 3600X, Intel i5-10600K" },
                  { label: "Memory", val: "32 GB RAM" },
                  { label: "Graphics", val: "AMD Radeon RX 6800, NVIDIA GeForce RTX 3080" },
                  { label: "DirectX", val: "Version 12" },
                  { label: "Storage", val: "70 GB available space" }
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between items-center text-[11px] border-b border-white/5 pb-2 last:border-0">
                    <span className="text-slate-500 font-bold uppercase tracking-wider">{spec.label}</span>
                    <span className="text-slate-200 font-black italic">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}