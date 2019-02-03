import express from "express";
import test from "./test";
import authentication from "./authentication";
import notice from "./notice";

const router = express.Router();

router.use("/test", test);
router.use("/authentication", authentication);
router.use("/notice", notice);

export default router;
