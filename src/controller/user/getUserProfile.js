import { decodeJWT } from "../../utils/jsonwebtoken";

const GetUserProfile = async (req, res) => {
  try {
    const token = req.get("X-JWT");
    console.log(token);
    if (!token) {
      res.json({
        ok: true,
        error: null,
        user: null
      });
    }
    const user = await decodeJWT(token);
    res.json({
      ok: true,
      error: null,
      user
    });
  } catch (error) {
    res.json({
      ok: false,
      error,
      user: null
    });
  }
};

export default GetUserProfile;
