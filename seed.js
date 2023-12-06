const mongoose = require('mongoose');
const Book = require('./models/Book_model')
require('dotenv').config();
////////////For inital seeding
mongoose.connect(process.env.MONGO_URL)
const data= mongoose.connection;

data.once('open', async () => {
    try {

        await Book.deleteMany({});//It will delete the objects from the database if any
        // mock data to seed
        const books = [
            { title: 'Data structure', author: 'Rishav', bookno: 1 },
            { title: 'Algorithm', author: 'Rishav', bookno: 2 },
            
        ];

        await Book.insertMany(books);
        console.log('Database seeded successfully');
    } catch (err) {
        console.error('Error seeding database:', err.message);
    } finally {
        // Close the connection after seeding
        mongoose.connection.close();
    }
});