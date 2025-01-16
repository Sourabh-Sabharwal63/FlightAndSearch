const express=require("express");
const router=express.Router();
const FlightController=require("../../controllers/flightController");
const {validateCreateFlight,validateGetFlight}=require("../../middlewares/flightMiddleware");

router.post("/flight/create",validateCreateFlight,FlightController.createFlight);
router.get("/flight/filter",FlightController.getFilterData);
router.get("/flight/getFlight/:flightId",validateGetFlight,FlightController.getFlight);
router.patch("/flight/updateFlight",FlightController.updateFlight);
module.exports=router;
