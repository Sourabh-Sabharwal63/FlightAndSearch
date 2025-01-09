const express = require("express");
const app = express();
const { Port } = require("./serverConfig");
const ApiRoutes=require("../routes/index");
const bodyParser=require("body-parser");
const {Airport}=require("../models/index");
const {City}=require("../models/index");
const db=require("../models");
const airport = require("../models/airport");
const {AirplaneRepository,AirportRepository}=require("../repository")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api",ApiRoutes)

// app.use("/", (req, res) => {
//   res.send("Welcome to the Search Service! ");
// });

const obj={};

async function StartServer() {
  console.log(`Server Start at Port ${Port}`);
  app.listen(Port);
  


  
  // db.sequelize.sync({alter:true});

  // const cities=await City.findOne({where:{
  //   id:12,
  // }})
  // const airports=await cities.getAirports();
  // console.log("cities = ",cities);
  // console.log("airports = ",airports);
  // const airports=await Airport.findAll({include:City});
  // console.log(airports);
  // const airports=await Airport.findOne({where:{
  //   id:9
  // }});

  // const city=await airports.getCity();
  // console.log("airport", airports);
  // console.log("city",city);
 
}
StartServer();
