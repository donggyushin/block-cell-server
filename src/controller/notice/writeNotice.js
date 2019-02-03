import { decodeJWT } from "../../utils/jsonwebtoken";
import Notice from "../../model/notice";

const writeNotice = async (token, title, contents) => {
  try {
    const writer = await decodeJWT(token);
    const admin = writer.admin;
    if (!admin) {
      return {
        ok: false,
        error: "접근 권한이 없습니다."
      };
    }

    await Notice.create({
      title,
      contents,
      userId: writer.id
    });

    return {
      ok: true,
      error: null
    };
  } catch (err) {
    return {
      ok: false,
      error: err
    };
  }
};

export default writeNotice;
