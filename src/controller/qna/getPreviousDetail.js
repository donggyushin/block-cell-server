import Sequelize from "sequelize";
import QNA from "../../model/qna";
import User from "../../model/user";

const Op = Sequelize.Op;

const GetPreviousQNADetail = async id => {
  try {
    console.log(id);
    console.log("here!!!");
    const qna = await QNA.findOne({
      where: {
        id: {
          [Op.lt]: id
        }
      },
      attributes: ["id", "updatedAt", "title", "contents", "views"],
      include: [
        {
          model: User,
          attributes: ["username"]
        }
      ],
      order: [["id", "DESC"]]
    });

    console.log(qna);
    // if(!qna){
    //   return {
    //     ok:false,
    //     error: "첫번째 페이지입니다. ",
    //     qna:null
    //   }
    // }

    qna.views += 1;
    await qna.save();

    return {
      ok: true,
      error: null,
      qna
    };
  } catch (error) {
    return {
      ok: false,
      error: "첫번째 페이지입니다. ",
      qna: null
    };
  }
};

export default GetPreviousQNADetail;
