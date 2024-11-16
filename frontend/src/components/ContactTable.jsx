import React, { useState } from 'react';
import { deleteContact } from '../services/api';
import EditModal from './EditModal';

const ContactTable = ({ contacts, reloadContacts }) => {
    const [selectedContact, setSelectedContact] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5); 
    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc'); 

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
        if (!confirmDelete) return;

        setLoading(true);
        setError(null);

        try {
            await deleteContact(id);
            reloadContacts();
        } catch (err) {
            setError('Failed to delete the contact. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (contact) => {
        setSelectedContact(contact);
        setIsEditModalOpen(true);
    };

    // Handle sorting
    const handleSort = (field) => {
        const direction = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortField(field);
        setSortDirection(direction);
    };

    const getSortedContacts = () => {
        if (!sortField) return contacts;

        return [...contacts].sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];
            if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    };

    // Pagination logic
    const totalPages = Math.ceil(contacts.length / itemsPerPage);
    const paginatedContacts = getSortedContacts().slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    if (contacts.length === 0) {
        return <div className="text-center py-4">No contacts yet</div>;
    }

    return (
        <div>
            <EditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                contact={selectedContact}
                reloadContacts={reloadContacts}
            />
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            {['firstName', 'lastName', 'email', 'phone', 'company', 'jobTitle'].map((field) => (
                                <th
                                    key={field}
                                    className="border border-gray-300 px-4 py-2 cursor-pointer"
                                    onClick={() => handleSort(field)}
                                >
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                    {sortField === field && (
                                        <span className="ml-2">
                                            {sortDirection === 'asc' ? '↑' : '↓'}
                                        </span>
                                    )}
                                </th>
                            ))}
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedContacts.map((contact) => (
                            <tr key={contact._id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 text-center px-4 py-2">{contact.firstName}</td>
                                <td className="border border-gray-300 text-center px-4 py-2">{contact.lastName}</td>
                                <td className="border border-gray-300 text-center px-4 py-2">{contact.email}</td>
                                <td className="border border-gray-300 text-center px-4 py-2">{contact.phone}</td>
                                <td className="border border-gray-300 text-center px-4 py-2">{contact.company}</td>
                                <td className="border border-gray-300 text-center px-4 py-2">{contact.jobTitle}</td>
                                <td className="border border-gray-300 text-center px-4 py-2 space-x-2">
                                    <button
                                        onClick={() => handleEdit(contact)}
                                        className="text-blue-500 text-center hover:text-blue-700"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(contact._id)}
                                        className="text-red-500 text-center hover:text-red-700"
                                        disabled={loading}
                                    >
                                        {loading ? 'Deleting...' : 'Delete'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {error && <div className="text-red-500 mt-4">{error}</div>}
            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                >
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded ${
                        currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'
                    }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ContactTable;
