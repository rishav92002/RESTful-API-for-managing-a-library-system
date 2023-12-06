const mongoose = require('mongoose');
const Book = require('../models/Book_model')
// const url = process.env.MONGO_URL


/////////////////// For further api testing
const db= async ()=>{
    try {
        // mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected')
    } catch (error) {
        console.log('db connection error')
    }


}

module.exports={db}