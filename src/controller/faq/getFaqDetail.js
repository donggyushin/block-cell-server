import User from "../../model/user";
import FAQ from "../../model/faq";

const getFaqDetail = async id => {
  try {
    const faqDetail = await FAQ.findByPk(id, {
      attributes: ["id", "title", "contents", "createdAt"],
      include: [{ model: User, attributes: ["username"] }]
    });
    return {
      ok: true,
      error: null,
      faqDetail
    };
  } catch (error) {
    return {
      ok: false,
      error,
      faqDetail: null
    };
  }
};

export default getFaqDetail;
