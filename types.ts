import { ReactNode } from "react";

export type Language = 'en' | 'ar';
export type Page = 'home' | 'about' | 'contact' | 'legal' | 'cities' | 'package' | 'checkout' | 'confirmation';

export interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, any>;
}

export interface Package {
  id: number;
  name: string;
  destination: string;
  description: string;
  price: number;
  duration: number; // in days
  imageUrl: string;
  details: string[];
  whatsIncluded: string[];
  whatsNotIncluded: string[];
}

export interface BookingDetails {
  package: Package;
  fullName: string;
  email: string;
}
