const { Airport } = require("../models");
const curdRepository=require("./curd-Repository");
class AirportRepository extends curdRepository{
  constructor(model=Airport){
    super(model);
  }
  async createAirport({ name, address, cityId }) {
    try {
      console.log("inside repository ", name, address, cityId);
      const airport = await Airport.create({
        name: name,
        address: address,
        cityId: cityId,
      });
      return airport;
    } catch (err) {
      console.log("err => ", err.message);
      throw { err };
    }
  }
  // async getAllAirports() {
  //   try {
  //     const airports = await Airport.findAll();
  //     return airports;
  //   } catch (err) {
  //     console.log("err => ", err.message);
  //     throw { err };
  //   }
  // }
  async destroy(airportId) {
    try {
      const flag = await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return flag;
    } catch (err) {
      console.log("err => ", err.message);
      throw { err };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk( airportId);
      return airport;
    } catch (err) {
      throw { err };
    }
  }

  async updateAirport(airportId, data) {
    try {
      console.log("airportId = ",airportId)
      const airport = await Airport.update(data, {
        where: {
          id: airportId
        },
      });
      return airport;
    } catch (err) {
      throw { err };
    }
  }
}
module.exports = AirportRepository;
