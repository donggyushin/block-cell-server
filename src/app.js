import express from "express";
import bodyParser from "body-parser";
import router from "./api";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use("/api", router);
app.use("/", express.static(__dirname + "/../frontend/build"));

//database relationships

export default app;
