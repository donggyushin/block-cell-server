import { sequelize } from "../sequelize";
import User from "./user";
import Notice from "./notice";
import CommentForNotice from "./commentForNotice";
import FAQ from "./faq";

Notice.User = Notice.belongsTo(User);
CommentForNotice.User = CommentForNotice.belongsTo(User);
CommentForNotice.Notice = CommentForNotice.belongsTo(Notice);
User.hasMany(FAQ, { as: "faqs" });

sequelize.sync({ force: false });
