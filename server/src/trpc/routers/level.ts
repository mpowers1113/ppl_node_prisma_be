import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const fitnessLevelRouter = router({
  beginner: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        level: 'beginner',
      },
    });
  }),
  intermediate: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        level: 'intermediate',
      },
    });
  }),
  expert: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        level: 'expert',
      },
    });
  }),
});
