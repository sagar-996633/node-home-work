const express = require("express");
const { Pharmacycontroller } = require("../../controllers");

const router = express.Router();

/** Create Pharmacy */
router.post(
    "/create-Pharmacy",
    Pharmacycontroller.createPharmacy
);

/** Get Pharmacy */
router.get(
    "/list",
    Pharmacycontroller.Pharmacylist
);

/** Get Pharmacy details by id */
router.get(
    "/get-details/:PharmacyId",
    Pharmacycontroller.getPharmacyDetails
);

/** update Pharmacy */
router.put(
    "/update-Pharmacy/:PharmacyId",
    Pharmacycontroller.updatePharmacy
);

/** Delete Pharmacy */
router.delete(
    "/Delete/:PharmacyId",
    Pharmacycontroller.deletePharmacy
);

module.exports = router;