import express from "express";
import bodyParser from "body-parser";
import router from "./api";

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

export default app;
