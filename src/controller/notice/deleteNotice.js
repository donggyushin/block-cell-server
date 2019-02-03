import { decodeJWT } from "../../utils/jsonwebtoken";
import Notice from "../../model/notice";

const deleteNotice = async (token, id) => {
  try {
    const writer = await decodeJWT(token);
    const noticeToDelete = await Notice.findByPk(id);

    if (writer.id !== noticeToDelete.userId) {
      return {
        ok: false,
        error: "해당 글을 삭제할 수 있는 권한이 없습니다."
      };
    }

    await noticeToDelete.destroy();

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

export default deleteNotice;
