const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema(
    {
        Company_Name: {
            type: String,
            trim: true,
        },
        Madicine_name: {
            type: String,
            trim: true,
        },
        Madicine_Price: {
            type: Number,
            trim: true,
        },
        Madicine_Power: {
            type: Number,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema)
module.exports = Pharmacy