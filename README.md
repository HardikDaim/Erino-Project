# Contact Management - Mini Feature of a CRM

This project is a contact management feature for a CRM system, allowing users to add, view, update, and delete contact information for customers or clients. The app helps businesses manage relationships by providing an organized space for tracking important contact details.

## Features:
- **Add a New Contact**: Capture essential contact details such as first name, last name, email, phone number, company, and job title.
- **View Contacts**: Display contacts in a table with sorting and pagination.
- **Edit Contact Information**: Update contact details such as phone number, company, or job title.
- **Delete a Contact**: Remove outdated or duplicate contacts to keep the contact list clean and relevant.

## Tech Stack:
- **Frontend**: React, Material UI (MUI), Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB (using Mongoose ORM)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/HardikDaim/Erino-Project
cd Erino-Project
```

### 2. Backend Setup (Express & MongoDB)
Navigate to the backend/ directory:
```bash
cd backend
```
Create a .env file in the backend/ folder to store your environment variables. Add the following content to the .env file (make sure to replace the values with your actual database connection information):
```bash
MONGO_URI=your_mongodb_connection_string
PORT=4000
```
Note: The .env file should not be committed to the repository for security reasons.

Install backend dependencies:
```bash
npm install
```
Start the backend server:
```bash
nodemon server.js
```

The backend API should now be running on http://localhost:4000.


### 3. Frontend Setup (React & Material UI)
Navigate to the frontend/ directory:
```bash
cd frontend
```
Install frontend dependencies:
```bash
npm install
```
Start the frontend development server:
```bash
npm start
```
The frontend application should now be running on http://localhost:3000.


### 4. Database Setup (MongoDB)

This project uses MongoDB as the database to store contact information. You can either set up a local MongoDB instance or use MongoDB Atlas for a cloud database.
If you are using MongoDB Atlas, create a free-tier cluster and get the connection string to replace in the .env file.

API Endpoints

The backend exposes the following RESTful API endpoints:
POST /contacts: Adds a new contact to the database.
GET /contacts: Retrieves all contacts stored in the database.
PUT /contacts/
: Updates the contact with the specified ID.
DELETE /contacts/
: Deletes the contact with the specified ID.


Frontend Details

Contact Form: The form allows users to add new contacts with the following fields:
First Name
Last Name
Email
Phone Number
Company
Job Title
Contacts Table: Displays a table of all contacts with columns for each contact attribute:
First Name
Last Name
Email
Phone Number
Company
Job Title
Action Buttons (Edit & Delete)
The table also includes pagination and sorting options for easier navigation of large contact lists.

Technical Decisions

Database Choice
MongoDB was chosen due to its document-based structure, which fits well with the dynamic nature of contact information. It also provides flexibility for handling unstructured data and scaling as the application grows.
Frontend Choice
React was selected for its component-based architecture, which makes it easy to build and maintain dynamic user interfaces. Material UI (MUI) was used for consistent and responsive design components, ensuring a smooth and professional UI.

Challenges and Solutions

1. Form Validation
The challenge was ensuring that all form fields were properly validated before submission. To solve this, we used MUI’s built-in form validation along with custom validation functions for fields like email and phone number to ensure they met the required formats.
2. Handling Pagination and Sorting in the Contacts Table
Implementing efficient pagination and sorting for the contacts table was a challenge, especially with large datasets. We utilized MUI’s TablePagination and TableSortLabel components to provide smooth sorting and pagination functionality.
3. Error Handling
One challenge was properly handling errors in API requests, such as validation errors or server issues. We used Mongoose validation for the MongoDB schema and implemented appropriate error handling in both the backend and frontend to provide meaningful feedback to the user.
Code Quality

Modular Structure: The code is structured into reusable modules, with separate directories for controllers, models, and routes in the backend.
Component-based Frontend: The frontend is organized into reusable React components, promoting code reusability and maintainability.
Clear Code: The code is clean, well-commented, and adheres to best practices for both frontend and backend development.
License

This project is open-source and available under the MIT License.
Final Thoughts

If you encounter any issues while running the project or need further clarification, feel free to open an issue on the GitHub repository, and I will be happy to assist.



