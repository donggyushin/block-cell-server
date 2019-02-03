import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

export default User;
