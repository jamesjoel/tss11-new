const routes = require("express").Router();
const nodemailer = require("nodemailer");
const sendmail = require('sendmail')();

routes.get("/", async(req, res)=>{


    sendmail({
        from: 'test@test.org',
        to: 'bhooshanpandre200@gmail.com',
        subject: 'Hello World',
        html: 'Hooray NodeJS!!!'
      }, function (err, reply) {
        console.log(err && err.stack)
        console.dir(reply)
        res.send({success : true})
      })


})

module.exports = routes;