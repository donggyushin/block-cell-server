import express from "express";
import multer from "multer";
import postFaq from "../controller/faq/postFaq";
const router = express.Router();
const upload = multer();

router.post("/", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;
  const returnType = await postFaq(token, title, contents);
  res.json(returnType);
});

export default router;
