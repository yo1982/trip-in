import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { supportTickets } from '../../constants/supportTickets';
import { SupportTicket } from '../../types';

const StatusBadge: React.FC<{ status: SupportTicket['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    const statusColors = {
        Open: 'bg-green-100 text-green-800',
        'In Progress': 'bg-yellow-100 text-yellow-800',
        Closed: 'bg-gray-100 text-gray-800',
    };
    return <span className={`${baseClasses} ${statusColors[status]}`}>{status}</span>;
}

const SupportPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.support}</h1>
                <p className="text-gray-600 mt-1">{translations.manageSupport}</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.ticketId}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.user}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.subject}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.date}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.status}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.actions}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supportTickets.map(ticket => (
                            <tr key={ticket.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-mono text-xs text-gray-500">{ticket.id}</td>
                                <td className="p-4 font-medium text-gray-800">{ticket.userName}</td>
                                <td className="p-4 text-gray-600">{ticket.subject}</td>
                                <td className="p-4 text-gray-600">{ticket.date}</td>
                                <td className="p-4"><StatusBadge status={ticket.status} /></td>
                                <td className="p-4">
                                    <button className="text-primary hover:underline text-sm font-medium">{translations.viewTicket}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SupportPage;