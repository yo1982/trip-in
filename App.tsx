import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LegalPage from './components/LegalPage';
import CitiesPage from './components/CitiesPage';
import PackageDetailPage from './components/PackageDetailPage';
import CheckoutPage from './components/CheckoutPage';
import ConfirmationPage from './components/ConfirmationPage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import DashboardLayout from './components/dashboard/DashboardLayout';
import ClientAccountPage from './components/ClientAccountPage';
import { useLanguage } from './context/LanguageContext';
import { Page, Package, BookingDetails, User } from './types';
import { packages } from './constants/packages';
import { users } from './constants/users';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<'user' | 'dashboard'>('user');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [legalPageContent, setLegalPageContent] = useState({ title: '', content: '' });
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  const { translations } = useLanguage();

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleSwitchView = () => {
    if (!currentUser) {
      handleOpenLogin();
      return;
    }
    if (currentUser.role === 'client') {
      alert(translations.dashboardAccessDenied);
      return;
    }
    setCurrentView(prev => prev === 'user' ? 'dashboard' : 'user');
  }

  const handleLegalNavigate = (type: 'privacy' | 'terms') => {
    if (type === 'privacy') {
      setLegalPageContent({
        title: translations.privacyPolicy,
        content: translations.privacyPolicyText
      });
    } else {
      setLegalPageContent({
        title: translations.termsOfService,
        content: translations.termsOfServiceText
      });
    }
    handleNavigate('legal');
  };

  const handleOpenLogin = () => setLoginModalOpen(true);
  const handleOpenRegister = () => setRegisterModalOpen(true);
  const handleCloseModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(false);
  };
  const handleSwitchToRegister = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  };
  const handleSwitchToLogin = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  };

  const handleLogin = (credentials: { email: string; password; }) => {
    const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
    if (user) {
      setCurrentUser(user);
      handleCloseModals();
    } else {
      alert(translations.invalidCredentials);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentView('user');
    handleNavigate('home');
  };
  
  const handleSelectPackage = (packageId: number) => {
    const pkg = packages.find(p => p.id === packageId);
    if (pkg) {
      setSelectedPackage(pkg);
      handleNavigate('package');
    }
  };

  const handleBookNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    handleNavigate('checkout');
  };

  const handleConfirmBooking = (details: { fullName: string; email: string; }) => {
    if (selectedPackage) {
      setBookingDetails({
        package: selectedPackage,
        fullName: details.fullName,
        email: details.email
      });
      setSelectedPackage(null);
      handleNavigate('confirmation');
    }
  };


  const renderUserPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'cities':
        return <CitiesPage onSelectPackage={handleSelectPackage} />;
      case 'package':
        return selectedPackage ? <PackageDetailPage pkg={selectedPackage} onBookNow={handleBookNow} onNavigate={handleNavigate}/> : <HomePage onNavigate={handleNavigate} />;
      case 'checkout':
        return selectedPackage ? <CheckoutPage pkg={selectedPackage} onConfirmBooking={handleConfirmBooking} /> : <HomePage onNavigate={handleNavigate} />;
      case 'confirmation':
        return bookingDetails ? <ConfirmationPage bookingDetails={bookingDetails} onNavigate={handleNavigate} /> : <HomePage onNavigate={handleNavigate} />;
      case 'legal':
        return <LegalPage title={legalPageContent.title} content={legalPageContent.content} />;
      case 'account':
        return currentUser ? <ClientAccountPage currentUser={currentUser} onNavigate={handleNavigate} /> : <HomePage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  if (currentView === 'dashboard' && currentUser && currentUser.role !== 'client') {
    return <DashboardLayout onSwitchView={handleSwitchView} currentUser={currentUser} />;
  }

  return (
    <div className="bg-light text-dark font-sans">
      <Header 
        currentUser={currentUser}
        onNavigate={handleNavigate} 
        onOpenLogin={handleOpenLogin} 
        onOpenRegister={handleOpenRegister}
        onLogout={handleLogout}
        onSwitchView={handleSwitchView}
      />
      <main>{renderUserPage()}</main>
      <Footer onNavigate={handleNavigate} onLegalNavigate={handleLegalNavigate} />
      {isLoginModalOpen && <LoginModal onClose={handleCloseModals} onSwitchToRegister={handleSwitchToRegister} onLogin={handleLogin} />}
      {isRegisterModalOpen && <RegisterModal onClose={handleCloseModals} onSwitchToLogin={handleSwitchToLogin} />}
    </div>
  );
}


const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;