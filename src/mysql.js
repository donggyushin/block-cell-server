import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env);

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

connection.connect(err => {
  if (err) {
    console.log(`Error: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});
