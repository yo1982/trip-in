import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LoginModalProps {
    onClose: () => void;
    onSwitchToRegister: () => void;
    onLogin: (credentials: {email: string, password}) => void;
}

const CloseIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSwitchToRegister, onLogin }) => {
    const { translations } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        onLogin({ email, password });
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative" 
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-gray-400 hover:text-gray-600">
                    <CloseIcon className="h-6 w-6" />
                </button>
                <h2 id="login-title" className="text-2xl font-bold text-center text-dark mb-6">{translations.loginToYourAccount}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">{translations.emailAddress}</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="login-email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-baseline">
                             <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">{translations.password}</label>
                             <a href="#" className="text-sm text-primary hover:underline">{translations.forgotPassword}</a>
                        </div>
                        <input 
                            type="password" 
                            name="password" 
                            id="login-password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all font-semibold shadow-md">{translations.login}</button>
                    </div>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        {translations.dontHaveAccount}{' '}
                        <button onClick={onSwitchToRegister} className="font-semibold text-primary hover:underline">{translations.register}</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;