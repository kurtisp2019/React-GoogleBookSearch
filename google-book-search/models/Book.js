/**
 * 
 *      Book.js
 * 
 */

var mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({

    title: {
        type: String
    },
    authors: {
        type: String
    },
    description: { 
        type: String
    }, 
    image: {
        type: String,
    },
    link: {
        type: String
    }

});

var Book = mongoose.model("Book", BookSchema);

export default Book;