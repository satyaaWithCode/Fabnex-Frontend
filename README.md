Fabnex – Modern MERN Ecommerce Platform

A full-stack ecommerce platform built using React.js + Node.js + Express + MongoDB, featuring OTP-based authentication, admin product management, cart & checkout flow, order history, and payment-ready structure.

This project replicates features found in modern ecommerce stores like Layerzz, Zara, Bewakoof, Urbanic and provides a production-friendly backend and frontend architecture.

🚀 Features
🔐 Authentication

Login using Email + OTP (no password required)

JWT stored in httpOnly secure cookies

Role-based access (User & Admin)

Protect API routes using middleware

🛒 User Features

View all products

Click any product → View product details

Select size and view full description

Add products to Cart

Checkout flow

Save shipping address

Payment-ready (Razorpay / Stripe can be added)

View Order History after login

👨‍💼 Admin Features

Add new products

Upload multiple images

Manage product details:

title

description

long description

price

compare price

sizes

stock

tags

Update / Delete products

View all user orders

📦 Order Management

Each order contains:

User details

Items (product, size, qty)

Shipping address

Total amount

Payment status

Timestamps

Users can see all their previous orders inside their profile.

🧪 API Endpoints
Auth Routes
Method	Endpoint	Description
POST	/api/auth/send-otp	Send OTP to email
POST	/api/auth/verify-otp	Verify OTP & Login
GET	/api/auth/me	Get logged-in user
POST	/api/auth/logout	Logout user
Product Routes
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:slug	Get product by slug
POST	/api/products	Add product (Admin)
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
Order Routes
Method	Endpoint	Description
POST	/api/orders	Create order
GET	/api/orders/me	Get user's orders
PUT	/api/orders/:id/pay	Mark order as paid
🛠 Tech Stack
Frontend

React.js (Vite)

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB & Mongoose

Nodemailer (OTP Email)

Multer (Image Upload)

JWT Authentication

Security

httpOnly Cookies

CORS

Helmet

Rate Limiting

📁 Project Structure
/backend
  ├── src
  │   ├── controllers
  │   ├── models
  │   ├── routes
  │   ├── middleware
  │   ├── utils
  │   ├── config
  │   └── server.js
  ├── uploads
  └── .env

/frontend
  ├── src
  ├── public
  └── vite.config.js