import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForFaq from "../../model/commentForFaq";

const postCommentForFaq = async (token, faqId, text) => {
  try {
    const writer = await decodeJWT(token);
    if (!writer) {
      return {
        ok: false,
        error: "댓글을 달려면 로그인을 해주세요."
      };
    }

    await CommentForFaq.create({
      text,
      userId: writer.id,
      faqId
    });

    return {
      ok: true,
      error: null
    };
  } catch (error) {
    return {
      ok: false,
      error
    };
  }
};

export default postCommentForFaq;
