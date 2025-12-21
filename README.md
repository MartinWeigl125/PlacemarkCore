# PlacemarkCore
This is the first part of the assignment in the module Advanced Full Stack Development. It is about implementing a Point Of Interest application with the framework HAPI.

## Attention
Release v3.0.0 only provides API support. Not all features of the MVC App are updated for this release. If you want to use the MVC App, use v2.0.0.

## Features
- Create and manage Points of Interests
- Group Points of Interests into categories
- Images saved in Cloudinary for categories and Points of Interests
- User authentication and authorization
- static admin user (admin@placemark.com) can list and delete users
- Data persistence using Mongo DB
- Automatic seeding of the database
- RESTful API endpoints with JWT Authentication
- Cookies
- Built with HAPI framework
- Model and API tests

## Installation
```bash
npm install
```

## Configuration
Create a `.env` file in the root directory with:
```
cookie_name=COOKIE_NAME_HERE
cookie_password=COOKIE_EMCRYPTION_KEY_HERE_MUST_BE_32_CHARS
db=CONNECTION_STRING_HERE
cloudinary_name=CLOUDINARY_NAME_HERE
cloudinary_key=CLOUDINARY_KEY_HERE
cloudinary_secret=CLOUDINARY_SECRET_HERE
frontend_url=FRONTEND_URL_HERE
```

## Usage
To start the server:
```bash
npm start
```
This makes the app run on http://localhost:3000.

## API Documentation
API endpoints are available at `/documentation`

## Testing
Run tests with:
```bash
npm test
```
Notice: Running all tests parallel can lead to errors. Running each test separately works.

## Technologies
- Node.js
- HAPI Framework
- OpenAPI (Swagger)
- JWT Authentication
- Handlebars
- Prettier
- ESLint
- Joi
- MongoDB
- Cloudinary