import Redis from 'ioredis';

const redis = new Redis({
	host: process.env.REDISHOST,
	port: Number(process.env.REDISPORT),
	connectTimeout: 20000
});

export const pingRedis = async () => {
	try {
		await redis.ping();
		console.log('redis connected');
	} catch (e) {
		console.log('redis not connected');
		console.error(e);
	}
};
