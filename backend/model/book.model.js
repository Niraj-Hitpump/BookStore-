import mongoose from "mongoose";

// making of the schema that we need to send it to the database
const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title:String
})
// now  makign a model of the above schmas here Book is the name of  main folder and here s automatically get added by the mongodb..
const Book = mongoose.model("Book", bookSchema);

export default Book;