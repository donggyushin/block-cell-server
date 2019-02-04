import { decodeJWT } from "../../utils/jsonwebtoken";
import CommentForQna from "../../model/commentForQna";

const deleteCommentForQna = async (token, id) => {
  try {
    const writer = await decodeJWT(token);
    const commentToDelete = await CommentForQna.findByPk(id);
    if (writer.id !== commentToDelete.userId) {
      return {
        ok: false,
        error: "권한이 없습니다. "
      };
    }
    await commentToDelete.destroy();
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

export default deleteCommentForQna;
