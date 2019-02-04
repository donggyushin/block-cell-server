import FAQ from "../../model/faq";

const countFaq = async () => {
  try {
    const count = await FAQ.count();
    return {
      ok: true,
      error: null,
      count
    };
  } catch (error) {
    return {
      ok: false,
      error,
      count: null
    };
  }
};

export default countFaq;
