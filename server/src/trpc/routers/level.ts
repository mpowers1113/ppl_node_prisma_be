import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const fitnessLevelRouter = router({
  beginner: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        level: 'beginner',
      },
    });
    return exercise;
  }),
  intermediate: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        level: 'intermediate',
      },
    });
    return exercise;
  }),
  expert: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        level: 'expert',
      },
    });
    return exercise;
  }),
});
