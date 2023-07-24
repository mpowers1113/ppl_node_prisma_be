import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const pushPullStaticRouter = router({
  push: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        force: 'push',
      },
    });
  }),
  pull: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        force: 'pull',
      },
    });
  }),
  static: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        force: 'static',
      },
    });
  }),
});
