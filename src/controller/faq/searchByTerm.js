import FAQ from "../../model/faq";
import { sequelize } from "../../sequelize";
import CommentForFaq from "../../model/commentForFaq";
import User from "../../model/user";

const SearchFAQ = async searchValue => {
  try {
    let lookupValue = searchValue.toLowerCase();

    const faqs = await FAQ.findAll({
      order: [["id", "DESC"]],
      where: {
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "LIKE",
          "%" + lookupValue + "%"
        )
      },
      attributes: ["id", "title", "updatedAt", "views"],
      subQuery: false,
      include: [
        // {
        //   model: CommentForFaq,
        //   attributes: [
        //     [
        //       sequelize.fn("COUNT", sequelize.col("CommentForFaqs.id")),
        //       "commentCounts"
        //     ]
        //   ]
        // },
        {
          model: User,
          attributes: ["username"]
        }
      ],
      group: ["faq.id"]
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
};

export default SearchFAQ;
