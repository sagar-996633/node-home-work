const { Pharmacyservice } = require("../services");

/* Create Pharmacy*/

const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const Pharmacy = await Pharmacyservice.createPharmacy(reqBody);
        if (!Pharmacy) {
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

/* Get Pharmacy*/

const Pharmacylist = async (req, res) => {
    try {
        const getPharmacy = await Pharmacyservice.getPharmacylist();
        res.status(200).json({
            success: true,
            message: "Pharmacy list!!",
            data: {
                getPharmacy,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/** Get Pharmacy details by id */

const getPharmacyDetails = async (req, res) => {
    try {
        const getDetails = await Pharmacyservice.getPharmacyById(
            req.params.PharmacyId
        );
        if (!getDetails) {
            throw new Error("Pharmacy not found!");
        }

        res.status(200).json({
            success: true,
            message: "Pharmacy details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/* update Pharmacy */
const updatePharmacy = async (req, res) => {
    try {
        const PharmacyId = req.params.PharmacyId;

        const PharmacyExists = await Pharmacyservice.getPharmacylist(PharmacyId);
        if (!PharmacyExists) {
            throw new Error("Pharmacy not found!");
        }

        await Pharmacyservice.updateDetails(PharmacyId, req.body);

        res.status(200).json({
            success: true,
            message: "Pharmacy details update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

/* delete Pharmacy */

const deletePharmacy = async (req, res) => {
    try {
        const PharmacyId = req.params.PharmacyId;
        const PharmacyExists = await Pharmacyservice.deletePharmacy(PharmacyId);
        if (!PharmacyExists) {
            throw new Error("Pharmacy not found!");
        }
        await Pharmacyservice.deletePharmacy(PharmacyId);

        res.status(200).json({
            success: true,
            message: "Pharmacy delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createPharmacy,
    Pharmacylist,
    getPharmacyDetails,
    updatePharmacy,
    deletePharmacy
}