const { string } = require('joi');
const mongoose = require('mongoose');

const JewellerySchema = new mongoose.Schema(
    {
        Jewellery_Name: {
            type: String,
            trim: true,
        },
        Jewellery_buyer_name: {
            type: String,
            trim: true,
        },
        Jewellery_caret: {
            type: Number,
            trim: true,
        },
        Jewellery_wight: {
            type: String,
            trim: true,
        },
        Jewellery_price: {
            type: Number,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Jewellery = mongoose.model("Jewellery", JewellerySchema)
module.exports = Jewellery