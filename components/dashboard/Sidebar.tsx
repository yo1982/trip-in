import React, { ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { DashboardPage, User } from '../../types';

const HomeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);
const ListIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
);
const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 21a2 2 0 01-2-2v-1a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-2 2h-6z" />
    </svg>
);
const CogIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DollarSignIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    </svg>
);
const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);
const SupportIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

interface SidebarProps {
    currentPage: DashboardPage;
    setCurrentPage: (page: DashboardPage) => void;
    userRole: User['role'];
}

interface NavItemProps {
    icon: ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
    userRole: User['role'];
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick, userRole }) => {
    const activeClasses = userRole === 'admin'
        ? 'bg-primary text-white shadow-lg'
        : 'bg-secondary text-white shadow-lg';

    const hoverClasses = userRole === 'admin'
        ? 'hover:bg-primary/10 hover:text-primary'
        : 'hover:bg-secondary/10 hover:text-secondary';
    
    return (
        <button 
            onClick={onClick}
            className={`w-full flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-colors ${
                isActive ? activeClasses : `text-gray-600 ${hoverClasses}`
            }`}
        >
            {icon}
            <span className="font-medium">{label}</span>
        </button>
    )
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, userRole }) => {
    const { translations } = useLanguage();

    return (
        <aside className="w-64 bg-white shadow-md flex-shrink-0 rtl:border-l ltr:border-r">
            <div className="h-20 flex items-center justify-center border-b">
                <h1 className="text-2xl font-bold text-primary">Trip In</h1>
            </div>
            <nav className="p-4 space-y-2">
                <NavItem 
                    icon={<HomeIcon className="h-6 w-6"/>}
                    label={translations.dashboard}
                    isActive={currentPage === 'dashboard'}
                    onClick={() => setCurrentPage('dashboard')}
                    userRole={userRole}
                />
                {userRole === 'admin' && (
                    <>
                        <NavItem 
                            icon={<ListIcon className="h-6 w-6"/>}
                            label={translations.listings}
                            isActive={currentPage === 'listings'}
                            onClick={() => setCurrentPage('listings')}
                            userRole={userRole}
                        />
                        <NavItem 
                            icon={<CalendarIcon className="h-6 w-6"/>}
                            label={translations.bookings}
                            isActive={currentPage === 'bookings'}
                            onClick={() => setCurrentPage('bookings')}
                            userRole={userRole}
                        />
                        <NavItem 
                            icon={<UsersIcon className="h-6 w-6"/>}
                            label={translations.users}
                            isActive={currentPage === 'users'}
                            onClick={() => setCurrentPage('users')}
                            userRole={userRole}
                        />
                        <div className="pt-2 my-2 border-t"></div>
                         <NavItem 
                            icon={<DollarSignIcon className="h-6 w-6"/>}
                            label={translations.financials}
                            isActive={currentPage === 'financials'}
                            onClick={() => setCurrentPage('financials')}
                            userRole={userRole}
                        />
                         <NavItem 
                            icon={<StarIcon className="h-6 w-6"/>}
                            label={translations.reviews}
                            isActive={currentPage === 'reviews'}
                            onClick={() => setCurrentPage('reviews')}
                            userRole={userRole}
                        />
                         <NavItem 
                            icon={<SupportIcon className="h-6 w-6"/>}
                            label={translations.support}
                            isActive={currentPage === 'support'}
                            onClick={() => setCurrentPage('support')}
                            userRole={userRole}
                        />
                         <NavItem 
                            icon={<CogIcon className="h-6 w-6"/>}
                            label={translations.siteSettings}
                            isActive={currentPage === 'siteSettings'}
                            onClick={() => setCurrentPage('siteSettings')}
                            userRole={userRole}
                        />
                    </>
                )}
                {userRole === 'vendor' && (
                    <>
                        <NavItem 
                            icon={<ListIcon className="h-6 w-6"/>}
                            label={translations.myListings}
                            isActive={currentPage === 'listings'}
                            onClick={() => setCurrentPage('listings')}
                            userRole={userRole}
                        />
                        <NavItem 
                            icon={<CalendarIcon className="h-6 w-6"/>}
                            label={translations.myBookings}
                            isActive={currentPage === 'bookings'}
                            onClick={() => setCurrentPage('bookings')}
                            userRole={userRole}
                        />
                    </>
                )}
                 <NavItem 
                    icon={<CogIcon className="h-6 w-6"/>}
                    label={translations.settings}
                    isActive={currentPage === 'settings'}
                    onClick={() => setCurrentPage('settings')}
                    userRole={userRole}
                />
            </nav>
        </aside>
    );
};

export default Sidebar;