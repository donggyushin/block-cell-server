import App from "./app";
import dotenv from "dotenv";
import "./sequelize";
import "./model";

dotenv.config();

let port = process.env.PORT;

const env = process.env.NODE_ENV || "dev";
if (env === "dev") {
  port = 3000;
}

const handleListen = () => {
  console.log(`✅   Block cell Application is listening on port ${port}`);
};

App.listen(port, handleListen);
