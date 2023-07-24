import * as trpcExpress from '@trpc/server/adapters/express';
import express, { Request, Response } from 'express';
import prisma from '../../prisma/prisma-client';
import { createContext } from '../src/trpc';
import { Middleware } from './middleware';
import { appRouter } from './trpc/routers/routes';
import { initializeApp } from './utils';

initializeApp().then(res => console.log(res));

const app = express();
const middleware = new Middleware(app);
middleware.setup();
/**
 * App Configuration
 */

// Serves images
app.use(express.static('public'));
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.get('/blahhhhhh', async (req: Request, res: Response) => {
  const exercise = await prisma.exercise.findFirst({
    where: { name: 'Smith Machine Incline Bench Press' },
    include: {
      primaryMuscles: true,
      secondaryMuscles: true,
      instructions: true,
    },
  });
  console.log(exercise);
  res.json({ exercise });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
