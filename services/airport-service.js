const airport = require("../models/airport");
const { AirportRepository } = require("../repository");

class AirportService {
  constructor(airportRepository = new AirportRepository()) {
    this.airportRepository = airportRepository;
  }
  async create(data) {
    try {
      console.log("data", data);
      const airport = await this.airportRepository.createAirport(data);
      return airport;
    } catch (err) {
      console.log("something went wrong on service layer in create");
      throw { err };
    }
  }
  async destroy(airportId) {
    try {
      const flag = this.airportRepository.destroy(airportId);
      return flag;
    } catch (err) {
      console.log("something wrong at service layer in destroy");
      throw { err };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await this.airportRepository.getAirport(airportId);
      return airport;
    } catch (err) {
      console.log("something wrong at service layer in getAirport");
      throw { err };
    }
  }
  async getAllAirport() {
    try {
      const airportsList = await this.airportRepository.getAllAirports();
      return airportsList;
    } catch (err) {
      console.log("something wrong at service layer in getAllAirport ");
      throw { err };
    }
  }
  async updateAirport(airportId, data) {
    try {
      const airport = await this.airportRepository.updateAirport(
        airportId,
        data
      );
      return airport;
    } catch (err) {
      console.log("something wrong at service layer in updateAirport");
      throw { err };
    }
  }
}

module.exports = new AirportService();
