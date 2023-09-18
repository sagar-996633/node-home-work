const{ Stationary } = require("../models");

/**
 * create Stationary
 * @param {object}reqBody
 * @returns {Promise<Stationary>}
*/

const createStationary = async(reqBody) => {
    return Stationary.create(reqBody);
};

const getStationarylist = async(req , res) => {
    return Stationary.find({$or: [{_id :"64e9d6048be8ecfe86882f8a" }]});
}

const getStationaryById = async (StationaryId) => {
    return Stationary.findById(StationaryId);
};

const updateDetails = async (StationaryId, updateBody) => {
    return Stationary.findByIdAndUpdate(StationaryId, { $set: updateBody });
};

const deleteStationary = async(StationaryId) => {
    return Stationary.findByIdAndDelete(StationaryId);
}

module.exports ={
    createStationary,
    getStationarylist,
    getStationaryById,
    updateDetails,
    deleteStationary
}