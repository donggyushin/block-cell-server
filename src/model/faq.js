import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const FAQ = sequelize.define("faq", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contents: {
    type: Sequelize.TEXT
  },
  views: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

export default FAQ;
