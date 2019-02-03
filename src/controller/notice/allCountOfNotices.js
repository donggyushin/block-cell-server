import Notice from "../../model/notice";

const allCountOfNotices = async () => {
  try {
    const count = await Notice.count().then(c => {
      return c;
    });
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

export default allCountOfNotices;
