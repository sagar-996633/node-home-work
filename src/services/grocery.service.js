const{ Grocery } = require("../models");

/** 
 * create Grocery
 * @param {object}reqBody
 * @returns {Promise<Grocery>}
*/

const createGrocery = async(reqBody) => {
    return Grocery.create(reqBody);
};

const getGrocerylist = async(req , res) => {
    return Grocery.find();
}

const getGroceryById = async (GroceryId) => {
    return Grocery.findById(GroceryId);
};

const updateDetails = async (GroceryId, updateBody) => {
    return Grocery.findByIdAndUpdate(GroceryId, { $set: updateBody });
};

const deleteGrocery = async(GroceryId) => {
    return Grocery.findByIdAndDelete(GroceryId);
}

module.exports ={
    createGrocery,
    getGrocerylist,
    getGroceryById,
    updateDetails,
    deleteGrocery
}