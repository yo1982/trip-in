import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BookingDetails, Page } from '../types';

const CheckCircleIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface ConfirmationPageProps {
    bookingDetails: BookingDetails;
    onNavigate: (page: Page) => void;
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ bookingDetails, onNavigate }) => {
    const { translations } = useLanguage();
    const { pkg } = bookingDetails;

    return (
        <div className="bg-light py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
                    <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{translations.bookingConfirmed}</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{translations.bookingConfirmedMsg}</p>

                    <div className="mt-10 text-left border-t pt-8 space-y-4">
                         <h2 className="text-2xl font-bold text-dark mb-6 text-center">{translations.bookingSummary}</h2>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">{translations.package}:</span>
                            <span className="font-bold text-dark">{bookingDetails.package.name}</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">{translations.fullName}:</span>
                            <span className="font-bold text-dark">{bookingDetails.fullName}</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">{translations.emailAddress}:</span>
                            <span className="font-bold text-dark">{bookingDetails.email}</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-600">{translations.price}:</span>
                            <span className="font-bold text-primary text-xl">${bookingDetails.package.price}</span>
                         </div>
                    </div>

                    <div className="mt-10">
                        <button 
                            onClick={() => onNavigate('home')}
                            className="bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-all font-semibold shadow-md text-lg"
                        >
                            {translations.backToHome}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
