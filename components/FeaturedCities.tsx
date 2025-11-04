import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Page } from '../types';

interface CityCardProps {
    imageUrl: string;
    name: string;
    description: string;
    onClick: () => void;
}

const CityCard: React.FC<CityCardProps> = ({ imageUrl, name, description, onClick }) => (
    <button onClick={onClick} className="relative rounded-lg overflow-hidden shadow-lg group text-left">
        <img src={imageUrl} alt={name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="mt-1 opacity-90">{description}</p>
        </div>
    </button>
);

interface FeaturedCitiesProps {
    onNavigate: (page: Page) => void;
}

const FeaturedCities: React.FC<FeaturedCitiesProps> = ({ onNavigate }) => {
    const { translations } = useLanguage();

    const cities = [
        { name: translations.paris, description: translations.parisDesc, imageUrl: 'https://picsum.photos/400/600?random=2' },
        { name: translations.tokyo, description: translations.tokyoDesc, imageUrl: 'https://picsum.photos/400/600?random=3' },
        { name: translations.dubai, description: translations.dubaiDesc, imageUrl: 'https://picsum.photos/400/600?random=4' },
        { name: translations.newYork, description: translations.newYorkDesc, imageUrl: 'https://picsum.photos/400/600?random=5' },
    ];

    return (
        <section className="py-20 bg-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">{translations.featuredCitiesTitle}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cities.map(city => (
                        <CityCard 
                            key={city.name}
                            name={city.name}
                            description={city.description}
                            imageUrl={city.imageUrl}
                            onClick={() => onNavigate('cities')}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCities;
