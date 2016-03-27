'use strict';

var PORT = 8080;
var express = require('express');
var app = express();
var path = require('path');
var qs = require('querystring');
var http = require("http");
var url = require('url');
var nodemailer = require('nodemailer');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/userdata', function(req, res) {
  var _parsedUrl = url.parse(req.url, true);
  var parameters = _parsedUrl.query;
  sendEmail(parameters);
});
app.listen(process.env.PORT || PORT);
console.log('Server listenning on port ' + PORT);

function sendEmail(parameters)
{
  var transporter = nodemailer.createTransport('smtps://abbasportfolio%40gmail.com:'+process.env.PASSWORD+'@smtp.gmail.com');

  var mailOptions = {
      from: '"Portfolio 👥" <abbasportfolio@gmail.com>',
      to: 'hassan_abbas9@hotmail.com',
      subject: 'My Portfolio ✔',
      text: parameters.email + " " + parameters.message,
  };

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}
