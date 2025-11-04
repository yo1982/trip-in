import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { reviews } from '../../constants/reviews';
import { Review } from '../../types';

const StarIcon: React.FC<{className?: string, filled: boolean}> = ({className, filled}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${className} ${filled ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Rating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-5 w-5" filled={i < rating} />
        ))}
    </div>
);

const StatusBadge: React.FC<{ status: Review['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    const statusColors = {
        Approved: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Rejected: 'bg-red-100 text-red-800',
    };
    return <span className={`${baseClasses} ${statusColors[status]}`}>{status}</span>;
}

const ReviewsPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.reviews}</h1>
                <p className="text-gray-600 mt-1">{translations.manageReviews}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.reviewer}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.package}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.rating}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.comment}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.date}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.status}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.actions}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-800">{review.reviewerName}</td>
                                <td className="p-4 text-gray-600">{review.packageName}</td>
                                <td className="p-4"><Rating rating={review.rating} /></td>
                                <td className="p-4 text-gray-600 text-sm max-w-xs truncate">{review.comment}</td>
                                <td className="p-4 text-gray-600">{review.date}</td>
                                <td className="p-4"><StatusBadge status={review.status} /></td>
                                <td className="p-4">
                                    {review.status === 'Pending' && (
                                        <div className="flex space-x-2 rtl:space-x-reverse">
                                            <button className="text-green-600 hover:underline text-sm font-medium">{translations.approve}</button>
                                            <button className="text-red-600 hover:underline text-sm font-medium">{translations.reject}</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewsPage;