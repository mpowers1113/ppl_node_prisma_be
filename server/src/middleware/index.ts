import cors from 'cors';
import { initializeApp } from '../utils';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import e from 'express';
import compression from 'compression';
import { rateLimit } from 'express-rate-limit';
import { Request } from 'express';
import { Response } from 'express';
import { NextFunction } from 'express';

export class Middleware {
  app: e.Application;
  constructor(app: e.Application) {
    this.app = app;
  }

  setup() {
    initializeApp().catch(e => console.error(e));
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('combined'));
    this.app.use(compression());

    const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }); // limit each IP to 100 requests per windowMs
    this.app.use(limiter);

    this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).send('Something broke!');
    });
  }
}
