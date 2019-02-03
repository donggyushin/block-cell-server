import { sequelize } from "../sequelize";
import User from "./user";
import Notice from "./notice";

User.hasMany(Notice, { as: "notices" });
sequelize.sync();
