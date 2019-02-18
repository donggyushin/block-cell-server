import Notice from "../../model/notice";
import { sequelize } from "../../sequelize";
import CommentForNotice from "../../model/commentForNotice";
import User from "../../model/user";

const SearchNotice = async searchValue => {
  try {
    let lookupValue = searchValue.toLowerCase();

    const notices = await Notice.findAll({
      order: [["id", "DESC"]],
      where: {
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "LIKE",
          "%" + lookupValue + "%"
        )
      },
      attributes: ["id", "title", "updatedAt", "views"],
      subQuery: false,
      include: [
        // {
        //   model: CommentForNotice,
        //   attributes: [
        //     [
        //       sequelize.fn("COUNT", sequelize.col("CommentForNotices.id")),
        //       "commentCounts"
        //     ]
        //   ]
        // },
        {
          model: User,
          attributes: ["username"]
        }
      ],
      group: [
        "notice.id"
        // , "commentForNotices.id"
      ]
    });

    return {
      ok: true,
      error: null,
      notices
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error,
      notices: null
    };
  }
};

export default SearchNotice;
