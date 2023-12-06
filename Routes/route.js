const express = require('express');

const router = express.Router();

const {RetrieveAllBooks, AddBooks,UpdateBooks} = require('../controllers/operations')

router.get('/api/books',RetrieveAllBooks)
        .post('/api/books',AddBooks)
        .put('/api/books/:id', UpdateBooks)

module.exports=router;