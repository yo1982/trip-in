import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SettingsPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.accountSettings}</h1>
                <p className="text-gray-600 mt-1">{translations.manageYourProfile}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
                 <div className="text-center py-16 text-gray-500">
                    Settings form and options coming soon.
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
