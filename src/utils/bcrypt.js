export const hashPassword = rawPassord => {
  // const hash = bcrypt.hashSync(rawPassord, SALTROUNTS);
  return rawPassord;
};

export const comparePassword = (rawPassword, hashedPassword) => {
  // const match = bcrypt.compareSync(rawPassword, hashedPassword);
  if (rawPassword === hashedPassword) {
    return true;
  } else {
    return false;
  }
};
