import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const Notice = sequelize.define("notice", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contents: {
    type: Sequelize.TEXT
  }
});

export default Notice;
