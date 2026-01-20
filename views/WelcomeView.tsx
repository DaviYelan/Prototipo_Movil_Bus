
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const WelcomeView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="relative flex flex-col h-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-center bg-cover" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDft3ovvAnALztmkwKquDX3fi7J4_BRJNS1pluC0wc5TemNr4hWFA2k5glxwdF4jWSo9ROB9rKjxV1m_Ucfraz8VTwCavuKASLvgT8R4RpC4JafqkWJcj44ZRyPmwFiide5vN6CwN52wBwp1m18QiMfUWTG8_fVnNV87uTFxQbTP-3mKMtQ1eBL61su538cg9NbthliiGjW5R9Tm0Gzc1CaEqgketQK25FaHO9Ny_zRPenhtf5amP0mcL6VkaTotiav-d9zkuOOaa-D")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col h-full justify-end px-8 pb-12">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-xl bg-accent-green flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl font-bold">directions_bus</span>
          </div>
        </div>

        <div className="mb-4">
          <h1 className="text-white tracking-tight text-[44px] font-extrabold leading-[1.1] mb-2">
            Welcome to <span className="text-accent-green">BusGo</span>
          </h1>
          <div className="h-1 w-16 bg-accent-green rounded-full"></div>
        </div>

        <div className="mb-10">
          <p className="text-neutral-300 text-lg font-light leading-relaxed">
            Experience Ecuador like never before. 
            Premium bus travel at your fingertips, connecting the Andes to the Pacific.
          </p>
        </div>

        <div className="flex flex-row items-center gap-2 mb-8">
          <div className="h-1.5 w-8 rounded-full bg-accent-green"></div>
          <div className="h-1.5 w-2 rounded-full bg-neutral-600"></div>
          <div className="h-1.5 w-2 rounded-full bg-neutral-600"></div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <button 
            onClick={() => onNavigate(View.REGISTER)}
            className="flex items-center justify-center rounded-xl h-14 px-6 bg-accent-green text-primary text-lg font-bold transition-transform active:scale-[0.98] w-full"
          >
            <span>Get Started</span>
            <span className="material-symbols-outlined ml-2">arrow_forward</span>
          </button>
          <button 
            onClick={() => onNavigate(View.HOME)}
            className="flex items-center justify-center rounded-xl h-14 px-6 bg-white/10 backdrop-blur-md border border-white/10 text-white text-lg font-semibold transition-transform active:scale-[0.98] w-full"
          >
            <span>Sign In</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-neutral-500 text-sm font-medium">
            By continuing, you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeView;
