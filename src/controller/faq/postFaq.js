import { decodeJWT } from "../../utils/jsonwebtoken";
import FAQ from "../../model/faq";

const postFaq = async (token, title, contents) => {
  try {
    const writer = await decodeJWT(token);

    if (!writer.admin) {
      return {
        ok: false,
        error: "접근 권한이 없습니다. "
      };
    }

    await FAQ.create({
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

export default postFaq;
