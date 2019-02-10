import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForNotice from "../../model/commentForNotice";
import User from "../../model/user";

const postComment = async (token, id, text) => {
  try {
    const writer = await decodeJWT(token);

    if (!writer) {
      return {
        ok: false,
        error: "댓글을 달려면 로그인을 해주세요."
      };
    }

    const newComment = await CommentForNotice.create({
      text,
      userId: writer.id,
      noticeId: id
    });

    const comment = await CommentForNotice.findByPk(newComment.id, {
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

export default postComment;
