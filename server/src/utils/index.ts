import { connectDB } from '../../db';
import { pingRedis } from '../../redis';

//Commit comment

export const initializeApp = async () => {
  try {
    await connectDB();
    await pingRedis();
    console.log('app initialized');
  } catch (e) {
    console.error(e);
  }
};
