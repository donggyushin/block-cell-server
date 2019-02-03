import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const CommentForNotice = sequelize.define("commentForNotice", {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

export default CommentForNotice;
