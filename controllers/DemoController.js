const routes = require("express").Router();
const path = require("path");

routes.post("/", async(req, res)=>{
    // console.log(req.body);
    // console.log(req.files);
    let file = req.files.image;
    let name = file.name;
    // console.log(__dirname); // F:/project-api/controller
                            // F:/project-api/assets/demo

    // console.log(path.resolve())
    file.mv(path.resolve()+"/assets/demo/"+name);
});

module.exports = routes;