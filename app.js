const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT||3000
const {db} = require('./db/db');

const router = require('./Routes/route')
const app = express();

//middlewares

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
app.use(cors())
///seeding
// mongoose.connect(process.env.MONGO_URL)
// const data= mongoose.connection;
// data.on('error', console.error.bind(console, 'MongoDB connection error:'));
// data.once('open', async () => {
//     try {
//         // with mock data
//         const books = [
//             { title: 'Data structure', author: 'Rishav', bookno: 1 },
//             { title: 'Algorithm', author: 'Rishav', bookno: 2 },
            
//         ];

//         await Book.insertMany(books);
//         console.log('Database seeded successfully');
//     } catch (err) {
//         console.error('Error seeding database:', err.message);
//     } finally {
//         // Close the connection after seeding
//         mongoose.connection.close();
//     }
// });














//routes
 app.use('/',router)
const server=() =>{
    db();
    app.listen(PORT,()=>{
        console.log('listening to port:',PORT)
    })

}

server()


