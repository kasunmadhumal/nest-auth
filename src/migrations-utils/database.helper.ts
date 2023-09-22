import { MongoClient } from 'mongodb';
import { mongoDBConstants } from '../constants/mongoDBConstants';

export const getDb = async () => {
  const MONGO_URL = mongoDBConstants.MONGO_URL;
  const client: any = await MongoClient.connect(MONGO_URL);
  return client.db();
};
