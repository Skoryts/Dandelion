/**
 * Created by Stanislav on 19.10.2014.
 */

var mongoose = require("mongoose");

module.exports = mongoose.model("Location", {
  name: String,
  value: String,
  districts: [
    {
      name: String,
      value: String,
      streets: [
        {
          name: String
        }
      ]
    }
  ]
});