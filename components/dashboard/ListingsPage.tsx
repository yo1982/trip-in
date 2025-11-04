import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { listings } from '../../constants/listings';
import { Listing, User } from '../../types';

const StatusBadge: React.FC<{ status: Listing['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    if (status === 'Published') {
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>{status}</span>;
    }
    return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>{status}</span>;
}

interface ListingsPageProps {
    currentUser: User;
}

const ListingsPage: React.FC<ListingsPageProps> = ({ currentUser }) => {
    const { translations } = useLanguage();
    const isVendor = currentUser.role === 'vendor';

    // In a real app, you would filter listings based on vendor ID
    const displayedListings = isVendor 
        ? listings.slice(0, 2) // Simulate vendor having only 2 listings
        : listings;

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-dark">{isVendor ? translations.myListings : translations.allListings}</h1>
                    <p className="text-gray-600 mt-1">{isVendor ? translations.manageYourOwnListings : translations.manageYourListings}</p>
                </div>
                <button className="bg-primary text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-colors">
                    {translations.addNewListing}
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.listingName}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.destination}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.price}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.status}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.actions}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedListings.map(listing => (
                            <tr key={listing.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-800">{listing.name}</td>
                                <td className="p-4 text-gray-600">{listing.destination}</td>
                                <td className="p-4 text-gray-600">${listing.price.toLocaleString()}</td>
                                <td className="p-4"><StatusBadge status={listing.status} /></td>
                                <td className="p-4">
                                    <div className="flex space-x-2 rtl:space-x-reverse">
                                        <button className="text-blue-600 hover:underline text-sm font-medium">{translations.edit}</button>
                                        <button className="text-yellow-600 hover:underline text-sm font-medium">{translations.managePricing}</button>
                                        <button className="text-red-600 hover:underline text-sm font-medium">{translations.delete}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListingsPage;