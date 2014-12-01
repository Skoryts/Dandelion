/**
 * Created by Stanislav on 19.10.2014.
 */

var mongoose = require("mongoose");

module.exports = mongoose.model("Pharm", {
  name: String,
  address: {
    city: String,
    district: String,
    street: String,
    house: String
  },
  time:{
    night: Boolean,
    schedule: String
  },
  contacts: String
});