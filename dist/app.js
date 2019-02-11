"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _api = _interopRequireDefault(require("./api"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var path = require("path");

var app = (0, _express.default)(); //middlewares

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _helmet.default)());
app.use((0, _morgan.default)("dev"));
app.use((0, _cookieParser.default)()); // Add headers

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*"); // Request methods you wish to allow

  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); // Request headers you wish to allow

  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type"); // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  res.setHeader("Access-Control-Allow-Credentials", true); // Pass to next layer of middleware

  next();
});
app.use("/api", _api.default);
app.use("/", _express.default.static(__dirname + "/../frontend/build"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/../frontend/build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
}); //database relationships

var _default = app;
exports.default = _default;