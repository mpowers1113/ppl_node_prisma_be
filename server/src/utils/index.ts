import { connectDB } from '../../db';
import { pingRedis } from '../../redis';

//Commit comment

export const initializeApp = async () => {
  try {
    await connectDB();
    await pingRedis();
    return 'app initialized successfully';
  } catch (e) {
    console.error(e);
    return 'app failed to initialize';
  }
};
