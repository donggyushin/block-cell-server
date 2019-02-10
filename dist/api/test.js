"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var router = _express.default.Router();

var upload = (0, _multer.default)();
router.get("/", function (req, res) {
  res.send("dddd");
});
router.post("/", upload.array(), function (req, res) {
  console.log(req.body);
  res.json(req.body);
});
var _default = router;
exports.default = _default;