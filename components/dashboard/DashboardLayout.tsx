import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import AdminDashboardPage from './AdminDashboardPage';
import VendorDashboardPage from './VendorDashboardPage';
import ListingsPage from './ListingsPage';
import BookingsPage from './BookingsPage';
import SettingsPage from './SettingsPage';
import UsersPage from './UsersPage';
import FinancialsPage from './FinancialsPage';
import ReviewsPage from './ReviewsPage';
import SupportPage from './SupportPage';
import SiteSettingsPage from './SiteSettingsPage';
import { DashboardPage, User } from '../../types';

interface DashboardLayoutProps {
    onSwitchView: () => void;
    currentUser: User;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ onSwitchView, currentUser }) => {
    const [currentPage, setCurrentPage] = useState<DashboardPage>('dashboard');

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return currentUser.role === 'admin' ? <AdminDashboardPage currentUser={currentUser} /> : <VendorDashboardPage currentUser={currentUser} />;
            case 'listings':
                return <ListingsPage currentUser={currentUser} />;
            case 'bookings':
                return <BookingsPage currentUser={currentUser} />;
            case 'users':
                return <UsersPage />;
            case 'settings':
                return <SettingsPage />;
            case 'financials':
                return <FinancialsPage />;
            case 'reviews':
                return <ReviewsPage />;
            case 'support':
                return <SupportPage />;
            case 'siteSettings':
                return <SiteSettingsPage />;
            default:
                 return currentUser.role === 'admin' ? <AdminDashboardPage currentUser={currentUser} /> : <VendorDashboardPage currentUser={currentUser} />;
        }
    };
    
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                userRole={currentUser.role}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
                <DashboardHeader onSwitchView={onSwitchView} currentUser={currentUser} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-8">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;