import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { packages } from '../constants/packages';
import PackageCard from './PackageCard';

interface CitiesPageProps {
    onSelectPackage: (packageId: number) => void;
}

const CitiesPage: React.FC<CitiesPageProps> = ({ onSelectPackage }) => {
    const { translations } = useLanguage();
    return (
        <div className="bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{translations.packagesTitle}</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{translations.packagesSubtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map(pkg => (
                        <PackageCard key={pkg.id} pkg={pkg} onSelectPackage={onSelectPackage} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CitiesPage;
