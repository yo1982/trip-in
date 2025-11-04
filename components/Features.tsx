import React, { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';

const BuildingIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const ClickIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
);

const UsersIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-3-5.197M15 21a2 2 0 01-2-2v-1a2 2 0 012-2h6a2 2 0 012 2v1a2 2 0 01-2 2h-6z" />
    </svg>
);

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
        <div className="inline-block p-4 bg-secondary/20 text-secondary rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Features: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <section className="py-20 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">{translations.featuresTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard 
                        icon={<BuildingIcon className="h-8 w-8" />}
                        title={translations.feature1Title}
                        description={translations.feature1Desc}
                    />
                    <FeatureCard 
                        icon={<ClickIcon className="h-8 w-8" />}
                        title={translations.feature2Title}
                        description={translations.feature2Desc}
                    />
                    <FeatureCard 
                        icon={<UsersIcon className="h-8 w-8" />}
                        title={translations.feature3Title}
                        description={translations.feature3Desc}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
