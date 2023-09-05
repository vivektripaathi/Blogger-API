# Blogger API
The Blogger API is a RESTful web service that allows users to register, login, create, read, update, and delete blogs. It is designed to be used for building a blogging platform or integrating blog functionality into an existing application. Additionally, the API should support user authentication and authorization.

## Table of Contents
1. Key Features
2. Authentication
3. Routes
    - User Registration
    - User Login
    - Read All Blogs
    - Read Blog by ID
    - Create a New Blog
    - Update Blog by ID
    - Delete Blog by ID
4. Installation Instructions

## Key Features
- Implemented RESTful API endpoints for user registration, login, creating, reading, updating, and deleting blogs.
- Leveraged best practices for API design, including proper HTTP methods and status codes.
- Utilized JSON data format for seamless communication between the client and server.
- Integrated essential security measures such as input validation and authentication tokens.

## Authentication
To access the Blogger API, users must be authenticated and authorized using JSON Web Tokens (JWT). Every time a user registers or logs in, they will receive a JWT token. This token should be included in the Authorization header of each request as follows:
```
Authorization: Bearer {your_jwt_token}
```
Make sure to replace {your_jwt_token} with the actual JWT token obtained during registration or login.

## Routes
#### User Registration
- **Endpoint**: `POST /users/register`
- **Description**: Register a new user.
- **Request Body:**
    - username (string): User's username.
    - password (string): User's password.
- **Response:**
    - 201 Created: User registration successful.
    - 400 Bad Request: Invalid input or user already exists.

#### User Login
- **Endpoint:** `POST /users/login`
- **Description:** Authenticate a user and receive a JWT token.
- **Request Body:**
    - username (string): User's username.
    - password (string): User's password.
- **Response:**
    - 200 OK: Login successful, JWT token provided.
    - 401 Unauthorized: Invalid credentials.

#### Read All Blogs
- **Endpoint:** `GET /blogs`
- **Description:** Get a list of all blogs.
- **Response:**
    - 200 OK: List of blogs in JSON format.
    - 401 Unauthorized: Authentication required.

#### Read Blog by ID
- **Endpoint:** GET /blogs/:id
- **Description:** Get a specific blog by its ID.
- **Response:**
    - 200 OK: Blog details in JSON format.
    - 404 Not Found: Blog not found.
    - 401 Unauthorized: Authentication required.

#### Create a New Blog
- **Endpoint:** `POST /blogs`
- **Description:** Create a new blog.
- **Request Body:**
    - title (string): Blog title.
    - content (string): Blog content.
- **Response:**
    - 201 Created: Blog creation successful, blog details in JSON format.
    - 400 Bad Request: Invalid input.

#### Update Blog by ID
- **Endpoint:** `PUT /blogs/:id`
- **Description:** Update an existing blog by its ID.
- **Request Body :**
    - title (string): Updated blog title.
    - content (string): Updated blog content.
- **Response:**
    - 200 OK: Blog updated successfully, updated blog details in JSON format.
    - 404 Not Found: Blog not found.
    - 401 Unauthorized: Authentication required.

#### Delete Blog by ID
- **Endpoint:** `DELETE /blogs/:id`
- **Description:** Delete a blog by its ID.
- **Response:**
    - 204 No Content: Blog deleted successfully.
    - 404 Not Found: Blog not found.
    - 401 Unauthorized: Authentication required.

## Installation Instructions
1. Clone the repository to your local machine:
```bash
git clone https://github.com/vivek-tripathi-9005/Blogger-API
cd Blogger-API
```
2. Install project dependencies:
```bash
    npm install
```
3. Create a .env file in the project's root directory and add add below environment variables to it: 
```env
CONNECTION_STRING : mongodb://localhost:27017/blogDB
SECRET : {your_secret}
API_URL = /api/v1
```
4. Start the node.js server
```bash
npm start
```