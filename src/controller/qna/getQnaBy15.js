import QNA from "../../model/qna";
import User from "../../model/user";

const getQnaBy15 = async page => {
  const offset = 15 * (page - 1);

  try {
    const qnas = await QNA.findAll({
      attributes: ["id", "title", "updatedAt"],
      //   include: [
      //     {
      //       model: User,
      //       attributes: ["username"]
      //     }
      //   ],
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ],
      offset,
      limit: 15,
      order: [["id", "DESC"]]
    });

    return {
      ok: true,
      error: null,
      qnas
    };
  } catch (error) {
    return {
      ok: false,
      error,
      qnas: null
    };
  }
};

export default getQnaBy15;
