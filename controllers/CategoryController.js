const routes = require("express").Router();
const Cate = require("../models/Category");

routes.get("/", async(req, res)=>{
    let result = await Cate.find();
    res.send({ success : true, result : result });
})
routes.get("/:id", async(req, res)=>{
    let result = await Cate.find({ _id : req.params.id });
    res.send({ success : true, result : result[0] });
})

// { name : "Home Appliance" }
routes.post("/", async(req, res)=>{
    // console.log(req.body)
    await Cate.create(req.body);
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    await Cate.updateMany({ _id : req.params.id }, req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    await Cate.deleteMany({ _id : req.params.id });
    res.send({ success : true });
})



module.exports = routes;