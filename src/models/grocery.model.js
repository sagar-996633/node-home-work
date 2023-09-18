const mongoose = require('mongoose')

const GrocerySchema = new mongoose.Schema(
    {
        Store_Name: {
            type: String,
            trim: true,
        },
        Buyer_Name: {
            type: String,
            trim: true,
        },
        Phone_Number: {
            type: Number,
            trim: true,
        },
        Totle_Product: {
            type: Number,
            trim: true,
        },
        Totle_Price: {
            type: Number,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Grocery = mongoose.model("Grocery", GrocerySchema)
module.exports = Grocery