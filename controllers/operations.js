const Book = require('../models/Book_model')


RetrieveAllBooks = async(req,res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({message:'server error'})
    }
}
AddBooks = async(req,res)=>{
    console.log('adding')
    // console.log(req.body.title)
    //     const book = Book({title:"physics", author:"rishav",bookno:1})
    const book =  Book({
        title: req.body.title,
        author: req.body.author,
        bookno: req.body.bookno
        
    });
     console.log(book)
      try {
        if(!book.title || !book.author || ! book.bookno){
            return res.status(400).json({message:'All fields are needed'})
        }
        if(book.bookno<=0||!book.bookno ==='number'){
            return res.status(400).json({message:'book number must be a positive integer'})
        }
        await book.save()
        res.status(200).json({message:'book has been added'})
        
      } catch (error) {
        res.status(500).json({message:'server error'})
        
      }
}
UpdateBooks = async(req,res)=>{
    let id=req.params.id;
    const {title, author,bookno}=req.body
    try {
        const book = await Book.findById(id);
        if(!book){
            res.status(500).json({message:'Book is not valid'})
        }
        book.title=title
        book.author=author
        book.bookno=bookno

        const updatedBook = await book.save();
        res.json(updatedBook);
        
    } catch (error) {
        res.status(400).json({ message: 'server error' });
    }
}

module.exports = {RetrieveAllBooks, AddBooks,UpdateBooks};