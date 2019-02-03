import CommentForNotice from "../../model/commentForNotice";
import User from "../../model/user";

const getComments = async noticeId => {
  try {
    const comments = await CommentForNotice.findAll({
      where: {
        noticeId
      },
      attributes: ["id", "text", "createdAt"],
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ]
    });
    return {
      ok: true,
      error: null,
      comments
    };
  } catch (error) {
    return {
      ok: false,
      error,
      comments: null
    };
  }
};

export default getComments;
