import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const QNA = sequelize.define("qna", {
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

export default QNA;
