
export enum View {
  WELCOME = 'welcome',
  REGISTER = 'register',
  HOME = 'home',
  RESULTS = 'results',
  SEAT_SELECTION = 'seat-selection',
  PAYMENT = 'payment',
  TICKET = 'ticket',
  AI_CHAT = 'ai-chat',
  PROFILE = 'profile',
  ADMIN = 'admin'
}

export interface Route {
  id: string;
  origin: string;
  destination: string;
  price: number;
  imageUrl: string;
}

export interface BusTrip {
  id: string;
  company: string;
  logoUrl: string;
  rating: number;
  reviewsCount: number;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  origin: string;
  destination: string;
  price: number;
  class: string;
  amenities: string[];
  status?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'route' | 'forecast';
  data?: any;
}
