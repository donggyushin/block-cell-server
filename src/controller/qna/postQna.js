import { decodeJWT } from "../../utils/jsonwebtoken";
import QNA from "../../model/qna";

const postQna = async (token, title, contents) => {
  try {
    const writer = await decodeJWT(token);
    console.log("writer", writer);
    console.log("token", token);
    console.log("title", title);
    console.log("contents", contents);
    if (!writer) {
      return {
        ok: false,
        error: "로그인 해주세요."
      };
    }
    console.log("1");
    await QNA.create({
      title,
      contents,
      userId: writer.id
    });
    console.log("2");

    return {
      ok: true,
      error: null
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error
    };
  }
};

export default postQna;
