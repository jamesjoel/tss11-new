const routes = require("express").Router();
const City = require("../models/City")

routes.get("/", async(req, res)=>{
    
    let result = await City.find();
    res.send(result);
})
// :8080/api/city/state
routes.get("/state", async(req, res)=>{
    let result = await City.distinct("state");
    res.send(result);
})

routes.get("/getcity/:a", async(req, res)=>{
    let x = req.params.a;
    let result = await City.find({ state : x});
    res.send(result);
})


module.exports = routes;
/*

    res.render()            ejs+data
    res.sendFile()          only file html
    res.redirect()          redirect
    res.send()              only data


    req.body
    req.params

*/