import Notice from "../../model/notice";
import User from "../../model/user";

const getNoticesBy15 = async page => {
  const offset = 15 * (page - 1);

  try {
    const notices = await Notice.findAll({
      offset,
      limit: 15,
      order: [["id", "DESC"]],
      attributes: ["id", "title", "createdAt"],
      include: [{ model: User, attributes: ["username"] }]
    });
    return {
      ok: true,
      error: null,
      notices
    };
  } catch (error) {
    return {
      ok: false,
      error,
      notices: []
    };
  }
};

export default getNoticesBy15;
