import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const CommentForQna = sequelize.define("commentForQna", {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

export default CommentForQna;
