/**
 * Created by Stanislav on 19.10.2014.
 */

var Pharm = require("../models/pharm");
var City = require("../models/city");

module.exports = function (app, path, passport) {

  app.get("/", function(req, res){

    City.find(function (err, cities) {
      if (err) res.send(err);
      var q = {
        "address.city": req.query.city,
        "address.district": req.query.district
      };
      if (req.query.time){
        q["time.night"] = req.query.time;
      }
      Pharm.find(q, function(err, pharms){
        if (err) res.end(err);
        res.render("index", {
          title: "Dandelion",
          cities: cities,
          pharms: pharms,
          selectedDistrict: req.query.district
        })
      });
    });
  });

  app.get("/dashboard/*", isLoggedIn, function (req, res) {
    res.sendFile(path + "/public/dashboard.html");
  });

  app.get("/login", function (req, res) {
    res.render("login");
  });

  app.post('/login', passport.authenticate('loginStrategy', {
    successRedirect : '/dashboard/',
    failureRedirect : '/login'
  }));

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
  }

  require("./api/pharms")(app);
  require("./api/locations")(app);
};