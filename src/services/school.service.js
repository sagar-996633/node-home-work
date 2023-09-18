const { School } = require("../models");

/**
 * create Stationary
 * @param {object}reqBody
 * @returns {Promise<School>}
*/

const createSchool = async (reqBody) => {
    return School.create(reqBody);
};

const getSchoollist = async (req, res) => {
    return School.find({ $or: [{ School_name: "ashadeep-iit" }] });
}

const getSchoolById = async (SchoolId) => {
    return School.findById(SchoolId);
};

const updateDetails = async (SchoolId, updateBody) => {
    return School.findByIdAndUpdate(SchoolId, { $set: updateBody });
};

const deleteSchool = async (SchoolId) => {
    return School.findByIdAndDelete(SchoolId);
}

module.exports = {
    createSchool,
    getSchoollist,
    getSchoolById,
    updateDetails,
    deleteSchool
}