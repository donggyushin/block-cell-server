import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.NODE_ENV);
const env = process.env.NODE_ENV || "dev";
let host = process.env.HOST;
let user = process.env.USERNAME;
let password = process.env.PASSWORD;
let database = process.env.DATABASE;
if (env === "dev") {
  console.log("asdasd");
  host = "localhost";
  user = "rontend";
  password = process.env.DEV_PASSWORD;
  database = "blockcell";
}

const connection = mysql.createConnection({
  host,
  user,
  password,
  database
});

connection.connect(err => {
  if (err) {
    console.log(`❌   Error: ${err.stack}`);
    return;
  }

  console.log(`✅   connected as id ${connection.threadId}`);
});
