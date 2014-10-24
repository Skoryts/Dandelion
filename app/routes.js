/**
 * Created by Stanislav on 19.10.2014.
 */

var Pharm = require("./models/pharm");
var City = require("./models/city");

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

  //API

  // Pharmacies
  app.get("/api/pharms", function (req, res) {
    Pharm.find(function (err, pharms) {
      if (err) res.send(err);

      res.json(pharms);
    })
  });

  app.post("/api/pharms", function (req, res) {
    Pharm.create({
                   name: req.body.name,
                   done: false
                 }, function (err, pharm) {
      if (err) res.send(err);

      Pharm.find(function (err, pharms) {
        if (err) res.send(err);
        res.json(pharms);
      })
    })
  });

  app.delete("/api/pharms/:pharm_id", function (req, res) {
    Pharm.remove({
                   _id: req.params.pharm_id
                 }, function (err, pharm) {
      if (err) res.send(err);

      Pharm.find(function (err, pharms) {
        if (err) res.send(err);
        res.json(pharms);
      })
    })
  });

  //Cities

  app.get("/api/cities", function (req, res) {
    City.find(function (err, cities) {
      if (err) res.send(err);

      res.json(cities);
    })
  });

  app.post("/api/cities", function (req, res) {
    City.create({
      name: req.body.name,
      value: req.body.value
    }, function (err) {
      if (err) res.send(err);

      City.find(function (err, cities) {
        if (err) res.send(err);
        res.json(cities);
      })
    })
  });

  app.delete("/api/cities/:city_id", function (req, res) {
    City.remove({
      _id: req.params.city_id
    }, function (err) {
      if (err) res.send(err);

      City.find(function (err, cities) {
        if (err) res.send(err);
        res.json(cities);
      })
    })
  });


};