import express from "express";
import multer from "multer";
import postFaq from "../controller/faq/postFaq";
import deleteFaq from "../controller/faq/deleteFaq";
import getFaqBy15 from "../controller/faq/getFaqBy15";
import getFaqDetail from "../controller/faq/getFaqDetail";
import putFaq from "../controller/faq/putFaq";
import countFaq from "../controller/faq/countFaq";
import GetNextFAQDetail from "../controller/faq/getNextDetail";
import GetPreviousFAQDetail from "../controller/faq/getPreviousDetail";
import SearchFAQ from "../controller/faq/searchByTerm";

const router = express.Router();
const upload = multer();

// GET

router.get("/count", async (req, res) => {
  const returnType = await countFaq();
  res.json(returnType);
});

router.get("/next/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await GetNextFAQDetail(id);
  res.json(returnType);
});

router.get("/previous/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await GetPreviousFAQDetail(id);
  res.json(returnType);
});

router.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await getFaqDetail(id);
  res.json(returnType);
});

router.get("/search/:searchValue", async (req, res) => {
  const { searchValue } = req.params;
  const returnType = await SearchFAQ(searchValue);
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
