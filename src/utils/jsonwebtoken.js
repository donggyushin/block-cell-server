import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/user/UserModel";
dotenv.config();

export const createJWT = async id => {
  const token = await jwt.sign(
    { id },
    process.env.JSON_WEB_TOKEN_SECRET_KEY || ""
  );
  return token;
};

export const decodeJWT = async token => {
  const decoded = jwt.verify(
    token,
    process.env.JSON_WEB_TOKEN_SECRET_KEY || ""
  );
  const { id } = decoded;
  try {
    const user = await User.findById(id).then(project => {
      return project;
    });
    return user;
  } catch (err) {
    return null;
  }
};