import express, { Request, Response } from 'express';
import prisma from '../../prisma/prisma-client';
import { Middleware } from './middleware';

const app = express();
const middleware = new Middleware(app);
middleware.setup();
/**
 * App Configuration
 */

// Serves images
app.use(express.static('public'));

app.get('/', async (req: Request, res: Response) => {
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
