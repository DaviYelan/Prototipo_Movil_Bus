
import React from 'react';
import { View, BusTrip } from '../types';

interface Props {
  onNavigate: (view: View) => void;
  trip: BusTrip | null;
  seats: string[];
}

const TicketView: React.FC<Props> = ({ onNavigate, trip, seats }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark overflow-hidden">
      <header className="flex items-center p-6 pt-12 justify-between">
        <h2 className="text-white text-xl font-bold">Your Ticket</h2>
        <button 
          onClick={() => onNavigate(View.HOME)}
          className="text-accent-green font-bold text-sm"
        >
          Done
        </button>
      </header>

      <div className="flex-1 px-6 pb-32 overflow-y-auto hide-scrollbar flex flex-col items-center">
        <div className="w-full max-w-sm bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-2xl">
          {/* Top part */}
          <div className="p-6 bg-accent-green text-primary">
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Company</span>
                <span className="text-lg font-black">{trip?.company}</span>
              </div>
              <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center overflow-hidden border border-white/10">
                <img src={trip?.logoUrl} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-black">UIO</span>
                <span className="text-[10px] font-bold uppercase opacity-60">{trip?.origin}</span>
              </div>
              <div className="flex-1 px-4 flex flex-col items-center opacity-40">
                <span className="material-symbols-outlined text-3xl">directions_bus</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-black">GYE</span>
                <span className="text-[10px] font-bold uppercase opacity-60 text-right">{trip?.destination}</span>
              </div>
            </div>
          </div>

          {/* Perforation */}
          <div className="relative h-6 bg-white flex items-center px-6">
            <div className="absolute -left-3 size-6 rounded-full bg-background-dark"></div>
            <div className="absolute -right-3 size-6 rounded-full bg-background-dark"></div>
            <div className="w-full border-t-2 border-dashed border-neutral-100"></div>
          </div>

          {/* Details */}
          <div className="p-8 space-y-8 bg-white text-primary">
            <div className="grid grid-cols-2 gap-y-6">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Date</p>
                <p className="text-sm font-bold">Oct 24, 2023</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Time</p>
                <p className="text-sm font-bold">{trip?.departureTime}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Passenger</p>
                <p className="text-sm font-bold">Juan Pérez</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Seats</p>
                <p className="text-sm font-bold">{seats.join(', ')}</p>
              </div>
            </div>

            <div className="flex flex-col items-center pt-4">
              <div className="size-48 bg-neutral-100 rounded-2xl p-4 flex items-center justify-center border-2 border-neutral-50 mb-4">
                {/* Simulated QR Code */}
                <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center p-2 opacity-90">
                  <div className="grid grid-cols-4 gap-1 w-full h-full">
                    {Array.from({length: 16}).map((_, i) => (
                      <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">E-Ticket: BG-9921-XQ</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 w-full max-w-sm">
          <button className="h-14 bg-white/10 rounded-xl text-white font-bold flex items-center justify-center gap-2 border border-white/5 active:scale-95 transition-all">
            <span className="material-symbols-outlined">download</span>
            Save to Apple Wallet
          </button>
          <button className="h-14 bg-white/10 rounded-xl text-white font-bold flex items-center justify-center gap-2 border border-white/5 active:scale-95 transition-all">
            <span className="material-symbols-outlined">share</span>
            Share Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketView;
