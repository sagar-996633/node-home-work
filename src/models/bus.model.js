const { string } = require('joi');
const mongoose = require('mongoose');

const BusSchema = new mongoose.Schema(
    {
        Bus_Name:{
            type: String,
            trim: true,
        },
        Buyer_name:{
            type: String,
            trim: true,
        },
        Bus_number:{
            type: Number,
            trim: true,
        },
        Ticket_price:{
            type: Number,
            trim:true,
        },
        Sit_number:{
            type: String,
            trim:true,
        },
        Bus_time:{
            type: String,
            trim:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const Bus=mongoose.model("Bus",BusSchema)
module.exports = Bus