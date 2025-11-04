import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ChevronDownIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full py-5 text-left font-semibold"
            >
                <span>{question}</span>
                <ChevronDownIcon className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
                <p className="text-gray-600">{answer}</p>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div className="bg-white">
            <div className="relative h-64 bg-primary flex items-center justify-center">
                 <img src="https://picsum.photos/1600/400?random=10" alt="Team working" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white z-10">{translations.aboutTitle}</h1>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-dark mb-4">{translations.aboutMission}</h2>
                    <p className="text-lg text-gray-600 mb-12">{translations.aboutMissionText}</p>
                    <h2 className="text-3xl font-bold text-dark mb-4">{translations.aboutVision}</h2>
                    <p className="text-lg text-gray-600">{translations.aboutVisionText}</p>
                </div>

                <div className="max-w-4xl mx-auto mt-20">
                    <h2 className="text-3xl font-bold text-dark text-center mb-8">{translations.faqTitle}</h2>
                    <div className="space-y-4">
                        <FaqItem question={translations.faqQ1} answer={translations.faqA1} />
                        <FaqItem question={translations.faqQ2} answer={translations.faqA2} />
                        <FaqItem question={translations.faqQ3} answer={translations.faqA3} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;