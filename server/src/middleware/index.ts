import { bodyParser } from '@koa/bodyparser';
import cors from '@koa/cors';
import Koa from 'koa';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import ratelimit from 'koa-ratelimit';
import { pingRedis, redis } from '../../redis';

import Application from 'koa';
import { connectDB } from '../../db';

export class Middleware {
  app: Koa;
  db_connected: boolean;
  redis_connected: boolean;
  constructor(app: Koa<Application>) {
    this.app = app;
    this.db_connected = false;
    this.redis_connected = false;
  }

  async setup() {
    this.db_connected = await connectDB();
    this.redis_connected = await pingRedis();

    if (!this.redis_connected || !this.db_connected) {
      console.log('failed to connect to db or redis');
      process.exit(1);
    }

    this.app.use(
      ratelimit({
        driver: 'redis',
        db: redis,
        duration: 60000,
        errorMessage: 'Sometimes You Just Have to Slow Down.',
        id: ctx => ctx.ip,
        headers: {
          remaining: 'Rate-Limit-Remaining',
          reset: 'Rate-Limit-Reset',
          total: 'Rate-Limit-Total',
        },
        max: 100,
        disableHeader: false,
      }),
    );

    this.app.use(bodyParser());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }
}
