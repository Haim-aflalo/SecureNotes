import bcrypt from 'bcrypt';

async function hashPassword(plainPassword, saltRounds = 10) {
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
  return hashedPassword;
}

async function verifyPassword(plainPassword, hashedPassword) {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
}

export { hashPassword, verifyPassword };
