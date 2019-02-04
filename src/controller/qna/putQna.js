import { decodeJWT } from "../../utils/jsonwebtoken";
import QNA from "../../model/qna";

const putQna = async (token, title, contents, id) => {
  try {
    const writer = await decodeJWT(token);
    const qnaToUpdate = await QNA.findByPk(id);

    console.log(writer.id);
    console.log(qnaToUpdate.userID);

    if (writer.id !== qnaToUpdate.userId) {
      return {
        ok: false,
        error: "권한이 없습니다."
      };
    }

    await qnaToUpdate.update({
      title,
      contents
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

export default putQna;
