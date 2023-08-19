import Redis from 'ioredis';

export const redis = new Redis({
  host: process.env.REDISHOST,
  port: Number(process.env.REDISPORT),
  connectTimeout: 20000,
});

export const pingRedis = async () => {
  let redisConnected = false;
  try {
    await redis.ping();
    console.log('redis connected');
    redisConnected = true;
  } catch (e) {
    console.log('redis not connected');
    console.error(e);
    redisConnected = false;
  }
  return redisConnected;
};
