
import React, { useState, useEffect } from 'react';
import { View, BusTrip } from './types';
import WelcomeView from './views/WelcomeView';
import RegisterView from './views/RegisterView';
import HomeView from './views/HomeView';
import ResultsView from './views/ResultsView';
import SeatSelectionView from './views/SeatSelectionView';
import PaymentView from './views/PaymentView';
import TicketView from './views/TicketView';
import AIChatView from './views/AIChatView';
import ProfileView from './views/ProfileView';
import AdminView from './views/AdminView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);
  const [selectedTrip, setSelectedTrip] = useState<BusTrip | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  // Simple view switcher
  const renderView = () => {
    switch (currentView) {
      case View.WELCOME:
        return <WelcomeView onNavigate={setCurrentView} />;
      case View.REGISTER:
        return <RegisterView onNavigate={setCurrentView} onBack={() => setCurrentView(View.WELCOME)} />;
      case View.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case View.RESULTS:
        return <ResultsView onNavigate={setCurrentView} onSelectTrip={(trip) => { setSelectedTrip(trip); setCurrentView(View.SEAT_SELECTION); }} />;
      case View.SEAT_SELECTION:
        return <SeatSelectionView onNavigate={setCurrentView} trip={selectedTrip} onSeatsChange={setSelectedSeats} selectedSeats={selectedSeats} />;
      case View.PAYMENT:
        return <PaymentView onNavigate={setCurrentView} trip={selectedTrip} seatCount={selectedSeats.length} />;
      case View.TICKET:
        return <TicketView onNavigate={setCurrentView} trip={selectedTrip} seats={selectedSeats} />;
      case View.AI_CHAT:
        return <AIChatView onNavigate={setCurrentView} />;
      case View.PROFILE:
        return <ProfileView onNavigate={setCurrentView} />;
      case View.ADMIN:
        return <AdminView onNavigate={setCurrentView} />;
      default:
        return <WelcomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-full max-w-[430px] h-[932px] overflow-hidden bg-background-dark shadow-2xl flex flex-col font-sans">
        {/* iOS-like Status Bar */}
        <div className="absolute top-0 left-0 w-full h-12 px-8 flex items-center justify-between z-[60] pointer-events-none">
          <div className="text-white text-sm font-bold">9:41</div>
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-white text-sm">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-white text-sm">wifi</span>
            <span className="material-symbols-outlined text-white text-sm">battery_full</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {renderView()}
        </div>

        {/* iOS-like Home Indicator (Global, but hidden on welcome/register if needed) */}
        {!([View.WELCOME, View.REGISTER].includes(currentView)) && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-neutral-700/50 rounded-full z-[70] pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default App;
