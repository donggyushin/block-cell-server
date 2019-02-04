import FAQ from "../../model/faq";
import User from "../../model/user";

const getFaqBy15 = async page => {
  const offset = 15 * (page - 1);

  try {
    const faqs = await FAQ.findAll({
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
