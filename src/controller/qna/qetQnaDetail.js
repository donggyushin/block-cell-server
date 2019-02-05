import QNA from "../../model/qna";
import User from "../../model/user";

const getQnaDetail = async id => {
  try {
    const qnaDetail = await QNA.findByPk(id, {
      attributes: ["id", "title", "contents", "createdAt"],
      include: [{ model: User, attributes: ["username"] }]
    });
    return {
      ok: true,
      error: null,
      qnaDetail
    };
  } catch (error) {
    return {
      ok: false,
      error,
      qnaDetail: null
    };
  }
};

export default getQnaDetail;
