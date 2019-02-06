import QNA from "../../model/qna";
import User from "../../model/user";

const getQnaDetail = async id => {
  try {
    const qnaDetail = await QNA.findByPk(id, {
      attributes: ["id", "title", "contents", "createdAt", "views"],
      include: [{ model: User, attributes: ["username"] }]
    });
    qnaDetail.views += 1;
    await qnaDetail.save();
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
