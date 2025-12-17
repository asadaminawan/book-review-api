const books = require("../bookdata");
const express = require('express');
const router = express.Router();

let users = [];

router.post("/register",(req,res)=>{
    const { username , password } = req.body;
    const userExists=users.find(user => user.username === username);
    if(userExists){
        return res.status(409).json({message:"User already exists"});

    }
    if(username && password){
        users.push({username,password}) ;
        return res.status(200).json({message:"User regsitered successfully"});

    }
    else{
        return res.status(400).json({message:"Username and password required"});
    }
});

router.post("/login",(req,res)=>{
    const { username , password }=req.body;
    const validUser = users.find(
        user => user.username === username && user.password === password
    );
    
    if(validUser){
        return res.status(200).json({message:"Login Successful"});
    }
    else{
        return res.status(401).json({message:"Invalid username or password, check and try again"});
    }
});

router.put("/review/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    const {username , review} = req.body;

    if(!username || !review){
        return res.status(400).json({message: "Username and review are required"});
    }
    const book = books[isbn];

    if(!book){
        return res.status(404).json({message:"Book not found"});
    }
    
    book.reviews[username] = review;

    return res.status(200).json({
        message:"Review added/updated successfully",
        reviews: book.reviews
    });
});

router.delete("/review/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    const { username } = req.body;

    if(!username){
        return res.status(400).json({message:"Username is required"});
    }
    const book = books[isbn];
    if(!book){
        return res.status(404).json({message:"Book not found"});
    }
    if(!book.reviews[username]){
        return res.status(404).json({message:"Review not found for book"});
    }
    delete book.reviews[username];
    
    return res.status(200).json({
        message:"Review deleted successfuly",
        reviews: book.reviews
    })
});




module.exports = router;