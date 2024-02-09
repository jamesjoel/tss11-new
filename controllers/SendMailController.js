const routes = require("express").Router();
const nodemailer = require("nodemailer");

routes.get("/", async(req, res)=>{


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: 'bhooshanpandre200@gmail.com',
          pass: 'bhooshan2000@'
        }
      });
      
      var mailOptions = {
        from: 'bhooshanpandre200@gmail.com',
        to: 'james.steppingstone@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send({ success : true });
        }
      });


})

module.exports = routes;