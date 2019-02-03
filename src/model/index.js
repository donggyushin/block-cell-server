import { sequelize } from "../sequelize";
import User from "./user";
import Notice from "./notice";

Notice.User = Notice.belongsTo(User);

sequelize.sync({ force: false });
