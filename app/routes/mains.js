/**
 * Created by Stanislav on 19.10.2014.
 */

var Pharm = require("../models/pharm");

module.exports = function (app, path) {

  app.get("/", function(req, res){
    console.log(req.query);
    Pharm.find(function(err, pharms){
      if (err) res.end(err);
      res.render("index", {
        title: "Dandelion",
        pharms: pharms
      })
    });
  });

  app.get("/dashboard/*", function (req, res) {
    res.sendFile(path + "/public/dashboard.html");
  });

  require("./api/pharms")(app);
  require("./api/locations")(app);

};