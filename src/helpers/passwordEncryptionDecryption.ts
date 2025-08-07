import bcrypt from "bcrypt";

export const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const decryptPassword = async (
  password: string,
  userPassword: string
) => {
  return await bcrypt.compare(password, userPassword);
};
