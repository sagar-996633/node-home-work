const { string } = require('joi');
const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema(
    {
        Hotel_Name: {
            type: String,
            trim: true,
        },
        Customer_name: {
            type: String,
            trim: true,
        },
        Room_number: {
            type: Number,
            trim: true,
        },
        Hotel_address: {
            type: String,
            trim: true,
        },
        customer_checkin: {
            type: String,
            trim: true,
        },
        customer_checkout: {
            type: String,
            trim: true,
        },
        Travel: {
            type: mongoose.Types.ObjectId,
            ref: "Travel"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Hotel = mongoose.model("Hotel", HotelSchema)
module.exports = Hotel