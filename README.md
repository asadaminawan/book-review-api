# Book Review API

A Node.js & Express.js server-side application for managing book reviews. Users can:

- Retrieve all books
- Search books by ISBN, author, or title
- Register and login
- Add, modify, or delete reviews (registered users only)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/asadaminawan/book-review-api.git
   Navigate to the project folder:

2. cd book-review-api


3. Install dependencies:
    npm install
4. Start the server:
    node index.js
The server will run at http://localhost:3000

🔹GET /books – Get all books
🔹GET /books/:isbn – Get book by ISBN
🔹GET /author/:authorName – Get books by author
🔹GET /title/:bookTitle – Get books by title
🔹POST /register – Register new user
🔹POST /login – Login user
🔹PUT /review/:isbn – Add/modify book review
🔹DELETE /review/:isbn – Delete book review