import express from "express";
import multer from "multer";
import writeNotice from "../controller/notice/writeNotice";
import deleteNotice from "../controller/notice/deleteNotice";
import getNoticesBy15 from "../controller/notice/getNoticesBy15";
import allCountOfNotices from "../controller/notice/allCountOfNotices";
import getNoticeDetail from "../controller/notice/getNoticeDetail";
import updateNotice from "../controller/notice/updateNotice";
import GetNextNoticeDetail from "../controller/notice/GetNextDetail";
import GetPreviousNoticeDetail from "../controller/notice/GetPreviousDetail";
import SearchNotice from "../controller/notice/searchNotice";

const router = express.Router();
const upload = multer();

// get
router.get("/count", upload.array(), async (req, res) => {
  const returnType = await allCountOfNotices();
  res.json(returnType);
});
router.get("/detail/:id", upload.array(), async (req, res) => {
  const { id } = req.params;
  const returnType = await getNoticeDetail(id);
  res.json(returnType);
});
router.get("/next/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await GetNextNoticeDetail(id);
  res.json(returnType);
});

router.get("/previous/:id", async (req, res) => {
  const { id } = req.params;
  const returnType = await GetPreviousNoticeDetail(id);
  res.json(returnType);
});

router.get("/search/:searchValue", async (req, res) => {
  const { searchValue } = req.params;
  const returnType = await SearchNotice(searchValue);
  res.json(returnType);
});

router.get("/:page", upload.array(), async (req, res) => {
  const { page } = req.params;
  const returnType = await getNoticesBy15(page);
  res.json(returnType);
});

// post
router.post("/", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { title, contents } = req.body;

  const returnType = await writeNotice(token, title, contents);

  res.json(returnType);
});

// delete
router.delete("/:id", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const returnType = await deleteNotice(token, id);
  res.json(returnType);
});

// put
router.put("/:id", upload.array(), async (req, res) => {
  const token = req.get("X-JWT");
  const { id } = req.params;
  const { title, contents } = req.body;
  const returnType = await updateNotice(token, id, title, contents);
  res.json(returnType);
});

export default router;
