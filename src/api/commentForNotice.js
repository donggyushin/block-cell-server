import express from "express";
import multer from "multer";
import postComment from "../controller/commentForNotice/postComment";

const router = express.Router();
const upload = multer();

// get

// post

router.post("/:id", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const { text } = req.body;
  const returnType = await postComment(token, id, text);
  res.json(returnType);
});

// put

// delete

export default router;
