import { decodeJWT } from "../../utils/jsonwebtoken";
import QNA from "../../model/qna";

const postQna = async (token, title, contents) => {
  try {
    const writer = await decodeJWT(token);

    if (!writer) {
      return {
        ok: false,
        error: "로그인 해주세요."
      };
    }

    await QNA.create({
      title,
      contents,
      userId: writer.id
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

export default postQna;
