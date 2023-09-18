const express = require("express");
// const tokenRoutes = require("./Token.route");
const userRoute = require("./user.route");
const categoryRoute = require("./category.route");
const productRoute = require("./product.route");
const BookRoute = require("./book.route");
const GroceryRoute = require("./Grocery.route");
const MusicRoute = require("./Music.route");
const MovieRoute = require("./Movie.route");
const JewelleryRoute = require("./Jewellery.route");
const HotelRoute = require("./Hotel.route");
const StationaryRoute = require("./Stationary.route");
const BusRoute = require("./Bus.route");
const PharmacyRoute = require("./Pharmacy.route");
const TravelRoute = require("./Travel.route");
const SchoolRoute = require("./School.route");
const ecommerceRoute=require("./e-commerce.route");

const router = express.Router();

// router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/Book", BookRoute);
router.use("/Grocery",GroceryRoute);
router.use("/Music",MusicRoute);
router.use("/Movie",MovieRoute);
router.use("/Jewellery",JewelleryRoute);
router.use("/Hotel",HotelRoute);
router.use("/Stationary",StationaryRoute);
router.use("/Bus",BusRoute);
router.use("/Pharmacy",PharmacyRoute);
router.use("/Travel",TravelRoute);
router.use("/School",SchoolRoute);
router.use("/e-commerce",ecommerceRoute);

module.exports = router;