import Notice from "../../model/notice";
import User from "../../model/user";

const getNoticeDetail = async id => {
  try {
    const noticeDetail = await Notice.findByPk(id, {
      attributes: ["id", "title", "contents", "createdAt"],
      include: [{ model: User, attributes: ["username"] }]
    });
    return {
      ok: true,
      error: null,
      noticeDetail
    };
  } catch (error) {
    return {
      ok: false,
      error,
      noticeDetail: null
    };
  }
};

export default getNoticeDetail;
