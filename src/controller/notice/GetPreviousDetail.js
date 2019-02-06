import Sequelize from "sequelize";
import Notice from "../../model/notice";
import User from "../../model/user";

const Op = Sequelize.Op;

const GetPreviousNoticeDetail = async id => {
  try {
    const notice = await Notice.findOne({
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
      error,
      notice: null
    };
  }
};

export default GetPreviousNoticeDetail;
