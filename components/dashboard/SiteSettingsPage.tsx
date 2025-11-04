import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SiteSettingsPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.siteSettings}</h1>
                <p className="text-gray-600 mt-1">{translations.manageSite}</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
                 <div className="text-center py-16 text-gray-500">
                    Global controls for cities, regions, and pricing coming soon.
                </div>
            </div>
        </div>
    );
};

export default SiteSettingsPage;