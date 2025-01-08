const express=require("express");
const router=express.Router();
const FlightController=require("../../controllers/flightController");


router.post("/flight/create",FlightController.createFlight);
router.get("/flight/filter",FlightController.getFilterData);

module.exports=router;
