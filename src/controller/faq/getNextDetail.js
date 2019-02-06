import Sequelize from "sequelize";
import User from "../../model/user";
import FAQ from "../../model/faq";

const Op = Sequelize.Op;

const GetNextFAQDetail = async id => {
  try {
    const faq = await FAQ.findOne({
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

export default GetNextFAQDetail;
