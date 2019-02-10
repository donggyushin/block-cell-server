import FAQ from "../../model/faq";
import User from "../../model/user";
import CommentForFaq from "../../model/commentForFaq";
import { sequelize } from "../../sequelize";

const getFaqBy15 = async page => {
  const offset = 15 * (page - 1);

  try {
    const faqs = await FAQ.findAll({
      offset,
      limit: 15,
      order: [["id", "DESC"]],
      subQuery: false,
      distinct: true,
      attributes: ["id", "title", "updatedAt", "views"],
      include: [
        {
          model: User,
          attributes: ["username"]
        }
        // {
        //   model: CommentForFaq,
        //   attributes: [
        //     [
        //       sequelize.fn("COUNT", sequelize.col("CommentForFaqs.id")),
        //       "commentCounts"
        //     ]
        //   ]
        // }
      ]
      // group: ["faq.id", "commentForFaqs.id"]
    });

    return {
      ok: true,
      error: null,
      faqs
    };
  } catch (error) {
    return {
      ok: false,
      error,
      faqs: null
    };
  }

  // let faqs = await FAQ.findAll();
  // let offset = 0;
  // try {

  //         offset = 15 * (pageNum - 1);

  //     router.post.findAll({
  //         offset: offset,
  //         limit: 15
  //     })
  //  } catch (error) {
  //     return {
  //         ok: false,
  //         error
  //     };
  // }
};

export default getFaqBy15;
