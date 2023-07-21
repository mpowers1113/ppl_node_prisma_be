import { pingDB } from '../../db';
import { pingRedis } from '../../redis';

//Commit comment

export const initializeApp = async () => {
  try {
    await pingDB();
    await pingRedis();
    console.log('app initialized');
  } catch (e) {
    console.error(e);
  }
};
