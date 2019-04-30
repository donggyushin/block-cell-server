import { sequelize } from "../sequelize";
import User from "./user";
import Notice from "./notice";
import CommentForNotice from "./commentForNotice";
import FAQ from "./faq";
import CommentForFaq from "./commentForFaq";
import QNA from "./qna";
import CommentForQna from "./commentForQna";

Notice.User = Notice.belongsTo(User);
CommentForNotice.User = CommentForNotice.belongsTo(User);
CommentForNotice.Notice = CommentForNotice.belongsTo(Notice);
Notice.hasMany(CommentForNotice);

// User.hasMany(FAQ, { as: "faqs" });
FAQ.User = FAQ.belongsTo(User);
CommentForFaq.belongsTo(User);
CommentForFaq.belongsTo(FAQ);
FAQ.hasMany(CommentForFaq);

QNA.belongsTo(User);
CommentForQna.belongsTo(User);
CommentForQna.belongsTo(QNA);
QNA.hasMany(CommentForQna);

sequelize.sync({ force: true });
