## NestJS CRUD API

This project is a simple REST API built using NestJS, Mongoose, and MongoDB. The API allows for basic CRUD (Create, Read, Update, Delete) operations on items stored in a MongoDB collection.

### Features
- **Create Item**: Add a new item to the database.
- **Read Item**: Retrieve all items or a single item by ID.
- **Update Item**: Update an item by ID.
- **Delete Item**: Remove an item by ID.

### Requirements
Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local or remote)

### Installations
1. Clone the repository
  ```bash
  git clone https://github.com/your-repo/nestjs-crud-api.git
  cd nestjs-crud-api

2. Install dependencies
  ```bash
  npm install

3. Set up your MongoDB connection:
In app.module.ts, ensure that the MongoDB connection string is correct:
  ```javascript
  MongooseModule.forRoot('mongodb://localhost:27017/nestjs-tutorial');
  ```
Change the URI to your MongoDB instance if necessary.

4. Start the development server:
  ```bash
  npm run start:dev

The API will be running at http://localhost:3000.

### API Endpoints
Refer to the Postman documentation for detailed information on each endpoint [here](https://documenter.getpostman.com/view/28440801/2sAXxS7BJF)

### Error Handling 
- **404 Not Found:** Returned when an item is not found with the given ID.
- **400 Bad Request:** Returned when the ID format is invalid.
