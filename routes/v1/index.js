const express = require("express");
const router = express.Router();
const CityController = require("../../controllers/cityController");

router.get("/city/getAll",CityController.getAll);
router.delete("/city/:cityId",CityController.destroy);
router.get("/city/:cityId",CityController.get);
router.post("/city", CityController.create);
router.patch("/city/:cityId",CityController.update);
router.get("/city/getStartWith/:name",CityController.getStartWith);
router.post("/city/createAll",CityController.createAll);
module.exports = router;
