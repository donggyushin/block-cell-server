import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForQna from "../../model/commentForQna";

const postCommentForQna = async (token, qnaId, text) => {
  try {
    const writer = await decodeJWT(token);
    if (!writer) {
      return {
        ok: false,
        error: "댓글을 달려면 로그인을 해주세요."
      };
    }

    await CommentForQna.create({
      text,
      userId: writer.id,
      qnaId
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

export default postCommentForQna;
