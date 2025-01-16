const { Op } = require("sequelize");
const { Flight } = require("../models");
const {sequelize}=require("../models");
const { QueryTypes } = require('sequelize');
class flightRepository {
  #createFilter(data) {
    const filter = {};
    if (data.departureAirportId)
      filter.departureAirportId = data.departureAirportId;
    if (data.arrivalAirportId) filter.arrivalAirportId = data.arrivalAirportId;
    if (data.maxPrice && data.minPrice) {
      Object.assign(filter, {
        [Op.and]: [
          { price: { [Op.gte]: data.minPrice } },
          { price: { [Op.lte]: data.maxPrice } },
        ],
      });
    } 
    else{
      if (data.maxPrice) {
        Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      }
      if (data.minPrice) {
        Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      }
    } 
    return filter;
  }
  async create(data) {
    try {
      const flight = await Flight.create({
        flightNumber: data.flightNumber,
        airplaneId: data.airplaneId,
        departureAirportId: data.departureAirportId,
        arrivalAirportId: data.arrivalAirportId,
        departureTime: data.departureTime,
        arrivalTime: data.arrivalTime,
        price: data.price,
        boardingGate: data.boardingGate,
        totalSeat: data.totalSeat,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return flight;
    } catch (err) {
      throw { err };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flight.findByPk(flightId);
      return flight;
    } catch (err) {
      throw { err };
    }
  }
  async getAllFlight() {
    try {
      const flightList = await Flight.findAll();
      return flightList;
    } catch (err) {
      throw { err };
    }
  }
  async getFilterData(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      console.log("flightObject =", filterObject)
      const flights = await Flight.findAll({
        where: filterObject,
        
      });
     // console.log("flights = ", flights);

    //  const flights=await sequelize.query(`select * from flights where departureAirportId=${filter.departureAirportId} && arrivalAirportId=${filter.arrivalAirportId} &&  price>=${filter.minPrice} && price<=${filter.minPrice}`, {
    //   type: QueryTypes.SELECT,});
      console.log("flights = ",flights);
      return flights;
    } catch (err) {
      throw { err };
    }
  }

  async updateFlight(flightId,data){
    try {
      const flight=await Flight.update(data,{where:{id:flightId}});
      return flight;
    } catch (error) {
      throw error;
    }

  }
}
module.exports = flightRepository;
