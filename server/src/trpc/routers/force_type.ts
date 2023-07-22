import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const pushPullStaticRouter = router({
  push: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        force: 'push',
      },
    });
    return exercise;
  }),
  pull: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        force: 'pull',
      },
    });
    return exercise;
  }),
  static: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        force: 'static',
      },
    });
    return exercise;
  }),
});
