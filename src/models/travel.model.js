const { string } = require('joi');
const mongoose = require('mongoose');

const TravelSchema = new mongoose.Schema(
    {
        Travel_Type: {
            type: String,
            trim: true,
        },
        Travel_From: {
            type: String,
            trim: true,
        },
        Travel_To: {
            type: String,
            trim: true,
        },
        Travel_Date: {
            type: String,
            trim: true,
        },
        Travel_Return: {
            type: String,
            trim: true,
        },
        Bus: {
            type: mongoose.Types.ObjectId,
            ref: "Bus"
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Travel = mongoose.model("Travel", TravelSchema)
module.exports = Travel