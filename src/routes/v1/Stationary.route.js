const express = require("express");
const { Stationarycontroller } = require("../../controllers");

const router = express.Router();

/** Create Stationary */
router.post(
    "/create-Stationary",
    Stationarycontroller.createStationary
);

/** Get Stationary */
router.get(
    "/list",
    Stationarycontroller.Stationarylist
);

/** Get Stationary details by id */
router.get(
    "/get-details/:StationaryId",
    Stationarycontroller.getStationaryDetails
);

/** update Stationary */
router.put(
    "/update-Stationary/:StationaryId",
    Stationarycontroller.updateStationary
);

/** Delete Stationary */
router.delete(
    "/Delete/:StationaryId",
    Stationarycontroller.deleteStationary
);

module.exports = router;