import Sequelize from "sequelize";
import Notice from "../../model/notice";
import User from "../../model/user";

const Op = Sequelize.Op;

const GetNextNoticeDetail = async id => {
  try {
    const notice = await Notice.findOne({
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

    notice.views += 1;
    await notice.save();

    return {
      ok: true,
      error: null,
      notice
    };
  } catch (error) {
    return {
      ok: false,
      error: "마지막 페이지 입니다. ",
      notice: null
    };
  }
};

export default GetNextNoticeDetail;
