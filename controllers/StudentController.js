const routes = require("express").Router();
const Student = require("../models/Student");

routes.get("/", async(req, res)=>{
    let result = await Student.find();
    res.send({ result : result });
})
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Student.find({_id : id});
    res.send({ result : result[0] });
})
routes.post("/", async(req, res)=>{
    await Student.create(req.body);
    res.send({success : true})
})
routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await Student.updateMany({ _id : id}, req.body);
    res.send({success : true})
})
routes.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    await Student.deleteMany({_id : id })
    res.send({success : true})
})

module.exports = routes;