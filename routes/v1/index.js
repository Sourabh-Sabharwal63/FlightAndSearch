const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/cityController");


router.delete("/city/:cityId",CityController.destroy);
router.get("/city/:cityId",CityController.get);
router.post("/city", CityController.create);
router.patch("/city/:cityId",CityController.update);


module.exports = router;
