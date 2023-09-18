const { Busservice } = require("../services");

/* Create Bus*/

const createBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const Bus = await Busservice.createBus(reqBody);
        if (!Bus) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: reqBody,
            data: { reqBody },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* Get Bus*/
const Buslist = async (req, res) => {
    try {
        const getBus = await Busservice.getBuslist();
        res.status(200).json({
            success: true,
            message: "Bus list!!",
            data: {
                getBus,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/** Get Bus details by id */

const getBusDetails = async (req, res) => {
    try {
        const getDetails = await Busservice.getBusById(
            req.params.BusId
        );
        if (!getDetails) {
            throw new Error("Bus not found!");
        }

        res.status(200).json({
            success: true,
            message: "Bus details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
/* update Bus */
const updateBus = async (req, res) => {
    try {
        const BusId = req.params.BusId;

        const BusExists = await Busservice.getBuslist(BusId);
        if (!BusExists) {
            throw new Error("Bus not found!");
        }

        await Busservice.updateDetails(BusId, req.body);

        res.status(200).json({
            success: true,
            message: "Bus details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/* delete Bus */

const deleteBus = async (req, res) => {
    try {
        const BusId = req.params.BusId;
        const BusExists = await Busservice.deleteBus(BusId);
        if (!BusExists) {
            throw new Error("Bus not found!");
        }
        await Busservice.deleteBus(BusId);

        res.status(200).json({
            success: true,
            message: "Bus delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    createBus,
    Buslist,
    getBusDetails,
    updateBus,
    deleteBus
}