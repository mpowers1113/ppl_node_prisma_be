import prisma from '../../../prisma/prisma-client';

export const listAllExercises = async () => {
  return await prisma.exercise.findMany();
};

export const getExerciseById = async (id: string) => {
  return await prisma.exercise.findUnique({
    where: { id: id },
    include: {
      primaryMuscles: true,
      secondaryMuscles: true,
      instructions: true,
    },
  });
};

export const updateExercise = async (input: any) => {
  const promises = [];

  const exerciseUpdate = prisma.exercise.update({
    where: { id: input.id },
    data: {
      name: input.name,
      level: input.level,
      force: input.force,
      mechanic: input.mechanic,
      equipment: input.equipment,
    },
  });

  promises.push(exerciseUpdate);

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
};

export const searchExerciseByName = async (queryString: string) => {
  return await prisma.exercise.findMany({
    where: { name: { contains: queryString } },
    include: {
      primaryMuscles: true,
      secondaryMuscles: true,
      instructions: true,
    },
  });
};
