const { City } = require("../models");
const {sequelize}=require("../models");
const { QueryTypes } = require('sequelize');
const {Op}=require("sequelize");
class CityRepository {
  async createCity({ cityName}) {
    try {
      const city = await City.create({ name: cityName});
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

  async getAll(){
    try{
      const cityList = await sequelize.query(
        'SELECT * FROM Cities', // Ensure table name matches database
        { type: QueryTypes.SELECT } // Use QueryTypes here
      );
    return cityList;
    }
    catch(err){
    throw (err);
    }
  }
  async getStartWith(name){
    
   try{
    console.log("name = ",name);
    //this approach using sequelize methods
   const NameList=City.findAll({
    where:{
      name:{
        [Op.like]:`${name}%`
      }
    }
   })
    // this approach using raw query
    // const NameList=await sequelize.query(
    //   `SELECT * FROM cities WHERE name LIKE '${name}%'`,
    //   { type: QueryTypes.SELECT } 
    // );
    console.log("NameList",NameList);
    return NameList;
   }
   catch(err){
    throw (err);
   }
  }
  async createAll(data){
    try{
      await City.bulkCreate(
        data.map((ele)=>({name:ele.name}))
       )
    }
    catch(err){
      throw{err}
    }
  }
}
module.exports = CityRepository;
