import Sequelize from "sequelize";
import QNA from "../../model/qna";
import User from "../../model/user";

const Op = Sequelize.Op;

const GetNextQNADetail = async id => {
  try {
    const qna = await QNA.findOne({
      where: {
        id: {
          [Op.gt]: id
        }
      },
      attributes: ["id", "updatedAt", "title", "contents", "views"],
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ]
    });

    qna.views += 1;
    await qna.save();

    return {
      ok: true,
      error: null,
      qna
    };
  } catch (error) {
    return {
      ok: false,
      error: "마지막 페이지입니다",
      qna: null
    };
  }
};

export default GetNextQNADetail;
