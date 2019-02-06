import Sequelize from "sequelize";
import FAQ from "../../model/faq";
import User from "../../model/user";

const Op = Sequelize.Op;

const GetPreviousFAQDetail = async id => {
  try {
    const faq = await FAQ.findOne({
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

    faq.views += 1;
    await faq.save();

    return {
      ok: true,
      error: null,
      faq
    };
  } catch (error) {
    return {
      ok: false,
      error,
      faq: null
    };
  }
};

export default GetPreviousFAQDetail;
