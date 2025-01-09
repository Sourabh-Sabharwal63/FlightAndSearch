const {Airplane}=require("../models");
const curdRepository=require("./curd-Repository");

class AirplaneRepository extends curdRepository{
  constructor(model=Airplane){
    super(model);
  }
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