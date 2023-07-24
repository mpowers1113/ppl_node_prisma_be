import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';
import { updateExerciseInput } from '../procedures';
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
  id: publicProcedure.query(async ({ ctx }) => {
    const id = ctx.req.query.id as string;
    return await prisma.exercise.findUnique({
      where: { id: id },
      include: {
        primaryMuscles: true,
        secondaryMuscles: true,
        instructions: true,
      },
    });
  }),
  update: updateExerciseInput.mutation(async ({ input }) => {
    const promises = [];

    const updateExercise = prisma.exercise.update({
      where: { id: input.id },
      data: {
        name: input.name,
        level: input.level,
        force: input.force,
        mechanic: input.mechanic,
        equipment: input.equipment,
      },
    });

    promises.push(updateExercise);

    if (input.primaryMuscles) {
      const primaryMuscles = prisma.exerciseMuscle.createMany({
        data: input.primaryMuscles.map(muscle => ({
          exerciseId: input.id,
          muscle: muscle,
        })),
      });
      promises.push(primaryMuscles);
    }

    if (input.secondaryMuscles) {
      const secondaryMuscles = prisma.exerciseMuscle.createMany({
        data: input.secondaryMuscles.map(muscle => ({
          exerciseId: input.id,
          muscle: muscle,
        })),
      });
      promises.push(secondaryMuscles);
    }

    if (input.instructions) {
      const instructions = prisma.instruction.createMany({
        data: input.instructions.map(instruction => ({
          exerciseId: input.id,
          content: instruction,
        })),
      });
      promises.push(instructions);
    }

    return await Promise.all(promises);
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
