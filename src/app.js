import express from "express";
import router from "./api";

const app = express();

app.use("/api", router);

export default app;
