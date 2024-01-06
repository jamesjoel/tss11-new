const routes = require("express").Router();

routes.get("/", (req, res)=>{
    console.log(req.headers);
})

module.exports = routes;