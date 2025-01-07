const express=require("express");
const v1ApiRouter=require("./v1/index")
const router=express();
const v2ApiRouter=require("./v2");


router.use("/v1",v1ApiRouter);
router.use("/v2",v2ApiRouter);

module.exports=router;