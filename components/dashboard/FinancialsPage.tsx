import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { transactions } from '../../constants/transactions';
import { Transaction } from '../../types';

const StatusBadge: React.FC<{ status: Transaction['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    const statusColors = {
        Completed: 'bg-green-100 text-green-800',
        Pending: 'bg-yellow-100 text-yellow-800',
        Failed: 'bg-red-100 text-red-800',
    };
    return <span className={`${baseClasses} ${statusColors[status]}`}>{status}</span>;
}

const TypeBadge: React.FC<{ type: Transaction['type'] }> = ({ type }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    const typeColors = {
        'Payout': 'bg-blue-100 text-blue-800',
        'Booking Fee': 'bg-indigo-100 text-indigo-800',
        'Refund': 'bg-pink-100 text-pink-800',
    };
    return <span className={`${baseClasses} ${typeColors[type]}`}>{type}</span>;
}


const FinancialsPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.financials}</h1>
                <p className="text-gray-600 mt-1">{translations.manageTransactions}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.transactionId}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.date}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.description}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.amount}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.type}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.status}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-mono text-xs text-gray-500">{transaction.id}</td>
                                <td className="p-4 text-gray-600">{transaction.date}</td>
                                <td className="p-4 font-medium text-gray-800">{transaction.description}</td>
                                <td className="p-4 text-gray-600">${transaction.amount.toLocaleString()}</td>
                                <td className="p-4"><TypeBadge type={transaction.type} /></td>
                                <td className="p-4"><StatusBadge status={transaction.status} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FinancialsPage;
