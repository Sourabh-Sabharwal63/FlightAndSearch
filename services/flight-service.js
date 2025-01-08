const {FlightRepository,AirplaneRepository}=require("../repository");

class FlightService{
  constructor(flightRepository=new FlightRepository(),airplaneRepository=new AirplaneRepository()){
    this.flightRepository=flightRepository;
    this.airplaneRepository=airplaneRepository;
  }

   async createFlight(data){
    try{
      const airplane=await this.airplaneRepository.getAirplaneById(data.airplaneId);
      //console.log("airplane = ",airplane);
      const flight=await this.flightRepository.create({...data,totalSeat:airplane.capacity});
      return flight;
    }
    catch(err){ 
     throw {err};
    }
   }

   async getFilterData(filter){
    try {
      const flights=await this.flightRepository.getFilterData(filter);
      return flights;
    } catch (error) {
       throw {error};
    }
   }
}

module.exports=new FlightService();