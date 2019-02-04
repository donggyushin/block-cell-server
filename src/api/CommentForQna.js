import express from "express";
import multer from "multer";
import getCommentForQna from "../controller/commentForQna/get";
import postCommentForQna from "../controller/commentForQna/post";
import deleteCommentForQna from "../controller/commentForQna/delete";

const router = express.Router();
const upload = multer();

// GET
router.get("/:qnaId", async (req, res) => {
  const { qnaId } = req.params;
  const returnType = await getCommentForQna(qnaId);
  res.json(returnType);
});

// POST
router.post("/:qnaId", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { qnaId } = req.params;
  const { text } = req.body;
  const returnType = await postCommentForQna(token, qnaId, text);
  res.json(returnType);
});

// PUT

// DELETE
router.delete("/:id", async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const returnType = await deleteCommentForQna(token, id);
  res.json(returnType);
});

export default router;
