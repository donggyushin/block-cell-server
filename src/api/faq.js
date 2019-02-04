import express from "express";
import multer from "multer";
import postFaq from "../controller/faq/postFaq";
import deleteFaq from "../controller/faq/deleteFaq";
const router = express.Router();
const upload = multer();

// GET

// POST
router.post("/", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;
  const returnType = await postFaq(token, title, contents);
  res.json(returnType);
});

// PUT

// DELETE
router.delete("/:id", async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const returnType = await deleteFaq(token, id);
  res.json(returnType);
});

export default router;
