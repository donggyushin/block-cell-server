import Notice from "../../model/notice";
import User from "../../model/user";
import CommentForNotice from "../../model/commentForNotice";
import { sequelize } from "../../sequelize";

const getNoticesBy15 = async page => {
  const offset = 15 * (page - 1);

  try {
    const notices = await Notice.findAll({
      offset,
      limit: 15,
      order: [["id", "DESC"]],
      subQuery: false,
      distinct: true,
      attributes: ["id", "title", "createdAt", "views"],
      include: [
        // {
        //   model: CommentForNotice,
        //   attributes: []
        // },
        {
          model: User,
          attributes: ["username"]
        }
      ]

      // group: ["notice.id", "commentForNotices.id"]
    });

    return {
      ok: true,
      error: null,
      notices
    };
  } catch (error) {
    return {
      ok: false,
      error,
      notices: []
    };
  }
};

export default getNoticesBy15;
