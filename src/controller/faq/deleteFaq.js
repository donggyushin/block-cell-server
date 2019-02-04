import { decodeJWT } from "../../utils/jsonwebtoken";
import FAQ from "../../model/faq";

const deleteFaq = async (token, id) => {
  try {
    const writer = await decodeJWT(token);
    const faqToDelete = await FAQ.findByPk(id);

    if (writer.id !== faqToDelete.userId) {
      return {
        ok: false,
        error: "접근 권한이 없습니다. "
      };
    }

    await faqToDelete.destroy();
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

export default deleteFaq;
