import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Package } from '../types';

interface CheckoutPageProps {
    pkg: Package;
    onConfirmBooking: (details: { fullName: string; email: string }) => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ pkg, onConfirmBooking }) => {
    const { translations } = useLanguage();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (fullName.trim() && email.trim()) {
            onConfirmBooking({ fullName, email });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="bg-light py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{translations.checkoutTitle}</h1>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-dark mb-6 border-b pb-4">{translations.yourBooking}</h2>
                        <div className="flex space-x-4 rtl:space-x-reverse">
                            <img src={pkg.imageUrl} alt={pkg.name} className="w-24 h-24 object-cover rounded-md"/>
                            <div>
                                <h3 className="font-bold text-lg">{pkg.name}</h3>
                                <p className="text-gray-600">{pkg.destination}</p>
                                <p className="text-primary font-bold text-xl mt-2">${pkg.price}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-dark mb-6 border-b pb-4">{translations.personalInformation}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{translations.fullName}</label>
                                <input 
                                    type="text" 
                                    name="fullName" 
                                    id="fullName" 
                                    required 
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{translations.yourEmail}</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                                />
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all font-semibold shadow-md text-lg">
                                    {translations.confirmBooking}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
