import App from "./app";
import dotenv from "dotenv";
import "./mysql";
dotenv.config();

const port = process.env.PORT;
const handleListen = () => {
  console.log(`✅   Block cell Application is listening on port ${port}`);
};

console.log("hahaha");

App.listen(port, handleListen);
