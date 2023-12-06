# RESTful-API-for-managing-a-library-system
This project is a simple RESTful API for managing a library system. It interacts with a MongoDB Atlas database to perform CRUD operations on books.
## Getting Started
### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rishav92002/RESTful-API-for-managing-a-library-system/tree/master
2. install dependencies
   ```bash
   npm install
### Setting Up MongoDB Atlas
  1. Create a MongoDB Atlas account and set up a cluster.
  2. Obtain your MongoDB Atlas connection string.
### Configuration
  1. Create a .env file in the root directory.
  2. Add your MongoDB Atlas connection string to the .env file.
### Seeding the Database
   To seed the database with mock data:
  ```bash
    node seed.js
   ```
## Usage
1. Start the server
   ```bash
   npm start
   ```
2.Access the API at: `http://localhost:8000/api/books`
### API Documentation

#### Retrieve All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieves a list of all books in the library.
- **Request:**
  - Method: `GET`
  - URL: `/api/books`
- **Response:**  
  - Body: Array of book objects containing:
    - `title`: Title of the book (String)
    - `author`: Author of the book (String)
    - `bookno`: book number (Number)
    

#### Add a New Book

- **Endpoint:** `POST /api/books`
- **Description:** Adds a new book to the library.
- **Request:**
  - Method: `POST`
  - URL: `/api/books`
  - Body:
    ```json
    {
      "title": "New Book Title",
      "author": "Author Name",
      "bookno": 1
     
    }
    ```
  - **Response:**
    - Status Code: `200 book has been created`
    - Body: Newly created book object

#### Update Book Details

- **Endpoint:** `PUT /api/books/{id}`
- **Description:** Updates the details of a specific book in the library.
- **Request:**
  - Method: `PUT`
  - URL: `/api/books/{id}` (Replace `{id}` with the book's ID)
  - Body: JSON object with updated book details (similar to the POST request body)
- **Response:**  
  - Body: Updated book object
  - Status Code: `500 server error` if the book ID does not exist

#### Error Handling

For invalid requests or database issues, appropriate error status codes will be returned along with error messages in the response body.
- `400 Bad Request`: Invalid request format or data
- `500 Internal Server Error`: Database or server-side issues
