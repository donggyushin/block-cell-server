import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForNotice from "../../model/commentForNotice";

const postComment = async (token, id, text) => {
  try {
    const writer = await decodeJWT(token);

    if (!writer) {
      return {
        ok: false,
        error: "댓글을 달려면 로그인을 해주세요."
      };
    }

    await CommentForNotice.create({
      text,
      userId: writer.id,
      noticeId: id
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

export default postComment;
