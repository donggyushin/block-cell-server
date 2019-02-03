import express from "express";
import test from "./test";
import authentication from "./authentication";
import notice from "./notice";
import commentForNotice from "./commentForNotice";

const router = express.Router();

router.use("/test", test);
router.use("/authentication", authentication);
router.use("/notice", notice);
router.use("/comment-for-notice", commentForNotice);

export default router;
