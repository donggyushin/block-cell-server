import { sequelize } from "../sequelize";
import User from "./user";
import Notice from "./notice";
import CommentForNotice from "./commentForNotice";

Notice.User = Notice.belongsTo(User);
CommentForNotice.User = CommentForNotice.belongsTo(User);
CommentForNotice.Notice = CommentForNotice.belongsTo(Notice);

sequelize.sync({ force: false });
