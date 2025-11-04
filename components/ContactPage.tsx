import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);
const LocationIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);


const ContactPage: React.FC = () => {
    const { translations } = useLanguage();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your message!');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <div className="bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{translations.contactTitle}</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{translations.contactSubtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{translations.yourName}</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{translations.yourEmail}</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{translations.subject}</label>
                                <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{translations.message}</label>
                                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-all font-semibold shadow-md">{translations.sendMessage}</button>
                            </div>
                        </form>
                    </div>

                    <div className="space-y-8">
                         <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold text-dark mb-4">{translations.contactInformation}</h3>
                            <div className="space-y-4 text-gray-700">
                                <div className="flex items-start space-x-3 rtl:space-x-reverse">
                                    <LocationIcon className="h-6 w-6 text-primary mt-1"/>
                                    <span>{translations.address}</span>
                                </div>
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <PhoneIcon className="h-6 w-6 text-primary"/>
                                    <a href={`tel:${translations.phone}`} className="hover:text-primary">{translations.phone}</a>
                                </div>
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <MailIcon className="h-6 w-6 text-primary"/>
                                    <a href={`mailto:${translations.email}`} className="hover:text-primary">{translations.email}</a>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-lg overflow-hidden">
                           <img src="https://picsum.photos/600/400?random=11" alt="Map" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;