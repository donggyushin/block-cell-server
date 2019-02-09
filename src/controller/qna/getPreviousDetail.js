import Sequelize from "sequelize";
import QNA from "../../model/qna";
import User from "../../model/user";

const Op = Sequelize.Op;

const GetPreviousQNADetail = async id => {
  try {
    console.log(id);
    const qna = await QNA.findOne({
      where: {
        id: {
          [Op.lt]: id
        }
      },
      attributes: ["id", "updatedAt", "title", "contents", "views"],
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ],
      order: [["id", "DESC"]]
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
      error: "첫번째 페이지입니다. ",
      qna
    };
  }
};

export default GetPreviousQNADetail;
