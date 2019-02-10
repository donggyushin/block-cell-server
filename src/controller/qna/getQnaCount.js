import QNA from "../../model/qna";

export const countQna = async (req, res) => {
  try {
    const count = await QNA.count();
    res.json({
      ok: true,
      error: null,
      count
    });
  } catch (error) {
    res.json({
      ok: false,
      error,
      count: null
    });
  }
};
