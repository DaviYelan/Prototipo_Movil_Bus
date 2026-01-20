
import React from 'react';
import { View } from '../types';

interface Props {
  onNavigate: (view: View) => void;
}

const ProfileView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md pt-12 border-b border-white/5">
        <div className="flex items-center px-4 pb-4 gap-4">
          <button 
            onClick={() => onNavigate(View.HOME)}
            className="size-10 flex items-center justify-center rounded-full bg-white/5"
          >
            <span className="material-symbols-outlined text-white">arrow_back</span>
          </button>
          <h2 className="text-white text-lg font-bold">Profile</h2>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-32 hide-scrollbar">
        <div className="flex flex-col items-center mb-10">
          <div className="size-24 rounded-full border-4 border-accent-green p-1 mb-4 shadow-2xl shadow-emerald-500/20">
            <div className="size-full rounded-full bg-surface-dark flex items-center justify-center text-accent-green text-4xl overflow-hidden">
               <span className="material-symbols-outlined text-5xl">account_circle</span>
            </div>
          </div>
          <h3 className="text-white text-xl font-bold">Juan Pérez</h3>
          <p className="text-neutral-500 text-sm font-medium">Verified Traveler • Guayaquil, EC</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Travel Stats</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-surface-dark p-3 rounded-xl border border-white/5 flex flex-col items-center">
                <span className="text-white text-lg font-bold">12</span>
                <span className="text-[9px] text-neutral-500 font-bold uppercase">Trips</span>
              </div>
              <div className="bg-surface-dark p-3 rounded-xl border border-white/5 flex flex-col items-center">
                <span className="text-white text-lg font-bold">2.4k</span>
                <span className="text-[9px] text-neutral-500 font-bold uppercase">KM</span>
              </div>
              <div className="bg-surface-dark p-3 rounded-xl border border-white/5 flex flex-col items-center">
                <span className="text-accent-green text-lg font-bold">Silver</span>
                <span className="text-[9px] text-neutral-500 font-bold uppercase">Tier</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Account Settings</h4>
            <div className="rounded-2xl bg-surface-dark border border-white/5 divide-y divide-white/5 overflow-hidden">
              {[
                { icon: 'person', label: 'Personal Information' },
                { icon: 'payment', label: 'Payment Methods' },
                { icon: 'notifications', label: 'Notifications', color: 'text-white' },
                { icon: 'security', label: 'Privacy & Security' },
              ].map(item => (
                <button key={item.label} className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined text-neutral-400 ${item.color || ''}`}>{item.icon}</span>
                    <span className="text-sm font-bold text-white/90">{item.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-neutral-600 text-sm">arrow_forward_ios</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 ml-1">Support</h4>
            <div className="rounded-2xl bg-surface-dark border border-white/5 divide-y divide-white/5 overflow-hidden">
              {[
                { icon: 'help', label: 'Help Center' },
                { icon: 'description', label: 'Terms of Service' },
                { icon: 'logout', label: 'Log Out', color: 'text-red-500' },
              ].map(item => (
                <button 
                  key={item.label} 
                  onClick={() => item.label === 'Log Out' && onNavigate(View.WELCOME)}
                  className="w-full flex items-center justify-between p-4 active:bg-white/5 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`material-symbols-outlined ${item.color || 'text-neutral-400'}`}>{item.icon}</span>
                    <span className={`text-sm font-bold ${item.color || 'text-white/90'}`}>{item.label}</span>
                  </div>
                  {item.label !== 'Log Out' && <span className="material-symbols-outlined text-neutral-600 text-sm">arrow_forward_ios</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
