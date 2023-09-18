const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema(
    {
        Book_name: {
            type: String,
            trim: true,
        },
        Book_decs: {
            type: String,
            trim: true,
        },
        Book_price:{
            type:Number,
            default:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const Book=mongoose.model("Book",BookSchema)

module.exports=Book
