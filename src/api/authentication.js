import express from "express";
import multer from "multer";
import { newAccoutFN, loginFN } from "../controller/user/userController";
import GetUserProfile from "../controller/user/getUserProfile";

const router = express.Router();
const upload = multer();

router.post("/new-account", upload.array(), async (req, res) => {
  const { username, password1, password2 } = req.body;
  const returnType = await newAccoutFN(username, password1, password2);
  res.json(returnType);
});

router.post("/login", upload.array(), async (req, res) => {
  const { username, password } = req.body;
  const returnType = await loginFN(username, password);

  res.json(returnType);
});

router.get("/get-user-profile", GetUserProfile);

export default router;
