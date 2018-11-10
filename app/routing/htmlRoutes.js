//Dependencies
var path = require('path');

//Routing

module.exports = function(app){
  
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '../public/survey.html'));
  });

  //route to home page incase path doesn't match
  app.get("*",function (req, res) {
    res.sendFile(path.join(__dirname + '../public/home.html'));
  });
};
