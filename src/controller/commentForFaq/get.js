import CommentForFaq from "../../model/commentForFaq";
import User from "../../model/user";

const getCommentForFaq = async faqId => {
  try {
    const comments = await CommentForFaq.findAll({
      where: { faqId },
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ],
      attributes: ["id", "text", "createdAt"]
    });
    return {
      ok: true,
      error: null,
      comments
    };
  } catch (error) {
    return {
      ok: false,
      error,
      comments: null
    };
  }
};

export default getCommentForFaq;
