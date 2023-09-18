const { category } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<category>}
 */
const createCategory = async (reqBody) => {
  return category.create(reqBody);
};

const getCategoryList = async (req, res) => {
  return category.find()
};

const getCategoryById = async (categoryId) => {
  return category.findById(categoryId);
};

const deleteCategory = async (categoryId) => {
  return category.findByIdAndDelete(categoryId);
};

const updateDetails = async (categoryId, updateBody) => {
  return category.findByIdAndUpdate(categoryId, { $set: updateBody });
};

module.exports = {
  createCategory,
  getCategoryList,
  getCategoryById,
  deleteCategory,
  updateDetails
};