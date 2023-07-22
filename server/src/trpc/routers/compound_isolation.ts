import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const compoundIsolationRouter = router({
  compound: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        mechanic: 'compound',
      },
    });
    return exercise;
  }),
  isolation: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        mechanic: 'isolation',
      },
    });
    return exercise;
  }),
});
