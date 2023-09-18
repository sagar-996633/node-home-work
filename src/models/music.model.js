const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema(
    {
        Music_Name: {
            type: String,
            trim: true,
        },
        Music_type: {
            type: String,
            trim: true,
        },
        Singer_Name: {
            type: String,
            trim: true,
        },
        Director_Name: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Music = mongoose.model("Music", MusicSchema)
module.exports = Music