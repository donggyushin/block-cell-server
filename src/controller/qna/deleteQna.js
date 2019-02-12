import { decodeJWT } from "../../utils/jsonwebtoken";
import QNA from "../../model/qna";

const deleteQna = async (token, id) => {
  try {
    const writer = await decodeJWT(token);
    const qnaToDelete = await QNA.findByPk(id);

    if (!writer.admin) {
      return {
        ok: false,
        error: "접근 권한이 없습니다."
      };
    }

    // if (writer.id !== qnaToDelete.userId) {
    //   return {
    //     ok: false,
    //     error: "접근 권한이 없습니다. "
    //   };
    // }

    await qnaToDelete.destroy();
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

export default deleteQna;
