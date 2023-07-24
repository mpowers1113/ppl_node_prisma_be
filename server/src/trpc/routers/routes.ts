import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';
import { compoundIsolationRouter } from './compound_isolation';
import { equipmentRouter } from './equipment';
import { exerciseCategoryRouter } from './exercise_category';
import { pushPullStaticRouter } from './force_type';
import { fitnessLevelRouter } from './level';
import { muscleRouter } from './muscle';

const exerciseRouter = router({
  list: publicProcedure.query(async () => {
    return await prisma.exercise.findMany();
  }),
  name: publicProcedure.query(async ({ ctx }) => {
    const queryString = ctx.req.query.name as string;
    return await prisma.exercise.findMany({
      where: { name: { contains: queryString } },
      include: {
        primaryMuscles: true,
        secondaryMuscles: true,
        instructions: true,
      },
    });
  }),
});

// You can then access the merged route with
// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>

export const appRouter = router({
  exercise: exerciseRouter,
  muscle: muscleRouter,
  equipment: equipmentRouter,
  exercise_category: exerciseCategoryRouter,
  force: pushPullStaticRouter,
  level: fitnessLevelRouter,
  compound_isolation: compoundIsolationRouter,
});

export type AppRouter = typeof appRouter;
