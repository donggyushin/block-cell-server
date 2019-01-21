import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.get("/", (req, res) => {
  res.send("dddd");
});

router.post("/", upload.array(), (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

export default router;
