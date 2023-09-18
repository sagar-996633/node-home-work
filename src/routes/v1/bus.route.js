const express = require("express");
const { Buscontroller } = require("../../controllers");

const router = express.Router();

/** Create Bus */
router.post(
    "/create-Bus",
    Buscontroller.createBus
);
/** Get Bus */
router.get(
    "/list",
    Buscontroller.Buslist
);

/** Get Bus details by id */
router.get(
    "/get-details/:BusId",
    Buscontroller.getBusDetails
);

/** update Bus */
router.put(
    "/update-Bus/:BusId",
    Buscontroller.updateBus
);

/** Delete Bus */
router.delete(
    "/Delete/:BusId",
    Buscontroller.deleteBus
);

module.exports = router;