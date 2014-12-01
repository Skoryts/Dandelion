/**
 * Created by Stanislav on 25.10.2014.
 */

var City = require("./../../models/city");
var Street = require("./../../models/street");

module.exports = function (app) {

  // Locations
  app.get("/api/cities", function (req, res) {
    City.find(function (err, cities) {
      if (err) res.send(err);

      res.json(cities);
    })
  });

  app.post("/api/streets", function (req, res) {
    Street.find({
      locations: { $elemMatch: { city: req.body.city, districts: req.body.district } }
    }, function (err, streets) {
      if (err) res.send(err);

      res.json(streets);
    })
  });

  app.post("/api/addstreet", function (req, res) {

    Street.update(
      {
        name: req.body.street
      },
      {
        $addToSet: {locations: { city: req.body.city, districts: req.body.district}}
      },
      {
        "multi" : false,  // update only one document
        "upsert" : true  // insert a new document, if no existing document match the query
      }, function (err) {
          if (err) res.send(err);
          Street.find({
            locations: { $elemMatch: { city: req.body.city, districts: req.body.district } }
          }, function (err, streets) {
            if (err) res.send(err);
            res.json(streets);
          })
      });
  });
};