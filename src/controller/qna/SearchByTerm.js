import QNA from "../../model/qna";
import { sequelize } from "../../sequelize";
import CommentForQna from "../../model/commentForQna";
import User from "../../model/user";

const SearchQNA = async searchValue => {
  try {
    let lookupValue = searchValue.toLowerCase();

    const qnas = await QNA.findAll({
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
        {
          model: CommentForQna,
          attributes: [
            [
              sequelize.fn("COUNT", sequelize.col("CommentForQnas.id")),
              "commentCounts"
            ]
          ]
        },
        {
          model: User,
          attributes: ["username"]
        }
      ],
      group: ["qna.id", "commentForQnas.id"]
    });

    return {
      ok: true,
      error: null,
      qnas
    };
  } catch (error) {
    return {
      ok: false,
      error,
      qnas: null
    };
  }
};

export default SearchQNA;
