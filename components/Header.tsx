import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language, Page, User } from '../types';

const GlobeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18" />
  </svg>
);

const MenuIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 2.056c4.505 0 8.304-2.438 9.9-6.131A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04" />
    </svg>
);

const UserCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


interface HeaderProps {
  currentUser: User | null;
  onNavigate: (page: Page) => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
  onLogout: () => void;
  onSwitchView: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentUser, onNavigate, onOpenLogin, onOpenRegister, onLogout, onSwitchView }) => {
  const { language, setLanguage, translations } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  };

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-primary">Trip In</button>
          </div>
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button onClick={() => handleNavClick('home')} className="text-dark hover:text-primary transition-colors font-medium">{translations.home}</button>
            <button onClick={() => handleNavClick('about')} className="text-dark hover:text-primary transition-colors font-medium">{translations.about}</button>
            <button onClick={() => handleNavClick('cities')} className="text-dark hover:text-primary transition-colors font-medium">{translations.cities}</button>
            <button onClick={() => handleNavClick('contact')} className="text-dark hover:text-primary transition-colors font-medium">{translations.contact}</button>
          </nav>
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {currentUser && currentUser.role === 'client' && (
              <button onClick={() => onNavigate('account')} title={translations.myAccount} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <UserCircleIcon className="h-6 w-6 text-dark" />
              </button>
            )}
            {currentUser && (currentUser.role === 'admin' || currentUser.role === 'vendor') && (
              <button onClick={onSwitchView} title={translations.adminDashboard} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <ShieldCheckIcon className="h-6 w-6 text-dark" />
              </button>
            )}
            <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <GlobeIcon className="h-6 w-6 text-dark" />
            </button>
            {currentUser ? (
              <>
                <span className="font-medium text-dark">{currentUser.name}</span>
                <button onClick={onLogout} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-md">{translations.logout}</button>
              </>
            ) : (
              <>
                <button onClick={onOpenLogin} className="text-dark hover:text-primary transition-colors font-medium">{translations.login}</button>
                <button onClick={onOpenRegister} className="bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-md">{translations.register}</button>
              </>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-dark hover:bg-gray-100">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <button onClick={() => handleNavClick('home')} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.home}</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.about}</button>
            <button onClick={() => handleNavClick('cities')} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.cities}</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.contact}</button>
            <div className="border-t w-full my-2"></div>
            {currentUser ? (
              <>
                {currentUser.role === 'client' && (
                    <button onClick={() => { onNavigate('account'); setIsMenuOpen(false); }} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.myAccount}</button>
                )}
                { (currentUser.role === 'admin' || currentUser.role === 'vendor') &&
                  <button onClick={() => { onSwitchView(); setIsMenuOpen(false); }} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.adminDashboard}</button>
                }
                <button onClick={() => { onLogout(); setIsMenuOpen(false); }} className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-md">{translations.logout}</button>
              </>
            ) : (
              <>
                <button onClick={() => { onOpenLogin(); setIsMenuOpen(false); }} className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-dark hover:bg-gray-50">{translations.login}</button>
                <button onClick={() => { onOpenRegister(); setIsMenuOpen(false); }} className="block w-full text-center bg-primary text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-all font-medium shadow-md">{translations.register}</button>
              </>
            )}
            <button onClick={toggleLanguage} className="mt-2 p-2 rounded-full hover:bg-gray-100 transition-colors">
              <GlobeIcon className="h-6 w-6 text-dark" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;