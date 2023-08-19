import prisma from '../../../prisma/prisma-client';

const exerciseServices = {
  list: async () => {
    return await prisma.exercise.findMany();
  },
  id: async (id: string) => {
    return await prisma.exercise.findUnique({
      where: { id: id },
      include: {
        primaryMuscles: true,
        secondaryMuscles: true,
        instructions: true,
      },
    });
  },
  update: async input => {
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
  },
  name: async (queryString: string) => {
    return await prisma.exercise.findMany({
      where: { name: { contains: queryString } },
      include: {
        primaryMuscles: true,
        secondaryMuscles: true,
        instructions: true,
      },
    });
  },
};

// You can then access the merged route with
// http://localhost:3000/trpc/<NAMESPACE>.<PROCEDURE>
