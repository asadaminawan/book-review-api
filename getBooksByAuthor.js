const axios = require('axios');

function getBooksByAuthor(authorName) {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/books')
            .then(response => {
                const books = response.data;
                const filtered = {};
                for (let isbn in books) {
                    if (books[isbn].author.toLowerCase() === authorName.toLowerCase()) {
                        filtered[isbn] = books[isbn];
                    }
                }

                if (Object.keys(filtered).length > 0) {
                    resolve(filtered);
                } else {
                    reject(`No books found for author "${authorName}"`);
                }
            })
            .catch(err => reject(err.message));
    });
}
getBooksByAuthor("Coursera")
    .then(books => {
        console.log("Books by author:");
        console.log(books);
    })
    .catch(err => {
        console.log("Error:", err);
    });
