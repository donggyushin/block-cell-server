import CommentForQna from "../../model/commentForQna";
import User from "../../model/user";

const getCommentForQna = async qnaId => {
  try {
    const comments = await CommentForQna.findAll({
      where: { qnaId },
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ],
      attributes: ["id", "text", "createdAt"]
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

export default getCommentForQna;
