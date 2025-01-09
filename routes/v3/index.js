const express=require("express");
const router=express.Router();
const FlightController=require("../../controllers/flightController");
const {validateCreateFlight}=require("../../middlewares/flightMiddleware");

router.post("/flight/create",validateCreateFlight,FlightController.createFlight);
router.get("/flight/filter",FlightController.getFilterData);

module.exports=router;
