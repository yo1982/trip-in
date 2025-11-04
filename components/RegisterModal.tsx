import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface RegisterModalProps {
    onClose: () => void;
    onSwitchToLogin: () => void;
}

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, onSwitchToLogin }) => {
    const { translations } = useLanguage();

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Registration functionality coming soon!');
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="register-title"
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative"
                onClick={(e) => e.stopPropagation()}
            >
                 <button onClick={onClose} className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-gray-400 hover:text-gray-600">
                    <CloseIcon className="h-6 w-6" />
                </button>
                <h2 id="register-title" className="text-2xl font-bold text-center text-dark mb-6">{translations.createAnAccount}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="register-name" className="block text-sm font-medium text-gray-700">{translations.yourName}</label>
                        <input type="text" name="name" id="register-name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                    </div>
                    <div>
                        <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">{translations.emailAddress}</label>
                        <input type="email" name="email" id="register-email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                    </div>
                    <div>
                        <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">{translations.password}</label>
                        <input type="password" name="password" id="register-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                    </div>
                     <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">{translations.confirmPassword}</label>
                        <input type="password" name="confirm-password" id="confirm-password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all font-semibold shadow-md">{translations.createAccount}</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        {translations.alreadyHaveAccount}{' '}
                        <button onClick={onSwitchToLogin} className="font-semibold text-primary hover:underline">{translations.login}</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;