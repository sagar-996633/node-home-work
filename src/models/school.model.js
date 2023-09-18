const { string } = require('joi');
const mongoose = require('mongoose');

const SchoolSchema = new mongoose.Schema(
    {
        School_name: {
            type: String,
            trim: true,
        },
        Student_name: {
            type: String,
            trim: true,
        },
        Student_id: {
            type: String,
            trim: true,
        },
        Student_std: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const School = mongoose.model("School", SchoolSchema)
module.exports = School