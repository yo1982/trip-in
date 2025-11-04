import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Page } from '../types';

interface FooterProps {
    onNavigate: (page: Page) => void;
    onLegalNavigate: (type: 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onLegalNavigate }) => {
    const { translations } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-primary mb-2">Trip In</h2>
                        <p className="text-gray-400 max-w-md">{translations.footerDescription}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">{translations.quickLinks}</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors">{translations.about}</button></li>
                            <li><button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors">{translations.contact}</button></li>
                            <li><button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors">{translations.faq}</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">{translations.legal}</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => onLegalNavigate('privacy')} className="text-gray-400 hover:text-white transition-colors">{translations.privacyPolicy}</button></li>
                            <li><button onClick={() => onLegalNavigate('terms')} className="text-gray-400 hover:text-white transition-colors">{translations.termsOfService}</button></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    <p>&copy; {currentYear} Trip In. {translations.allRightsReserved}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;