"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./mysql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

_dotenv.default.config();

var port = process.env.PORT;
var env = process.env.NODE_ENV || "dev";

if (env === "dev") {
  port = (_readOnlyError("port"), 3000);
}

var handleListen = function handleListen() {
  console.log("\u2705   Block cell Application is listening on port ".concat(port));
};

_app.default.listen(port, handleListen);