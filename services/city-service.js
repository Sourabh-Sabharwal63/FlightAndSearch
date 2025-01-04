const {CityRepository}=require("../repository/index");

class CityService{
  constructor(cityRepository=new CityRepository()){
    console.log("cityService Constructor is called ");
    this.cityRepository=cityRepository;
  }
  
  async createCity(data){
  try{
     const city=await this.cityRepository.createCity(data);
     return city;
  }
  catch(err){
    console.log(`Something went wrong at service layer in createCity`);
     throw (err);
  }
  }

  async deleteCity(cityId){
    try{
      const city=await this.cityRepository.deleteCity(cityId);
      
   }
   catch(err){
     console.log(`Something went wrong at service layer in delete city`);
      throw (err);
   }
  }

  async getCity(cityId){
    try{
      const city=await this.cityRepository.getCity(cityId);
      return city;
   }
   catch(err){
     console.log(`Something went wrong at service layer in getCity`);
      throw (err);
   }
  }
  async updateCity(cityId,data){
    try{
      const city=await this.cityRepository.updateCity(cityId,data);
      return city;
    }
    catch(err){
    throw(err);
    }
  }

}

module.exports=new CityService();