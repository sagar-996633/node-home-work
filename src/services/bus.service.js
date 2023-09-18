const { Bus } = require("../models");

/**
 * create Bus
 * @param {object}reqBody
 * @returns {Promise<Bus>}
*/

const createBus = async (reqBody) => {
    return Bus.create(reqBody);
};

const getBuslist = async (req, res) => {
    return Bus.find({ $or: [{ Ticket_price: "1200" }] });
}

const getBusById = async (BusId) => {
    return Bus.findById(BusId);
};

const updateDetails = async (BusId, updateBody) => {
    return Bus.findByIdAndUpdate(BusId, { $set: updateBody });
};

const deleteBus = async (BusId) => {
    return Bus.findByIdAndDelete(BusId);
}

module.exports = {
    createBus,
    getBuslist,
    getBusById,
    updateDetails,
    deleteBus
}
