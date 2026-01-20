
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const HomeView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark relative overflow-hidden">
      {/* Background Decorative */}
      <div 
        className="absolute top-0 left-0 w-full h-[60%] bg-cover bg-center opacity-40 z-0" 
        style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #141414), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8HSAZ4Jgo5zpRVccj1ONnxgA6AdN4R7ZU3s5pMNXTwdyKzvLI48el_QoxIASkKaxfMpkDKxzSsrZGuF7-lwFleaFJZE__lzY4nx67owU7yrjXcBRBVESZrPQfNgdUlSNkmpYW_BooT_DUaKA_z65y0IJb1ox73tqUqy6yUVljBpNuPnP401BMP76FROfHjhxqQ3PuLim57kocqUsozZ2DQr7oWySAFJnNmV0mqWZc4kTJelTJvEX8-_ekO0CMaAnEnMfXWQo7kHRM")' }}
      />

      <div className="relative z-10 flex flex-col h-full overflow-y-auto hide-scrollbar">
        {/* Top App Bar */}
        <div className="flex items-center p-6 pt-12 justify-between w-full">
          <div className="flex flex-col">
            <span className="text-accent-emerald text-xs font-bold uppercase tracking-widest mb-1">BusGo Ecuador</span>
            <h1 className="text-2xl font-bold tracking-tight text-white">Find Your Trip</h1>
          </div>
          <button 
            onClick={() => onNavigate(View.PROFILE)}
            className="size-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-white">person</span>
          </button>
        </div>

        <div className="px-6 pt-4 pb-32">
          {/* Search Engine Card */}
          <div className="bg-surface-dark/80 backdrop-blur-xl rounded-2xl p-5 space-y-4 shadow-2xl border border-white/5">
            <div className="relative">
              <div className="flex flex-col gap-1">
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest pl-1">Origin</p>
                <div className="flex w-full items-stretch rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center pl-4 text-accent-emerald">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <input className="w-full bg-transparent border-none text-white focus:ring-0 h-12 text-base font-medium placeholder:text-white/30" placeholder="Quito (Terminal Carcelén)" />
                </div>
              </div>

              {/* Swap Button */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10">
                <button className="bg-accent-emerald text-primary size-10 rounded-full flex items-center justify-center shadow-lg border-4 border-[#1c1c1c] active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px] font-bold">swap_vert</span>
                </button>
              </div>

              <div className="h-4"></div>

              <div className="flex flex-col gap-1">
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest pl-1">Destination</p>
                <div className="flex w-full items-stretch rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center pl-4 text-accent-emerald">
                    <span className="material-symbols-outlined text-[20px]">near_me</span>
                  </div>
                  <input className="w-full bg-transparent border-none text-white focus:ring-0 h-12 text-base font-medium placeholder:text-white/30" placeholder="Guayaquil (Terminal Terrestre)" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest pl-1">Departure</p>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl h-12 px-4">
                  <span className="material-symbols-outlined text-accent-emerald text-[20px]">calendar_today</span>
                  <span className="text-sm font-medium text-white">Oct 24, 2023</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 opacity-50">
                <p className="text-white/50 text-[11px] font-bold uppercase tracking-widest pl-1">Return</p>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl h-12 px-4">
                  <span className="material-symbols-outlined text-white/40 text-[20px]">calendar_add_on</span>
                  <span className="text-sm font-medium text-white/40 italic">Optional</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onNavigate(View.RESULTS)}
              className="w-full bg-accent-emerald hover:bg-emerald-400 text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-4 active:scale-[0.98] shadow-lg shadow-emerald-500/20"
            >
              <span className="material-symbols-outlined">search</span>
              SEARCH BUSES
            </button>
          </div>

          {/* Popular Routes */}
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-white">Popular Routes</h3>
              <button className="text-accent-emerald text-sm font-semibold">View All</button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
              <div className="min-w-[200px] snap-start bg-surface-dark border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <div className="h-24 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDKi0ZJSr9ZISVy8StufivAhjU8nwtGn_JN6nRxU2g0w88K0oaWguZ65w9wvRNjvCLEwN3TOzmIIrIvKVDT63yoyMidrxvP8kWiAJlLR8ZDOSkJSjnqxK22y0wYQC1Ti9qaWtdy97d-RqCOkvSmx-L6w5SLDuFhyvw1YkdlKhV59BALJp3Ke0CAQ0D-ckTsosI70CXD0TwK95OHW0TPYkwAfvoeS5b-SzhvaxRG7eqJ9YEIMUeGunUhzUf0-h01FvPuDip8EqGiOhR_")' }}></div>
                <div className="p-3 text-white">
                  <p className="text-sm font-bold">Quito → Guayaquil</p>
                  <p className="text-accent-emerald text-xs mt-1">From $12.50</p>
                </div>
              </div>
              <div className="min-w-[200px] snap-start bg-surface-dark border border-white/10 rounded-xl overflow-hidden shadow-xl">
                <div className="h-24 bg-center bg-cover" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjvY57YcZzst1rlShefBqf1EHQTkls1aDpkft8Rx96qiAKB70_P_1nh7y8YN_Pr0XYhszDSsevsA0tTC0poOxAFKBGsD8dDPuqnwMlrYMS_7RF8nV2v5QJdLLRkrYtZlfoJCR5bm2LYYOVcv6GBIqBDGGleAxgeloqvuI0XGKmwcgnM39RmPgVIPvBrHGC1-QuXhDyzO_J0r_rJn6KYDGdBdGHm6-unjvEpTq6xWyFBpXghvPM5FUcGdkixlm2eIKWUB2mDO4Ez7gj")' }}></div>
                <div className="p-3 text-white">
                  <p className="text-sm font-bold">Quito → Cuenca</p>
                  <p className="text-accent-emerald text-xs mt-1">From $15.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Promo */}
          <div className="mt-6 p-4 rounded-xl bg-emerald-900/20 border border-accent-emerald/20 flex items-center gap-4">
            <div className="size-10 bg-accent-emerald/20 rounded-full flex items-center justify-center text-accent-emerald">
              <span className="material-symbols-outlined">confirmation_number</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">15% Off First Booking</h4>
              <p className="text-white/60 text-xs">Use code: ECUAGO15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface-dark/80 backdrop-blur-2xl border-t border-white/5 h-24 flex justify-around items-center px-6 pb-6 z-50">
        <button className="flex flex-col items-center gap-1 text-accent-emerald">
          <span className="material-symbols-outlined fill-1">home</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
        </button>
        <button onClick={() => onNavigate(View.AI_CHAT)} className="flex flex-col items-center gap-1 text-white/40">
          <span className="material-symbols-outlined">smart_toy</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">BusGo AI</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-white/40">
          <span className="material-symbols-outlined">confirmation_number</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">My Trips</span>
        </button>
        <button onClick={() => onNavigate(View.PROFILE)} className="flex flex-col items-center gap-1 text-white/40">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default HomeView;
