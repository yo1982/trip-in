import { Booking } from "../types";
import { packages } from './packages';

const getVendorIdForPackage = (packageName: string) => {
    const pkg = packages.find(p => p.name === packageName);
    return pkg ? pkg.vendorId : 2; // Default to vendor user if not found
}

export const bookings: Booking[] = [
    { id: 'BK001', userId: 3, vendorId: getVendorIdForPackage('Parisian Dream'), guestName: 'Client User', packageName: 'Parisian Dream', date: '2024-08-15', totalPaid: 1200, status: 'Confirmed' },
    { id: 'BK002', userId: 1, vendorId: getVendorIdForPackage('Tokyo Adventure'), guestName: 'Admin User', packageName: 'Tokyo Adventure', date: '2024-09-01', totalPaid: 1800, status: 'Confirmed' },
    { id: 'BK003', userId: 2, vendorId: getVendorIdForPackage('Dubai Luxury Escape'), guestName: 'Vendor User', packageName: 'Dubai Luxury Escape', date: '2024-07-20', totalPaid: 2500, status: 'Pending' },
    { id: 'BK004', userId: 3, vendorId: getVendorIdForPackage('Roman Holiday'), guestName: 'Client User', packageName: 'Roman Holiday', date: '2024-06-10', totalPaid: 1350, status: 'Cancelled' },
    { id: 'BK005', userId: 3, vendorId: getVendorIdForPackage('Santorini Sunset'), guestName: 'Client User', packageName: 'Santorini Sunset', date: '2024-09-05', totalPaid: 2100, status: 'Confirmed' },
];