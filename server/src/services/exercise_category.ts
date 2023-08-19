import prisma from '../../../prisma/prisma-client';

export const getStrengthExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'strength',
    },
  });
};

export const getStretchingExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'stretching',
    },
  });
};

export const getPlyometricsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'plyometrics',
    },
  });
};

export const getStrongmanExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'strongman',
    },
  });
};

export const getOlympicWeightliftingExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'olympic_weightlifting',
    },
  });
};

export const getWeightedBodyweightExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'weighted_bodyweight',
    },
  });
};

export const getAssistedBodyweightExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'assisted_bodyweight',
    },
  });
};

export const getCardioExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'cardio',
    },
  });
};

export const getCrossfitExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      category: 'crossfit',
    },
  });
};
