/**
 * Created by Stanislav on 19.10.2014.
 */

var mongoose = require("mongoose");

module.exports = mongoose.model("Street", {
  name: String,
  locations: Array
});