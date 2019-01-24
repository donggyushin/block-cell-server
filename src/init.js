import App from "./app";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;
const handleListen = () => {
  console.log(`✅   Block cell Application is listening on port ${port}`);
};

App.listen(port, handleListen);
