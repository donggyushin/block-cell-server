import QNA from "../../model/qna";
import User from "../../model/user";
import CommentForQna from "../../model/commentForQna";
import { sequelize } from "../../sequelize";

const getQnaBy15 = async page => {
  const offset = 15 * (page - 1);

  try {
    const qnas = await QNA.findAll({
      offset,
      limit: 15,
      order: [["id", "DESC"]],
      subQuery: false,
      attributes: ["id", "title", "updatedAt", "views"],
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
      group: ["qna.id", "commentForqnas.id"]
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

export default getQnaBy15;
