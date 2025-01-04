const { City } = require("../models/index");

class CityRepository {
  async createCity({ cityName, cityAge }) {
    try {
      const city = await City.create({ name: cityName, age: cityAge });
      console.log(`auto granted id is ${city.id}`);
      return city;
    } catch (err) {
      throw { err };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (err) {
      throw { err };
    }
  }

  async getCity(cityId) {
    try {
      console.log("getting city");
      const city = await City.findByPk(cityId);
      return city;
    } catch (err) {
      throw { err };
    }
  }
  async updateCity(cityId, data) {
    try {
      //this approach only return true not the updated value
      const city = await City.update(data, {
        where: {
          id: cityId,
        },
      });


       //this approach return updated value
      // const city = await City.findByPk(cityId);
      // city.name=data.name;
      // await city.save();
      
      return city;
    } catch (err) {
      throw { err };
    }
  }
}
module.exports = CityRepository;
