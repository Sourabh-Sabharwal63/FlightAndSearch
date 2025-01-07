const {airPortService}=require("../services")


const create=async(req,res)=>{
  try{
   const airport=await airPortService.create(req.body);
   return res.status(201).json({
    data:airport,
    success:true,
    message:"successfully created airport"
   })
  }
  catch(err){
    console.log(err.message);
    return res.status(500).json({
      data:{},
      success:false,
      message:" Not able to create airport",
      err:err,
    })

  }
}

const updateAirport=async (req,res)=>{
  try{
    const airport=await airPortService.updateAirport(req.params.airportId,req.body);
    return res.status(200).json({
      data:airport,
      message:"Successfully get the airport",
      success:true
    })
  }
  catch(err){
  return res.status(500).json({
    message:" Not able to get the data",
    success:false,
    err:err
  });
  }
}

const destroyAirport=async (req,res)=>{
  try{
    const flag=await airPortService.destroy(req.params.airportId);
    return res.status(200).json({
      success:true,
      message:"airport is deleted",
      data:flag
    })
  }
  catch(err){
    return res.status(500).json({
      message:" Not able to get the data",
      success:false,
      err:err
    });
  }
}


const getAllAirport= async (req,res)=>{
  try{
    const airportList=await airPortService.getAllAirport();
    return res.status(200).json({
      data:airportList,
      success:true,
      message:"get all the airports"
    })

  }
  catch(err){
    return res.send(500).json({
      message:" Not able to get the data",
      success:false,
      err:err
    });
  }
}

const getAirport= async (req,res)=>{
  try{
    console.log("*** here ****",req.params.airportId)
    const airport=await airPortService.getAirport(req.params.airportId);
    return res.status(200).json({
      data:airport,
      message:"get the airport",
      success:true
    })
  }
  catch(err){
    return res.status(500).json({
      message:" Not able to get the data",
      success:false,
      err:err
    });
  }
}
module.exports={create,updateAirport,destroyAirport,getAllAirport,getAirport}
