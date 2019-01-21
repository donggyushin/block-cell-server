import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectUrl = process.env.DB_URL;

mongoose.connect(
  connectUrl,
  { useNewUrlParser: true }
);

const db = mongoose.connection;

const handleError = () => {
  console.error.bind(console, "❌   connection error:");
};

const handleConnect = () => {
  console.log("✅   DB connected!");
};

db.on("error", handleError);
db.once("open", handleConnect);
