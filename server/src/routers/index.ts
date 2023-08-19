import Router from '@koa/router';
import { default as Application, default as Koa } from 'koa';
import equipmentRouter from '../controllers/equipment';
import exerciseRouter from '../controllers/exercise';
import muscleRouter from '../controllers/muscle';

export class Routes {
  app: Koa;
  router: Router;
  constructor(app: Koa<Application>) {
    this.app = app;
  }

  register() {
    this.app.use(muscleRouter.routes()).use(muscleRouter.allowedMethods());
    this.app.use(equipmentRouter.routes()).use(equipmentRouter.allowedMethods());
    this.app.use(exerciseRouter.routes()).use(exerciseRouter.allowedMethods());
  }
}
