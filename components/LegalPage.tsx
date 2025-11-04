import React from 'react';

interface LegalPageProps {
    title: string;
    content: string;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, content }) => {
    return (
        <div className="bg-white">
            <div className="relative h-48 bg-dark flex items-center justify-center">
                 <img src="https://picsum.photos/1600/300?random=12" alt="Legal background" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white z-10">{title}</h1>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-4xl mx-auto prose lg:prose-lg text-gray-700">
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default LegalPage;