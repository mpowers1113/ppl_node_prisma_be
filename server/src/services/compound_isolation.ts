import prisma from '../../../prisma/prisma-client';

export const getCompoundExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      mechanic: 'compound',
    },
  });
};

export const getIsolationExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      mechanic: 'isolation',
    },
  });
};
