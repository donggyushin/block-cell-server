import Sequelize from "sequelize";
import { sequelize } from "../sequelize";

const CommentForFaq = sequelize.define("commentForFaq", {
  text: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

export default CommentForFaq;
