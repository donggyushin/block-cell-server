"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./sequelize");

require("./model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var port = process.env.PORT;
var env = process.env.NODE_ENV || "dev";

if (env === "dev") {
  port = 3000;
}

var handleListen = function handleListen() {
  console.log("\u2705   Block cell Application is listening on port ".concat(port));
};

_app.default.listen(port, handleListen);