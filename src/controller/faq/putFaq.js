import { decodeJWT } from "../../utils/jsonwebtoken";
import FAQ from "../../model/faq";

const putFaq = async (token, title, contents, id) => {
  try {
    const writer = await decodeJWT(token);
    const faqToUpdate = await FAQ.findByPk(id);

    if (writer.id !== faqToUpdate.userId) {
      return {
        ok: false,
        error: "권한이 없습니다."
      };
    }

    await faqToUpdate.update({
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

export default putFaq;
