
const {flightService}=require("../services");
const createFlight=async(req,res)=>{
  try{
    const flight=await flightService.createFlight(req.body);
    return res.status(200).json({
      data:flight,
      success:true,
      message:"flight is created successfully"
    })
  }
  catch(err){
      res.status(500).json({
        message:"flight is not created",
        success:false
      })
  }
}

const getFilterData=async(req,res)=>{
  try {
    
    const flights=await flightService.getFilterData(req.body);
    res.status(200).json({
      data:{flights},
      success:true,
      message :"here's your data"
    })
  } catch (error) {
    res.status(500).json({
      message:"didn't get any flights",
      error:error,
      success:false
    })
  }
}

module.exports={createFlight,getFilterData};