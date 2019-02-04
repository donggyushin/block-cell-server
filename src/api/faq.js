import express from "express";
import multer from "multer";
import postFaq from "../controller/faq/postFaq";
import deleteFaq from "../controller/faq/deleteFaq";
import getFaqBy15 from "../controller/faq/getFaqBy15";
import getFaqDetail from "../controller/faq/getFaqDetail";
import putFaq from "../controller/faq/putFaq";
import countFaq from "../controller/faq/countFaq";

const router = express.Router();
const upload = multer();

// GET

router.get("/count", async (req, res) => {
  const returnType = await countFaq();
  res.json(returnType);
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await getFaqDetail(id);
  res.json(returnType);
});

router.get("/:page", async (req, res) => {
  const { page } = req.params;
  const returnType = await getFaqBy15(page);
  res.json(returnType);
});

// POST
router.post("/", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;
  const returnType = await postFaq(token, title, contents);
  res.json(returnType);
});

// PUT
router.put("/:id", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;
  const { id } = req.params;
  const returnType = await putFaq(token, title, contents, id);
  res.json(returnType);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const returnType = await deleteFaq(token, id);
  res.json(returnType);
});

export default router;
