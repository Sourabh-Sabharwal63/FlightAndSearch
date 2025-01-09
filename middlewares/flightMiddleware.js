
const checkValidation=(data)=>{
  const countProperty = Object.keys(data).length;
  const validProperty = [
    "flightNumber",
    "airplaneId",
    "departureAirportId",
    "arrivalAirportId",
    "departureTime",
    "arrivalTime",
    "price",
    "boardingGate",
  ]; 
  if (countProperty !== validProperty.length) return false;

  const isValid = validProperty.every((element) => element in data);
 if (!isValid)return false;
 return true;
}


const validateCreateFlight = (req,res,next) => {
  if(!checkValidation(req.body)){
    console.log("checkValidation ===false ")
   res.status(400).json({
    success:false,
    data:{},
    message:"Invalid request body",
    err:"check the property"
   })
  }else{
     next();
  }

};



module.exports={validateCreateFlight};