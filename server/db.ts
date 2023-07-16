import Pool from 'pg-pool';

const pool_config = {
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	max: 25,
	min: 5,
	idleTimeoutMills: 60 * 1000
};

const dbPool = new Pool(pool_config);

export const pingDB = async () => {
	try {
		await dbPool.query('SELECT 1');
		console.log('postgres connected');
	} catch (e) {
		console.error(e);
		console.log('postgres not connected');
	}
};
