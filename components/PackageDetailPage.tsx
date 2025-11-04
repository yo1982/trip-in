import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Package, Page } from '../types';

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface PackageDetailPageProps {
    pkg: Package;
    onBookNow: (pkg: Package) => void;
    onNavigate: (page: Page) => void;
}

const PackageDetailPage: React.FC<PackageDetailPageProps> = ({ pkg, onBookNow, onNavigate }) => {
    const { translations } = useLanguage();

    return (
        <div className="bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <button onClick={() => onNavigate('cities')} className="text-primary hover:underline">
                        &larr; {translations.backToPackages}
                    </button>
                </div>
                <div className="grid lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3">
                        <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-auto object-cover rounded-lg shadow-lg mb-8" />
                        <h1 className="text-4xl font-extrabold text-dark mb-4">{pkg.name}</h1>
                        <p className="text-gray-600 text-lg mb-8">{pkg.description}</p>
                        
                        <div className="space-y-4">
                             {pkg.details.map((detail, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckIcon className="h-6 w-6 text-green-500 me-3 flex-shrink-0 mt-1" />
                                    <p className="text-gray-700">{detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-light p-8 rounded-lg shadow-lg sticky top-28">
                            <p className="text-lg text-gray-600">{translations.priceFrom}</p>
                            <p className="text-5xl font-bold text-primary mb-2">${pkg.price}</p>
                            <p className="text-gray-500 mb-6">{translations.perPerson}</p>
                            
                            <button onClick={() => onBookNow(pkg)} className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all font-bold text-lg shadow-md">{translations.bookNow}</button>
                            
                            <div className="mt-8">
                                <h3 className="font-bold text-lg mb-4">{translations.whatsIncluded}</h3>
                                <ul className="space-y-2">
                                    {pkg.whatsIncluded.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <CheckIcon className="h-5 w-5 text-green-500 me-2"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="mt-6">
                                <h3 className="font-bold text-lg mb-4">{translations.whatsNotIncluded}</h3>
                                <ul className="space-y-2">
                                    {pkg.whatsNotIncluded.map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-700">
                                            <XIcon className="h-5 w-5 text-red-500 me-2"/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageDetailPage;
