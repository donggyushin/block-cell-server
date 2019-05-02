import User from "../../model/user";
import { hashPassword, comparePassword } from "../../utils/bcrypt";
import { createJWT } from "../../utils/jsonwebtoken";

export const newAccoutFN = async (username, password1, password2) => {
  if (password1 !== password2) {
    return {
      ok: false,
      error: "비밀번호가 서로 일치하지 않습니다. "
    };
  }

  const hashedPassword = hashPassword(password1);

  if (username === "kovitech") {
    const returnType = await User.findOrCreate({
      where: { username },
      defaults: { password: hashedPassword, admin: true }
    }).spread((user, created) => {
      if (!created) {
        return {
          ok: false,
          error: "이미 존재하는 아이디입니다. 다른 아이디를 선택해 주세요. "
        };
      } else {
        return {
          ok: true,
          error: null
        };
      }
    });
    return returnType;
  } else {
    const returnType = await User.findOrCreate({
      where: { username },
      defaults: { password: hashedPassword }
    }).spread((user, created) => {
      if (!created) {
        return {
          ok: false,
          error: "이미 존재하는 아이디입니다. 다른 아이디를 선택해 주세요. "
        };
      } else {
        return {
          ok: true,
          error: null
        };
      }
    });
    return returnType;
  }
};

export const loginFN = async (username, password) => {
  try {
    const user = await User.findOne({ where: { username } }).then(user => user);
    console.log("여기?");
    console.log(user);
    const { id, password: hashedPassword } = user;
    console.log("여기??");
    const match = comparePassword(password, hashedPassword);
    if (!match) {
      return {
        ok: false,
        error: "비밀번호가 서로 일치하지 않습니다. ",
        jwt: null
      };
    }
    console.log("here!");
    const jwt = await createJWT(id);
    console.log("here!!!!");
    return {
      ok: true,
      error: null,
      jwt
    };
  } catch (err) {
    return {
      ok: false,
      error: "아이디를 다시 한 번 확인해주세요. ",
      jwt: null
    };
  }
};
