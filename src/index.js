const express = require("express");
const app = express();
const { Port } = require("./serverConfig");
const ApiRoutes=require("../routes/index");
const bodyParser=require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api",ApiRoutes)

// app.use("/", (req, res) => {
//   res.send("Welcome to the Search Service! ");
// });



async function StartServer() {
  console.log(`Server Start at Port ${Port}`);
  app.listen(Port);
}
StartServer();
