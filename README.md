# E-COMMERCE-BACKEND

This is a basic backend project for an e-commerce platform providing the necessary functionality to support online transactions. It's integrated with the Stripe Payment API for handling payments. The backend is built using Node.js and Express.js, with JWT used for authorzation/authentication. MongoDB is utilized as the database to store product information, userd data.

## Features
- **Stripe Payment Integration**: Payment processing using the Stripe Payment API.
- **Authorization with JWT**: Implement secure authentication and authorization using JSON Web Tokens(JWT), ensure that only authenticated users can access protected routes and resources.
- **MongoDB Database**: Utilize MongoDB as the database solution, providing a flexible and scalable storage solution for product catalogs, user profiles.
- **Express.js Middleware**: Leverage Express.js middleware for routing, request handling and middleware integration, ensuring efficient handling of HTTP requests.


## Tech Stack
- Node.js: A runtime environment for executing JavaScript code on the server-side.
- Express.js: A minimal and flexible web application framework for Node.js, used for building robust and scalable web applications and APIs.
- JWT (JSON Web Tokens): Used for secure user authentication and authorization.
- MongoDB: A NoSQL document-oriented database, providing flexbility and scalability for storing unstructured data.
- Stripe Payment API: A powerful and secure API for processing online payments, enabling seamless integration with the e-commerce platform.

## Setup and Usage
  1. Clone the repository:
     ```bash
     git clone https://github.com/rudraprasaaad/E-COMMERCE-BACKEND.git
     ```
  2. Install dependencies:
     ```bash
     cd E-COMMERCE-BACKEND
     npm install
     ```
  3. Configure environment variables for MongoDB connection string, Stripe API keys, and any other necessary configurations.
  4. Start the server:
     ```bash
     npm start
     ```
