import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvFilePath(dest: string): string {
  const env: string | undefined = process.env['NODE_ENV'];
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : 'development.env';
  const envFilePath: string = resolve(`${dest}/${filename}`);
  return existsSync(envFilePath) ? envFilePath : fallback;
}
