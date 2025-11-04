import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { User } from '../../types';

const LogoutIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

const NightModeToggle: React.FC = () => {
    const { translations } = useLanguage();
    const [isNightMode, setNightMode] = useState(false);

    useEffect(() => {
        if (isNightMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isNightMode]);

    return (
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-medium text-gray-600">{translations.nightMode}</span>
            <button
                onClick={() => setNightMode(!isNightMode)}
                className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-200 dark:bg-gray-600 focus:outline-none"
            >
                <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isNightMode ? 'translate-x-6 rtl:-translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    );
};


interface DashboardHeaderProps {
    onSwitchView: () => void;
    currentUser: User;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onSwitchView, currentUser }) => {
    const { translations } = useLanguage();

    return (
        <header className="h-20 bg-white shadow-sm flex-shrink-0 flex items-center justify-end px-8 border-b">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
                <NightModeToggle />
                <button 
                    onClick={onSwitchView}
                    className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                >
                    <LogoutIcon className="h-5 w-5" />
                    <span>{translations.switchToUserView}</span>
                </button>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentUser.role === 'admin' ? 'bg-primary' : 'bg-secondary'}`}>
                    <span className="text-white font-bold">{currentUser.name.charAt(0)}</span>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader;