const express = require("express");
const { Schoolcontroller } = require("../../controllers");

const router = express.Router();

/** Create School */
router.post(
    "/create-School",
    Schoolcontroller.createSchool
);

/** Get School */
router.get(
    "/list",
    Schoolcontroller.Schoollist
);

/** Get School details by id */
router.get(
    "/get-details/:SchoolId",
    Schoolcontroller.getSchoolDetails
);

/** update School */
router.put(
    "/update-School/:SchoolId",
    Schoolcontroller.updateSchool
);

/** Delete School */
router.delete(
    "/Delete/:SchoolId",
    Schoolcontroller.deleteSchool
);

module.exports = router;