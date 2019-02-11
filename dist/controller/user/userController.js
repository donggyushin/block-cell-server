"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginFN = exports.newAccoutFN = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../../model/user"));

var _bcrypt = require("../../utils/bcrypt");

var _jsonwebtoken = require("../../utils/jsonwebtoken");

var newAccoutFN =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(username, password1, password2) {
    var hashedPassword, returnType, _returnType;

    return _regenerator.default.wrap(function _callee$(_context) {
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
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(username, password) {
    var user, id, hashedPassword, match, jwt;
    return _regenerator.default.wrap(function _callee2$(_context2) {
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
            console.log("여기?");
            console.log(user);
            id = user.id, hashedPassword = user.password;
            console.log("여기??");
            match = (0, _bcrypt.comparePassword)(password, hashedPassword);

            if (match) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", {
              ok: false,
              error: "비밀번호가 서로 일치하지 않습니다. ",
              jwt: null
            });

          case 11:
            console.log("here!");
            _context2.next = 14;
            return (0, _jsonwebtoken.createJWT)(id);

          case 14:
            jwt = _context2.sent;
            console.log("here!!!!");
            return _context2.abrupt("return", {
              ok: true,
              error: null,
              jwt: jwt
            });

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", {
              ok: false,
              error: _context2.t0,
              jwt: null
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 19]]);
  }));

  return function loginFN(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.loginFN = loginFN;