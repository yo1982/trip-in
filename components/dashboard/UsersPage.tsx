import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { users } from '../../constants/users';
import { User } from '../../types';

const RoleBadge: React.FC<{ role: User['role'] }> = ({ role }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full capitalize";
    const roleColors = {
        admin: 'bg-red-100 text-red-800',
        vendor: 'bg-blue-100 text-blue-800',
        client: 'bg-gray-100 text-gray-800',
    };
    return <span className={`${baseClasses} ${roleColors[role]}`}>{role}</span>;
}

const UsersPage: React.FC = () => {
    const { translations } = useLanguage();

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-dark">{translations.allUsers}</h1>
                <p className="text-gray-600 mt-1">{translations.manageUsers}</p>
            </div>
            
             <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full min-w-max text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.userName}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.yourEmail}</th>
                            <th className="p-4 font-semibold text-sm text-gray-600">{translations.userRole}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-800">{user.name}</td>
                                <td className="p-4 text-gray-600">{user.email}</td>
                                <td className="p-4"><RoleBadge role={user.role} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;