import bcrypt from "bcrypt";
const SALTROUNTS = 10;

export const hashPassword = rawPassord => {
  const hash = bcrypt.hashSync(rawPassord, SALTROUNTS);
  return hash;
};

export const comparePassword = (rawPassword, hashedPassword) => {
  const match = bcrypt.compareSync(rawPassword, hashedPassword);
  return match;
};
