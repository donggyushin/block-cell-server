"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var connectUrl = process.env.DB_URL;

_mongoose.default.connect(connectUrl, {
  useNewUrlParser: true
});

var db = _mongoose.default.connection;

var handleError = function handleError() {
  console.error.bind(console, "❌   connection error:");
};

var handleConnect = function handleConnect() {
  console.log("✅   DB connected!");
};

db.on("error", handleError);
db.once("open", handleConnect);