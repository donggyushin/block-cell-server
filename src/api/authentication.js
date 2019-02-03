import express from "express";
import multer from "multer";
import { newAccoutFN, loginFN } from "../controller/user/userController";

const router = express.Router();
const upload = multer();

router.post("/new-account", upload.array(), async (req, res) => {
  const { username, password1, password2 } = req.body;
  const returnType = await newAccoutFN(username, password1, password2);
  res.json(returnType);
});

router.get("/login", upload.array(), async (req, res) => {
  const { username, password } = req.body;
  const returnType = await loginFN(username, password);
  res.json(returnType);
});

export default router;
