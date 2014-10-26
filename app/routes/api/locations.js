/**
 * Created by Stanislav on 25.10.2014.
 */

var Location = require("./../../models/location");

module.exports = function (app) {

  // Locations
  app.get("/api/locations", function (req, res) {
    Location.find(function (err, locations) {
      if (err) res.send(err);

      res.json(locations);
    })
  });

  app.post("/api/locations/streets", function (req, res) {
    Location.find(function (err, city) {
      if (err) res.send(err);
      for (i = 0; i < city[0].districts.length; i++){
        if (city[0].districts[i].value == req.body.district)
          var streets = city[0].districts[i].streets;
      }
      res.json(streets);
    })
  });

  app.post("/api/locations", function (req, res) {
    Location.create({
      name: req.body.name,
      value: req.body.value
    }, function (err) {
      if (err) res.send(err);

      Location.find(function (err, locations) {
        if (err) res.send(err);
        res.json(locations);
      })
    })
  });

  app.delete("/api/locations/:id", function (req, res) {
    Location.remove({
      _id: req.params.id
    }, function (err) {
      if (err) res.send(err);

      Location.find(function (err, locations) {
        if (err) res.send(err);
        res.json(locations);
      })
    })
  });
};