import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForQna from "../../model/commentForQna";
import User from "../../model/user";

const postCommentForQna = async (token, qnaId, text) => {
  try {
    const writer = await decodeJWT(token);
    if (!writer) {
      return {
        ok: false,
        error: "댓글을 달려면 로그인을 해주세요."
      };
    }

    const newComment = await CommentForQna.create({
      text,
      userId: writer.id,
      qnaId
    });

    const comment = await CommentForQna.findByPk(newComment.id, {
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
      comment
    };
  } catch (error) {
    return {
      ok: false,
      error,
      comment: null
    };
  }
};

export default postCommentForQna;
