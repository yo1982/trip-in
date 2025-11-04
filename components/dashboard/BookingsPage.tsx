import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { bookings } from '../../constants/bookings';
import { Booking, User } from '../../types';

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

interface BookingsPageProps {
    currentUser: User;
}

const BookingsPage: React.FC<BookingsPageProps> = ({ currentUser }) => {
    const { translations } = useLanguage();
    const isVendor = currentUser.role === 'vendor';

    // In a real app, you would filter bookings based on listings owned by the vendor
    const displayedBookings = isVendor 
        ? bookings.filter(b => b.vendorId === currentUser.id)
        : bookings;

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{isVendor ? translations.myBookings : translations.allBookings}</h1>
                <p className="text-gray-600 mt-1">{isVendor ? translations.manageYourOwnBookings : translations.manageYourBookings}</p>
            </div>
            
             <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.bookingId}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.guest}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.package}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.date}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.totalPaid}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.status}</th>
                            {isVendor && <th className="p-4 font-semibold text-sm text-gray-600">{translations.actions}</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {displayedBookings.map(booking => (
                            <tr key={booking.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-mono text-xs text-gray-500">{booking.id}</td>
                                <td className="p-4 font-medium text-gray-800">{booking.guestName}</td>
                                <td className="p-4 text-gray-600">{booking.packageName}</td>
                                <td className="p-4 text-gray-600">{booking.date}</td>
                                <td className="p-4 text-gray-600">${booking.totalPaid.toLocaleString()}</td>
                                <td className="p-4"><StatusBadge status={booking.status} /></td>
                                {isVendor && (
                                    <td className="p-4">
                                        <div className="flex space-x-2 rtl:space-x-reverse">
                                            <button className="text-secondary hover:underline text-sm font-medium">{translations.chatWithClient}</button>
                                            <button className="text-gray-600 hover:underline text-sm font-medium">{translations.viewReview}</button>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingsPage;