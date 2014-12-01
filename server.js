/**
 * Created by Stanislav on 19.10.2014.
 */

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require("./config/db");
mongoose.connect(db.url);

require('./config/auth')(passport);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({"extended":"true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride());

app.use(session({ secret: 'wegfweberbvwe' }));
app.use(passport.initialize());
app.use(passport.session());

require("./app/routes/mains")(app, __dirname, passport);

app.listen(3000);
console.log("App listening on port 3000");