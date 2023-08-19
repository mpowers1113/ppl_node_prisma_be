import Koa from 'koa';
import { Middleware } from './middleware';
import { Routes } from './routers';

export class App {
  app: Koa;
  port: number | string;
  constructor(port: number | string) {
    this.app = new Koa();
    this.port = port;
  }

  async initialize() {
    await new Middleware(this.app).setup();
    new Routes(this.app).register();
    return this;
  }

  start() {
    this.app.on('error', (err, ctx) => {
      console.log(err);
    });

    this.app.on('uncaughtException', (err, ctx) => {
      console.log(err);
    });

    this.app.listen(this.port, () => {
      console.info(`server up on port ${this.port}`);
    });
  }
}
