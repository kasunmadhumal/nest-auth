import { HashingValue } from '../secuirity/hashing';
import { getDb } from '../migrations-utils/database.helper';

export const up = async () => {
  const db = await getDb();
  const password: string = await HashingValue('Htj#@!234');
  db.collection('users').insertOne({
    username: 'admin',
    password: password,
  });
};

export const down = async () => {
  const db = await getDb();
  db.collection('users').deleteOne({ username: 'admin' });
};
