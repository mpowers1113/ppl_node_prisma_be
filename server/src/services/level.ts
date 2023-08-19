import prisma from '../../../prisma/prisma-client';

export const getBeginnerExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      level: 'beginner',
    },
  });
};

export const getIntermediateExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      level: 'intermediate',
    },
  });
};

export const getExpertExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      level: 'expert',
    },
  });
};
