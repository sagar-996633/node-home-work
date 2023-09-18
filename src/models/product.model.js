const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        Product_name: {
            type: String,
            trim: true
        },
        Product_desc: {
            type: String,
            trim: true
        },
        Product_Price: {
            type: Number,
            trim: true
        },
        Product_category: {
            type: String,
            trim: true
        },
        Product_quality: {
            type: String,
            trim: true
        },
        Product_stock: {
            type: Number,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category"
        },
        Jewellery: {
            type: mongoose.Types.ObjectId,
            ref: "Jewellery"
        },
        Grocery: {
            type: mongoose.Types.ObjectId,
            ref: "Grocery"
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const product = mongoose.model("product", productSchema)

module.exports = product