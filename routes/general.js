const express = require("express");
const router = express.Router();
const books = require("../bookdata");

router.get("/books",(req,resp)=>{
    resp.status(200).json(books);
});

router.get("/books/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    const book = books[isbn];

    if(book){
        return res.status(200).json(book);
    }
    else
    {
        return res.status(404).json({
            message: "Book not found"
        });
    }
});

router.get("/author/:authorName",(req,resp)=>{
    const authorName = req.params.authorName.toLowerCase();
    const filterBooks = {};
    for (let isbn in books){
        if(books[isbn].author.toLowerCase() === authorName){
            filterBooks[isbn] = books[isbn];
        }
    }

    if(Object.keys(filterBooks).length > 0){
        return resp.status(200).json(filterBooks);
    }
    else{
        return resp.status(404).json({message: "No book found against the provided author"});
    }
});

router.get("/title/:bookTitle",(req,res)=>{
    const bookTitle = req.params.bookTitle.toLowerCase();
    const filterBooks = {};
    for(let isbn in books){
        if(books[isbn].title.toLowerCase() === bookTitle){
            filterBooks[isbn] = books[isbn];
        }
    }
    if(Object.keys(filterBooks).length > 0){
        return res.status(200).json(filterBooks);
    }
    else{
        return res.status(404).json({message:"Book not found"});
    }

});

router.get("/reviews/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    const book = books[isbn];
    if(book){
        return res.status(200).json(book.reviews);
    }
    else{
        return res.status(404).json({message:"Book not found"});
    }
});

module.exports = router;