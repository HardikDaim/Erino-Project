import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import { fetchContacts } from '../services/api';

const ContactManagement = () => {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const data = await fetchContacts();
        setContacts(data.contacts);
    };
    
    useEffect(() => {
        loadContacts();
    }, []);


    return (
        <div className='container mx-auto p-4'>
            <h1 className="text-2xl font-bold mb-4">Contact Management</h1>
            <ContactForm reloadContacts={loadContacts} />
            <ContactTable contacts={contacts} reloadContacts={loadContacts} />
        </div>
    );
};

export default ContactManagement;
