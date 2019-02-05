import express from "express";
import multer from "multer";
import postQna from "../controller/qna/postQna";
import deleteQna from "../controller/qna/deleteQna";
import putQna from "../controller/qna/putQna";
import getQnaBy15 from "../controller/qna/getQnaBy15";
import getQnaDetail from "../controller/qna/qetQnaDetail";

const router = express.Router();
const upload = multer();

// GET
router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await getQnaDetail(id);
  res.json(returnType);
});

router.get("/:page", async (req, res) => {
  const { page } = req.params;
  const returnType = await getQnaBy15(page);
  res.json(returnType);
});

// POST
router.post("/", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;
  const returnType = await postQna(token, title, contents);
  res.json(returnType);
});

// PUT
router.put("/:id", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;
  const { id } = req.params;
  const returnType = await putQna(token, title, contents, id);
  res.json(returnType);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const returnType = await deleteQna(token, id);
  res.json(returnType);
});

export default router;
