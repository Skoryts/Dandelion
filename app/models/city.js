/**
 * Created by Stanislav on 19.10.2014.
 */

var mongoose = require("mongoose");

module.exports = mongoose.model("City", {
  name: String,
  value: String
});