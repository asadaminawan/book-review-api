const axios = require('axios');

function getBooksByTitle(bookTitle) {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/books')
            .then(response => {
                const books = response.data;
                const filtered = {};

                for (let isbn in books) {
                    const book = books[isbn];
                    if (book && book.title && book.title.toLowerCase() === bookTitle.toLowerCase()) {
                        filtered[isbn] = book;
                    }
                }

                if (Object.keys(filtered).length > 0) {
                    resolve(filtered);
                } else {
                    reject(`No books found with title "${bookTitle}"`);
                }
            })
            .catch(err => reject(err.message));
    });
}

getBooksByTitle("Express.js Guide")
    .then(books => {
        console.log("Books with title:");
        console.log(books);
    })
    .catch(err => {
        console.log("Error:", err);
    });
