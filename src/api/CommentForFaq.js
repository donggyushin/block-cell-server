import express from "express";
import multer from "multer";
import postCommentForFaq from "../controller/commentForFaq/post";
import getCommentForFaq from "../controller/commentForFaq/get";

const router = express.Router();
const upload = multer();

// GET
router.get("/:faqId", async (req, res) => {
  const { faqId } = req.params;
  const returnType = await getCommentForFaq(faqId);
  res.json(returnType);
});

// POST
router.post("/:faqId", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { faqId } = req.params;
  const { text } = req.body;
  const returnType = await postCommentForFaq(token, faqId, text);
  res.json(returnType);
});

// PUT

// DELETE

export default router;
