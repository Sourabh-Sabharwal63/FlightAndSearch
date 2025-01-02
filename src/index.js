const express=require("express");
const app=express();
const {Port}=require("./serverConfig")



app.use("/",(req,res)=>{
  res.send("Welcome to the Search Service! ");
})


async function StartServer(){
  const Port=process.env.PortNo
  console.log(`Server Start at Port ${Port}`);
app.listen(Port)
}
StartServer();

