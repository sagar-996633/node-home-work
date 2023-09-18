const{ Pharmacy } = require("../models");

/**
 * create Pharmacy
 * @param {object}reqBody
 * @returns {Promise<Pharmacy>}
*/

const createPharmacy = async(reqBody) => {
    return Pharmacy.create(reqBody);
};

const getPharmacylist = async(req , res) => {
    return Pharmacy.find({$or: [{Madicine_name :"dolo" }]});
};

const getPharmacyById = async (PharmacyId) => {
    return Pharmacy.findById(PharmacyId);
};

const updateDetails = async (PharmacyId, updateBody) => {
    return Pharmacy.findByIdAndUpdate(PharmacyId, { $set: updateBody });
};

const deletePharmacy = async(PharmacyId) => {
    return Pharmacy.findByIdAndDelete(PharmacyId);
};

module.exports ={
    createPharmacy,
    getPharmacylist,
    getPharmacyById,
    updateDetails,
    deletePharmacy
}