const routes = require("express").Router();
const Country = require("../models/Country")

routes.get("/", async(req, res)=>{
    let result = await Country.find();
    res.send(result);
})
routes.get("/getcode/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await Country.find({ name : x});
    res.send(result[0]);
})


module.exports = routes;