/**
 * Created by Stanislav on 19.10.2014.
 */

var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require("./config/db");
mongoose.connect(db.url);

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({"extended":"true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

require("./app/routes")(app);

app.listen(3000);
console.log("App listening on port 3000");