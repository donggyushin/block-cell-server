import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "dev";
let host = process.env.HOST;
let user = process.env.USERNAME;
let password = process.env.PASSWORD;
let database = process.env.DATABASE;

if (env == "dev") {
  host = "localhost";
  user = "rontend";
  password = process.env.DEV_PASSWORD;
  database = "blockcell";
}

// const host = "localhost";
// const user = "rontend";
// const password = "nlcfjb1129";
// const database = "blockcell";

console.log(user, password, host);

export const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅   Connection has been established successfully");
  })
  .catch(err => {
    console.log("❌   Unable to connect to the database: ", err);
  });
