import prisma from '../../../prisma/prisma-client';

export const getPushExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      force: 'push',
    },
  });
};

export const getPullExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      force: 'pull',
    },
  });
};

export const getStaticExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      force: 'static',
    },
  });
};
