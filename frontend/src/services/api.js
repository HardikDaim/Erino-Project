import axios from 'axios';

// Define API base URL once
const API_URL = 'http://localhost:4000/api/contacts';

// Axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json', 
},
});

// Function to create a contact
export const createContact = async (formData) => {
    try {
        const { data } = await api.post('/', formData);
        return data;
    } catch (error) {
        console.error('Error creating contact:', error);
        throw new Error('Error creating contact');
    }
};

// Function to fetch contacts
export const fetchContacts = async () => {
    try {
        const { data } = await api.get('/');
        return data;
    } catch (error) {
        console.error('Error fetching contacts:', error);
        throw new Error('Error fetching contacts');
    }
};

// Function to update a contact
export const updateContact = async (id, updatedData) => {
    try {
        const { data } = await api.put(`/${id}`, updatedData);
        return data;
    } catch (error) {
        console.error(`Error updating contact with id ${id}:`, error);
        throw new Error(`Error updating contact with id ${id}`);
    }
};

// Function to delete a contact
export const deleteContact = async (id) => {
    try {
        const { data } = await api.delete(`/${id}`);
        return data;
    } catch (error) {
        console.error(`Error deleting contact with id ${id}:`, error);
        throw new Error(`Error deleting contact with id ${id}`);
    }
};
