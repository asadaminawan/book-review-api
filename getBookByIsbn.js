const axios = require('axios');

function getBookByISBN(isbn) {
    return new Promise((resolve, reject) => {
        console.log("Fetching books from server..."); // Debug
        axios.get('http://localhost:3000/books')
            .then(response => {
                console.log("Response received"); // Debug
                const books = response.data;
                if (books[isbn]) {
                    resolve(books[isbn]);
                } else {
                    reject('Book with ISBN ' + isbn + ' not found');
                }
            })
            .catch(err => {
                reject(err.message);
            });
    });
}

getBookByISBN("01")
    .then(book => {
        console.log("Book found:");
        console.log(book);
    })
    .catch(err => {
        console.log("Error:", err);
    });
