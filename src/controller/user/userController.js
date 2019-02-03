import User from "../../model/user/UserModel";
import { hashPassword } from "../../utils/bcrypt";

export const newAccoutFN = async (username, password1, password2) => {
  if (password1 !== password2) {
    return {
      ok: false,
      error: "비밀번호가 서로 일치하지 않습니다. "
    };
  }

  const hashedPassword = await hashPassword(password1);

  if (username === "blockcell") {
    const returnType = await User.findOrCreate({
      where: { username },
      defaults: { password: hashedPassword, admin: true }
    }).spread((user, created) => {
      if (!created) {
        console.log("1");
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
