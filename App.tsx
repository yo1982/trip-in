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
import { useLanguage } from './context/LanguageContext';
import { Page, Package, BookingDetails } from './types';
import { packages } from './constants/packages';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
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


  const renderPage = () => {
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
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-light text-dark font-sans">
      <Header onNavigate={handleNavigate} onOpenLogin={handleOpenLogin} onOpenRegister={handleOpenRegister} />
      <main>{renderPage()}</main>
      <Footer onNavigate={handleNavigate} onLegalNavigate={handleLegalNavigate} />
      {isLoginModalOpen && <LoginModal onClose={handleCloseModals} onSwitchToRegister={handleSwitchToRegister} />}
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
