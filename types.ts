export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: string;
}

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

export type Page = 'home' | 'about' | 'contact' | 'cities' | 'package' | 'checkout' | 'confirmation' | 'legal' | 'account';

export interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: 'admin' | 'vendor' | 'client';
}

export interface Package {
  id: number;
  name: string;
  destination: string;
  location: string;
  description: string;
  price: number;
  duration: number;
  imageUrl: string;
  details: string[];
  whatsIncluded: string[];
  whatsNotIncluded: string[];
  vendorId: number;
}

export interface BookingDetails {
  package: Package;
  fullName: string;
  email: string;
}

export interface Listing {
    id: number;
    name: string;
    destination: string;
    price: number;
    status: 'Published' | 'Draft';
}

export interface Booking {
    id: string;
    userId: number;
    vendorId: number;
    guestName: string;
    packageName: string;
    date: string;
    totalPaid: number;
    status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export type DashboardPage = 'dashboard' | 'listings' | 'bookings' | 'users' | 'settings' | 'financials' | 'reviews' | 'support' | 'siteSettings';

export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
    type: 'Payout' | 'Booking Fee' | 'Refund';
    status: 'Completed' | 'Pending' | 'Failed';
}

export interface Review {
  id: number;
  reviewerName: string;
  packageName: string;
  rating: number;
  comment: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface SupportTicket {
  id: string;
  userName: string;
  subject: string;
  date: string;
  status: 'Open' | 'In Progress' | 'Closed';
}

export interface Activity {
  id: number;
  type: 'booking' | 'review' | 'payout' | 'user_registered';
  description: string;
  timestamp: string;
  vendorId?: number;
}