const routes = require("express").Router();
const SubCategory = require("../models/SubCategory");

routes.get("/", async(req, res)=>{
    let result = await SubCategory.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await SubCategory.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

// { name : "Home Appliance" }
routes.post("/", async(req, res)=>{
    // console.log(req.body)
    await SubCategory.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    await SubCategory.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    await SubCategory.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;