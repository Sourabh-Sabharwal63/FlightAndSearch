const { cityService } = require("../services/index");

//POST
const create = async (req, res) => {
  try {
    console.log("creating city");
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Notable to create a city",
      err: err,
    });
  }
};

//Delete -> city/:cityId
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.cityId);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted the city",
      err: {},
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Notable to delete the city",
      err: err,
    });
  }
};

//GET -> /city/:cityId
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.cityId);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetch a city",
      err: {},
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get the city",
      err: err,
    });
  }
};

//Patch -> /update/:cityId
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.cityId, req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully updated city",
      err: {},
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update city",
      err: err,
    });
  }
};
module.exports={create,destroy,update,get};