import express from "express";
import multer from "multer";
import postCommentForFaq from "../controller/commentForFaq/post";

const router = express.Router();
const upload = multer();

// GET

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
