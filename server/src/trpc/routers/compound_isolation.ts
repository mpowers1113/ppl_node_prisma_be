import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const compoundIsolationRouter = router({
  compound: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        mechanic: 'compound',
      },
    });
  }),
  isolation: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        mechanic: 'isolation',
      },
    });
  }),
});
