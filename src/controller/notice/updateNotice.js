import { decodeJWT } from "../../utils/jsonwebtoken";
import Notice from "../../model/notice";

const updateNotice = async (token, id, title, contents) => {
  try {
    const writer = await decodeJWT(token);
    const noticeToUpdate = await Notice.findByPk(id);

    if (writer.id !== noticeToUpdate.userId) {
      return {
        ok: false,
        error: "해당 게시물을 수정할 수 있는 권한이 없습니다."
      };
    }

    await noticeToUpdate
      .update({
        title,
        contents
      })
      .then(() => {});

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

export default updateNotice;
