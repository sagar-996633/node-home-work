const{ Jewellery } = require("../models");

/**
 * create Jewellery
 * @param {object}reqBody
 * @returns {Promise<Jewellery>}
*/

const createJewellery = async(reqBody) => {
    return Jewellery.create(reqBody);
};

const getJewellerylist = async(req , res) => {
    // return Jewellery.find({$or: [{Jewellery_Name :"ring" }]});
  return Jewellery.find({ $or: [{ is_active: false }] });

}

const getJewelleryById = async (JewelleryId) => {
    return Jewellery.findById(JewelleryId);
};

const updateDetails = async (JewelleryId, updateBody) => {
    return Jewellery.findByIdAndUpdate(JewelleryId, { $set: updateBody });
};

const deleteJewellery = async(JewelleryId) => {
    return Jewellery.findByIdAndDelete(JewelleryId);
}

module.exports ={
    createJewellery,
    getJewellerylist,
    getJewelleryById,
    updateDetails,
    deleteJewellery
}