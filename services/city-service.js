const { CityRepository } = require("../repository/index");
const curdService=require("./curd-service");

class CityService extends curdService{
  constructor(cityRepository = new CityRepository()) {
    super(cityRepository);
    console.log("cityService Constructor is called ");
    this.cityRepository = cityRepository;
  }

  async createCity(data) {
    try {
      const city = await this.cityRepository.createCity(data);
      return city;
    } catch (err) {
      console.log(`Something went wrong at service layer in createCity`);
      throw err;
    }
  }
  async createAll(data){
    try{
      await this.cityRepository.createAll(data);
    }catch(err){
     console.log("something wrong at service layer in createAll ")
     throw {err}
    }
  }
  async deleteCity(cityId) {
    try {
      const city = await this.cityRepository.deleteCity(cityId);
    } catch (err) {
      console.log(`Something went wrong at service layer in delete city`);
      throw err;
    }
  }

  // async getCity(cityId) {
  //   try {
  //     const city = await this.cityRepository.getCity(cityId);
  //     return city;
  //   } catch (err) {
  //     console.log(`Something went wrong at service layer in getCity`);
  //     throw err;
  //   }
  // }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (err) {
      throw err;
    }
  }

  // async getAll() {
  //   try {
  //     const cityList = await this.cityRepository.getAll();
  //     return cityList;
  //   } catch (err) {
  //     console.log(`Something went wrong at service layer in getAll`);
  //     throw err;
  //   }
  // }

  async getStartWith(name) {
    try {
      const nameList = await this.cityRepository.getStartWith(name);
      return nameList;
    } catch (err) {
      console.log(`Something went wrong at service layer in getStartWith`);
      throw err;
    }
  }
}

module.exports = new CityService();
