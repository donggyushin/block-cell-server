"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _test = _interopRequireDefault(require("./test"));

var _authentication = _interopRequireDefault(require("./authentication"));

var _notice = _interopRequireDefault(require("./notice"));

var _commentForNotice = _interopRequireDefault(require("./commentForNotice"));

var _faq = _interopRequireDefault(require("./faq"));

var _CommentForFaq = _interopRequireDefault(require("./CommentForFaq"));

var _qna = _interopRequireDefault(require("./qna"));

var _CommentForQna = _interopRequireDefault(require("./CommentForQna"));

var router = _express.default.Router();

router.use("/test", _test.default);
router.use("/authentication", _authentication.default);
router.use("/notice", _notice.default);
router.use("/comment-for-notice", _commentForNotice.default);
router.use("/faq", _faq.default);
router.use("/comment-for-faq", _CommentForFaq.default);
router.use("/qna", _qna.default);
router.use("/comment-for-qna", _CommentForQna.default);
var _default = router;
exports.default = _default;