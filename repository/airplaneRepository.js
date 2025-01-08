const {Airplane}=require("../models");

class AirplaneRepository{
 async getAirplaneById(airplaneId){
  try{
    const airplane=await Airplane.findByPk(airplaneId);
  return airplane;
  }
  catch(err){
    throw {err};
  }
 }
}

module.exports=AirplaneRepository;