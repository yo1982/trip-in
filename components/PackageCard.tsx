import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Package } from '../types';

interface PackageCardProps {
    pkg: Package;
    onSelectPackage: (packageId: number) => void;
}

const ClockIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelectPackage }) => {
    const { translations } = useLanguage();

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
            <div className="relative">
                <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-56 object-cover" />
                <div className="absolute top-0 right-0 bg-accent text-dark font-bold px-3 py-1 m-2 rounded-full text-sm">
                    {pkg.destination}
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-dark mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{pkg.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-4">
                     <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 me-1 text-secondary"/>
                        <span>{pkg.duration} {translations.days}</span>
                     </div>
                     <div className="text-right">
                        <span className="text-xs text-gray-500">{translations.priceFrom}</span>
                        <p className="font-bold text-lg text-primary">${pkg.price}</p>
                     </div>
                </div>
                <button 
                    onClick={() => onSelectPackage(pkg.id)}
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all font-semibold"
                >
                    {translations.viewDetails}
                </button>
            </div>
        </div>
    );
};

export default PackageCard;
