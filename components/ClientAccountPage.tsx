import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Page, Booking, Package } from '../types';
import { bookings } from '../constants/bookings';
import { packages } from '../constants/packages';
import PackageCard from './PackageCard';

const StatusBadge: React.FC<{ status: Booking['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    if (status === 'Confirmed') {
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>{status}</span>;
    }
    if (status === 'Pending') {
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>{status}</span>;
    }
    return <span className={`${baseClasses} bg-red-100 text-red-800`}>{status}</span>;
}

interface ClientAccountPageProps {
    currentUser: User;
    onNavigate: (page: Page) => void;
}

const ClientAccountPage: React.FC<ClientAccountPageProps> = ({ currentUser, onNavigate }) => {
    const { translations } = useLanguage();
    
    const userBookings = bookings.filter(b => b.userId === currentUser.id);
    
    const bookedPackageNames = userBookings.map(b => b.packageName);
    const bookedPackages = packages.filter(p => bookedPackageNames.includes(p.name));
    const pastLocations = [...new Set(bookedPackages.map(p => p.location))];

    const favoritePackages = packages.slice(0, 2); // Mock favorites

    return (
        <div className="bg-light py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{translations.myAccount}</h1>
                    <p className="mt-4 text-lg text-gray-600">{translations.welcomeBackClient.replace('{name}', currentUser.name)}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Left Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-dark mb-4">{translations.profileInformation}</h2>
                            <div className="space-y-2">
                                <div>
                                    <p className="text-sm text-gray-500">{translations.yourName}</p>
                                    <p className="font-semibold">{currentUser.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{translations.yourEmail}</p>
                                    <p className="font-semibold">{currentUser.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-dark mb-4">{translations.myLocations}</h2>
                            {pastLocations.length > 0 ? (
                                <ul className="space-y-2">
                                    {pastLocations.map(location => (
                                        <li key={location} className="font-medium text-gray-700">{location}</li>
                                    ))}
                                </ul>
                            ) : (
                               <p className="text-gray-500">{translations.youHaveNoPastLocations}</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-dark mb-4">{translations.myBookings}</h2>
                            {userBookings.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-max text-left">
                                        <thead className="bg-gray-50 border-b">
                                            <tr>
                                                <th className="p-4 font-semibold text-sm text-gray-600">{translations.package}</th>
                                                <th className="p-4 font-semibold text-sm text-gray-600">{translations.date}</th>
                                                <th className="p-4 font-semibold text-sm text-gray-600">{translations.status}</th>
                                                <th className="p-4 font-semibold text-sm text-gray-600">{translations.actions}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userBookings.map(booking => (
                                                <tr key={booking.id} className="border-b hover:bg-gray-50">
                                                    <td className="p-4 font-medium text-gray-800">{booking.packageName}</td>
                                                    <td className="p-4 text-gray-600">{booking.date}</td>
                                                    <td className="p-4"><StatusBadge status={booking.status} /></td>
                                                    <td className="p-4">
                                                        <div className="flex flex-col sm:flex-row sm:space-x-2 rtl:space-x-reverse space-y-1 sm:space-y-0">
                                                            <button className="text-secondary hover:underline text-sm font-medium text-left">{translations.chatWithVendor}</button>
                                                            <button className="text-accent hover:underline text-sm font-medium text-left">{translations.leaveAReview}</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-8">
                                    <p>{translations.youHaveNoBookings}</p>
                                    <button onClick={() => onNavigate('cities')} className="mt-4 bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-colors">
                                        {translations.explorePackages}
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-dark mb-4">{translations.myFavoritePackages}</h2>
                            {favoritePackages.length > 0 ? (
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {favoritePackages.map(pkg => (
                                        <div key={pkg.id} className="border rounded-lg p-4">
                                            <img src={pkg.imageUrl} alt={pkg.name} className="w-full h-32 object-cover rounded-md mb-2" />
                                            <h3 className="font-bold">{pkg.name}</h3>
                                            <p className="text-sm text-gray-500">{pkg.destination}</p>
                                            <button onClick={() => onNavigate('package')} className="text-primary hover:underline text-sm font-medium mt-2">{translations.viewDetails}</button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500 py-8">
                                    <p>{translations.noFavorites}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientAccountPage;