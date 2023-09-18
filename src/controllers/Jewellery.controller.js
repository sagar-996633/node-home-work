const { Jewelleryservice } = require("../services");

/* Create Jewellery*/

const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const Jewellery = await Jewelleryservice.createJewellery(reqBody);
        if (!Jewellery) {
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

/* Get Jewellery*/

const Jewellerylist = async (req, res) => {
    try {
        const getJewellery = await Jewelleryservice.getJewellerylist();
        res.status(200).json({
            success: true,
            message: "Jewellery list!!",
            data: {
                getJewellery,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/** Get Jewellery details by id */

const getJewelleryDetails = async (req, res) => {
    try {
        const getDetails = await Jewelleryservice.getJewelleryById(
            req.params.JewelleryId
        );
        if (!getDetails) {
            throw new Error("Jewellery not found!");
        }

        res.status(200).json({
            success: true,
            message: "Jewellery details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* update Jewellery */
const updateJewellery = async (req, res) => {
    try {
        const JewelleryId = req.params.JewelleryId;

        const JewelleryExists = await Jewelleryservice.getJewellerylist(JewelleryId);
        if (!JewelleryExists) {
            throw new Error("Jewellery not found!");
        }

        await Jewelleryservice.updateDetails(JewelleryId, req.body);

        res.status(200).json({
            success: true,
            message: "Jewellery details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/* delete Jewellery */

const deleteJewellery = async (req, res) => {
    try {
        const JewelleryId = req.params.JewelleryId;
        const JewelleryExists = await Jewelleryservice.deleteJewellery(JewelleryId);
        if (!JewelleryExists) {
            throw new Error("Jewellery not found!");
        }
        await Jewelleryservice.deleteJewellery(JewelleryId);

        res.status(200).json({
            success: true,
            message: "Jewellery delete successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

module.exports = {
    createJewellery,
    Jewellerylist,
    getJewelleryDetails,
    updateJewellery,
    deleteJewellery
}