const{ Music } = require("../models");

/** 
 * create Music
 * @param {object}reqBody
 * @returns {Promise<Music>}
*/

const createMusic = async(reqBody) => {
    return Music.create(reqBody);
};

const getMusiclist = async(req , res) => {
    return Music.find({$or: [{Singer_Name :"jestin_baiber" }]});
};

const getMusicById = async (MusicId) => {
    return Music.findById(MusicId);
};

const updateDetails = async (MusicId, updateBody) => {
    return Music.findByIdAndUpdate(MusicId, { $set: updateBody });
};

const deleteMusic = async(MusicId) => {
    return Music.findByIdAndDelete(MusicId);
};

module.exports ={
    createMusic,
    getMusiclist,
    getMusicById,
    updateDetails,
    deleteMusic
}