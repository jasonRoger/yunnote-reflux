var config = require("../config.js");
var mongoose = require("mongoose");

mongoose.connect(config.HOSTNAME, config.DBNAME, config.PORT);

module.exports = mongoose;