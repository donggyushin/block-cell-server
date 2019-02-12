import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/user";
dotenv.config();

export const createJWT = async id => {
  const token = await jwt.sign(
    { id },
    process.env.JSON_WEB_TOKEN_SECRET_KEY || "catgirl"
  );
  return token;
};

export const decodeJWT = async token => {
  const decoded = jwt.verify(
    token,
    process.env.JSON_WEB_TOKEN_SECRET_KEY || "catgirl"
  );
  const { id } = decoded;
  try {
    const user = await User.findByPk(id).then(project => {
      return project;
    });

    return user;
  } catch (err) {
    return null;
  }
};
