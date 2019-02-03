import express from "express";
import test from "./test";
import authentication from "./authentication";

const router = express.Router();

router.use("/test", test);
router.use("/authentication", authentication);

export default router;
