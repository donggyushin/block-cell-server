"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./sequelize");

require("./model");

require("babel-core/register");

_dotenv.default.config();

var port = process.env.PORT;
var env = process.env.NODE_ENV || "dev";

if (env === "dev") {
  port = 3000;
}

port = 3000; // port = 8001;

var handleListen = function handleListen() {
  console.log("\u2705   Block cell Application is listening on port ".concat(port));
};

_app.default.listen(port, handleListen);