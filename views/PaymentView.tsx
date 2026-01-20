
import React, { useState } from 'react';
import { View, BusTrip } from '../types';

interface Props {
  onNavigate: (view: View) => void;
  trip: BusTrip | null;
  seatCount: number;
}

const PaymentView: React.FC<Props> = ({ onNavigate, trip, seatCount }) => {
  const totalPrice = (trip?.price || 0) * seatCount;
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onNavigate(View.TICKET);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full bg-background-dark text-white overflow-hidden">
      <header className="flex items-center p-4 pt-12 pb-2 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={() => onNavigate(View.SEAT_SELECTION)}
          className="text-white flex size-12 items-center justify-center cursor-pointer"
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-white text-lg font-bold flex-1 text-center pr-12">Secure Payment</h2>
      </header>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <div className="px-6 pt-6 pb-2">
          <h3 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">Order Summary</h3>
        </div>

        <div className="px-6 py-4">
          <div className="rounded-2xl bg-surface-dark p-5 border border-white/5 space-y-4 shadow-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white text-lg font-bold leading-tight">{trip?.origin} → {trip?.destination}</p>
                <p className="text-neutral-500 text-xs font-medium mt-1 uppercase tracking-widest">{trip?.company} • {trip?.class}</p>
              </div>
              <div className="size-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden">
                <img src={trip?.logoUrl} alt="Logo" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="h-px bg-white/5"></div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Tickets ({seatCount}x)</span>
                <span className="text-white font-medium">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-400">Service Fee</span>
                <span className="text-white font-medium">$0.00</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-white font-bold">Total Amount</span>
                <span className="text-accent-green text-xl font-black">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 pb-2">
          <h3 className="text-white text-[11px] uppercase tracking-[0.2em] font-bold opacity-40">Payment Details</h3>
        </div>

        <div className="px-6 py-4 space-y-4 pb-32">
          <div className="relative group">
            <p className="text-white text-xs font-semibold mb-2 ml-1">Cardholder Name</p>
            <input 
              className="w-full h-14 bg-surface-dark border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-accent-green transition-colors" 
              placeholder="Juan Pérez" 
            />
          </div>

          <div className="relative group">
            <p className="text-white text-xs font-semibold mb-2 ml-1">Card Number</p>
            <div className="relative">
              <input 
                className="w-full h-14 bg-surface-dark border border-white/10 rounded-xl px-4 pl-12 text-white focus:outline-none focus:border-accent-green transition-colors" 
                placeholder="0000 0000 0000 0000" 
              />
              <span className="material-symbols-outlined absolute left-4 top-4 text-neutral-500">credit_card</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative group">
              <p className="text-white text-xs font-semibold mb-2 ml-1">Expiry Date</p>
              <input 
                className="w-full h-14 bg-surface-dark border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-accent-green transition-colors" 
                placeholder="MM/YY" 
              />
            </div>
            <div className="relative group">
              <p className="text-white text-xs font-semibold mb-2 ml-1">CVV</p>
              <input 
                className="w-full h-14 bg-surface-dark border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-accent-green transition-colors" 
                placeholder="000" 
                type="password"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-accent-green/5 border border-accent-green/10 mt-4">
            <span className="material-symbols-outlined text-accent-green">verified_user</span>
            <p className="text-[11px] text-neutral-400 leading-tight">
              Your payment information is encrypted and processed through our secure PCI-DSS compliant partner.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-6 pb-12 bg-background-dark/95 backdrop-blur-xl border-t border-white/5">
        <button 
          disabled={isProcessing}
          onClick={handlePayment}
          className="w-full h-16 bg-accent-green text-primary font-black rounded-2xl flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/20 active:scale-95 transition-all disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary border-t-transparent"></div>
              <span>PROCESSING...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">lock</span>
              <span>PAY ${totalPrice.toFixed(2)}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PaymentView;
