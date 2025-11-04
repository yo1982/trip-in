import React, { ReactNode } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StepCardProps {
    step: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => {
    return (
        <div className="relative ps-10 rtl:ps-0 rtl:pe-10">
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 flex items-center justify-center w-16 h-16 rounded-full bg-accent text-dark font-extrabold text-2xl shadow-md -translate-x-1/2 rtl:translate-x-1/2 -translate-y-4">
                {step}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg h-full border-l-4 border-accent rtl:border-l-0 rtl:border-r-4">
                <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};


const HowItWorks: React.FC = () => {
    const { translations } = useLanguage();
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark">{translations.howItWorksTitle}</h2>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-8 left-1/2 w-0.5 h-[calc(100%-4rem)] bg-gray-200 -translate-x-1/2"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-8 md:gap-x-16">
                        {/* Step 1 */}
                        <div className="flex justify-start">
                            <div className="w-full md:w-5/6 lg:w-4/5">
                                <StepCard step="1" title={translations.step1Title} description={translations.step1Desc} />
                            </div>
                        </div>
                        <div></div>
                        {/* Step 2 */}
                        <div></div>
                        <div className="flex justify-end">
                            <div className="w-full md:w-5/6 lg:w-4/5">
                                <StepCard step="2" title={translations.step2Title} description={translations.step2Desc} />
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="flex justify-start">
                            <div className="w-full md:w-5/6 lg:w-4/5">
                                <StepCard step="3" title={translations.step3Title} description={translations.step3Desc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
