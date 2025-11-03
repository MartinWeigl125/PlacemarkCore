# PlacemarkCore
This is the first part of the assignment in the module Advanced Full Stack Development. It is about implementing a Point Of Interest application with the framework HAPI.
## Features
- Create and manage Points of Interests
- User authentication and authorization
- Data persistence using JSON store
- RESTful API endpoints
- Built with HAPI framework

## Installation
```bash
npm install
```

## Configuration
Create a `.env` file in the root directory with:
```
cookie_name=COOKIE_NAME_HERE
cookie_password=COOKIE_EMCRYPTION_KEY_HERE_MUST_BE_32_CHARS
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

## Technologies
- Node.js
- HAPI Framework
- OpenAPI (Swagger)
- JWT Authentication
- Handlebars
- Prettier
- ESLint
- Joi