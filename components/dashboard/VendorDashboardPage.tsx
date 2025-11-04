import React, { ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { User, Activity } from '../../types';
import { activities } from '../../constants/activities';


const DollarSignIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    </svg>
);

const CalendarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const MailIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const StarIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
);


interface StatCardProps {
    icon: ReactNode;
    title: string;
    value: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                {icon}
            </div>
            <div className="ms-4">
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-dark">{value}</p>
            </div>
        </div>
    </div>
);

const ActivityIcon: React.FC<{type: Activity['type']}> = ({type}) => {
    const iconClasses = "h-6 w-6";
    const containerClasses = "p-2 rounded-full";
    switch(type) {
        case 'booking':
            return <div className={`bg-blue-100 text-blue-600 ${containerClasses}`}><CalendarIcon className={iconClasses} /></div>;
        case 'review':
            return <div className={`bg-yellow-100 text-yellow-600 ${containerClasses}`}><StarIcon className={iconClasses} /></div>;
        case 'payout':
            return <div className={`bg-green-100 text-green-600 ${containerClasses}`}><DollarSignIcon className={iconClasses} /></div>;
        default:
            return null;
    }
}

interface VendorDashboardPageProps {
    currentUser: User;
}

const VendorDashboardPage: React.FC<VendorDashboardPageProps> = ({ currentUser }) => {
    const { translations } = useLanguage();
    
    // Filter activities relevant to the current vendor
    const vendorActivities = activities.filter(a => a.vendorId === currentUser.id || (a.type !== 'booking' && a.type !== 'payout'));

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.welcomeBack.replace('{name}', currentUser.name)}</h1>
                <p className="text-gray-600 mt-1">{translations.vendorDashboardOverview}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    icon={<DollarSignIcon className="h-6 w-6" />}
                    title={translations.yourRevenue}
                    value="$5,680" // Mock data for vendor
                />
                 <StatCard 
                    icon={<CalendarIcon className="h-6 w-6" />}
                    title={translations.bookings}
                    value="42" // Mock data for vendor
                />
                 <StatCard 
                    icon={<MailIcon className="h-6 w-6" />}
                    title={translations.unreadMessages}
                    value="5" // Mock data for vendor
                />
                <StatCard 
                    icon={<DollarSignIcon className="h-6 w-6" />}
                    title={translations.pendingPayouts}
                    value="$1,230" // Mock data for vendor
                />
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold text-dark mb-4">{translations.yourRecentActivity}</h2>
                 <div className="space-y-4">
                    {vendorActivities.slice(0, 4).map(activity => ( // Show a smaller list for vendors
                         <div key={activity.id} className="flex items-center space-x-4 rtl:space-x-reverse">
                            <ActivityIcon type={activity.type} />
                            <div>
                                <p className="text-sm font-medium text-gray-800">{activity.description}</p>
                                <p className="text-xs text-gray-500">{activity.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VendorDashboardPage;