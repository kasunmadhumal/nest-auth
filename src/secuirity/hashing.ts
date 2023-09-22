import * as bcrypt from 'bcrypt';

export async function HashingValue(password: string): Promise<string> {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
}
