import express from "express";
import multer from "multer";
import writeNotice from "../controller/notice/writeNotice";
import deleteNotice from "../controller/notice/deleteNotice";
import getNoticesBy15 from "../controller/notice/getNoticesBy15";
import allCountOfNotices from "../controller/notice/allCountOfNotices";

const router = express.Router();
const upload = multer();

// get
router.get("/count", upload.array(), async (req, res) => {
  const returnType = await allCountOfNotices();
  res.json(returnType);
});

router.get("/:page", upload.array(), async (req, res) => {
  const { page } = req.params;
  const returnType = await getNoticesBy15(page);
  res.json(returnType);
});

router.get("/detail/:id", upload.array(), async (req, res) => {});

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

export default router;
