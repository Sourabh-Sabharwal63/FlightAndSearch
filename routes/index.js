const express=require("express");
const router=express();

const v1ApiRouter=require("./v1/index")
const v2ApiRouter=require("./v2");
const v3ApiRouter=require("./v3");



router.use("/v1",v1ApiRouter);
router.use("/v2",v2ApiRouter);
router.use("/v3",v3ApiRouter);

module.exports=router;