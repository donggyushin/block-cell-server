import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForFaq from "../../model/commentForFaq";
import User from "../../model/user";

const postCommentForFaq = async (token, faqId, text) => {
  try {
    const writer = await decodeJWT(token);
    if (!writer) {
      return {
        ok: false,
        error: "댓글을 달려면 로그인을 해주세요."
      };
    }

    const newComment = await CommentForFaq.create({
      text,
      userId: writer.id,
      faqId
    });

    const comment = await CommentForFaq.findByPk(newComment.id, {
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

export default postCommentForFaq;
