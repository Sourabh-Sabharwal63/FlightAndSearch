const express=require("express");
const router=express.Router();
const AirportController=require("../../controllers/airportController");

router.post("/airport",AirportController.create);
router.get("/airports",AirportController.getAllAirport)
router.get("/airportWithId/:airportId",AirportController.getAirport);
router.delete("/delete/:airportId",AirportController.destroyAirport);
router.patch("/updateAirport/:airportId",AirportController.updateAirport);
module.exports=router;