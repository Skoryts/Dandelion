/**
 * Created by Stanislav on 25.10.2014.
 */

var Pharm = require("./../../models/pharm");

module.exports = function (app) {

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

  app.delete("/api/pharms/:id", function (req, res) {
    Pharm.remove({
      _id: req.params.id
    }, function (err, pharm) {
      if (err) res.send(err);

      Pharm.find(function (err, pharms) {
        if (err) res.send(err);
        res.json(pharms);
      })
    })
  });
};