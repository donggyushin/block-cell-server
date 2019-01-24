"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

require("./mysql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var port = process.env.PORT;

var handleListen = function handleListen() {
  console.log("\u2705   Block cell Application is listening on port ".concat(port));
};

_app.default.listen(port, handleListen);