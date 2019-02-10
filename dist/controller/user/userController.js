"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFN = exports.newAccoutFN = void 0;

var _user = _interopRequireDefault(require("../../model/user"));

var _bcrypt = require("../../utils/bcrypt");

var _jsonwebtoken = require("../../utils/jsonwebtoken");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var newAccoutFN =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(username, password1, password2) {
    var hashedPassword, returnType, _returnType;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(password1 !== password2)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", {
              ok: false,
              error: "비밀번호가 서로 일치하지 않습니다. "
            });

          case 2:
            hashedPassword = (0, _bcrypt.hashPassword)(password1);

            if (!(username === "blockcell")) {
              _context.next = 10;
              break;
            }

            _context.next = 6;
            return _user.default.findOrCreate({
              where: {
                username: username
              },
              defaults: {
                password: hashedPassword,
                admin: true
              }
            }).spread(function (user, created) {
              if (!created) {
                return {
                  ok: false,
                  error: "이미 존재하는 아이디입니다. 다른 아이디를 선택해 주세요. "
                };
              } else {
                return {
                  ok: true,
                  error: null
                };
              }
            });

          case 6:
            returnType = _context.sent;
            return _context.abrupt("return", returnType);

          case 10:
            _context.next = 12;
            return _user.default.findOrCreate({
              where: {
                username: username
              },
              defaults: {
                password: hashedPassword
              }
            }).spread(function (user, created) {
              if (!created) {
                return {
                  ok: false,
                  error: "이미 존재하는 아이디입니다. 다른 아이디를 선택해 주세요. "
                };
              } else {
                return {
                  ok: true,
                  error: null
                };
              }
            });

          case 12:
            _returnType = _context.sent;
            return _context.abrupt("return", _returnType);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function newAccoutFN(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.newAccoutFN = newAccoutFN;

var loginFN =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(username, password) {
    var user, id, hashedPassword, match, jwt;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _user.default.findOne({
              where: {
                username: username
              }
            }).then(function (user) {
              return user;
            });

          case 3:
            user = _context2.sent;
            id = user.id, hashedPassword = user.password;
            match = (0, _bcrypt.comparePassword)(password, hashedPassword);

            if (match) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", {
              ok: false,
              error: "비밀번호가 서로 일치하지 않습니다. ",
              jwt: null
            });

          case 8:
            _context2.next = 10;
            return (0, _jsonwebtoken.createJWT)(id);

          case 10:
            jwt = _context2.sent;
            return _context2.abrupt("return", {
              ok: true,
              error: null,
              jwt: jwt
            });

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", {
              ok: false,
              error: _context2.t0,
              jwt: null
            });

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 14]]);
  }));

  return function loginFN(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginFN = loginFN;