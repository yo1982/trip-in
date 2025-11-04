import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SearchIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const Hero: React.FC = () => {
  const { translations } = useLanguage();
  const [destination, setDestination] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination.trim()) {
      alert(`Searching for: "${destination}" (feature coming soon!)`);
    } else {
      alert('Please enter a destination.');
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img src="https://picsum.photos/1600/900?random=1" alt="Beautiful destination" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{translations.heroTitle}</h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">{translations.heroSubtitle}</p>
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-2xl">
          <form onSubmit={handleSearch} className="flex items-center">
            <input 
              type="text" 
              placeholder={translations.destination} 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="flex-grow bg-transparent text-dark placeholder-gray-500 focus:outline-none px-4 py-2"
            />
            <button type="submit" className="bg-primary text-white rounded-full p-3 hover:bg-opacity-90 transition-all flex items-center space-x-2 rtl:space-x-reverse">
              <SearchIcon className="h-6 w-6" />
              <span className="hidden sm:inline font-semibold">{translations.search}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;