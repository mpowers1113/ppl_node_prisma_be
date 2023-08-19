import prisma from '../../../prisma/prisma-client';

export const getMachineExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'machine',
    },
  });
};

export const getBodyOnlyExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'body_only',
    },
  });
};

export const getBandsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'bands',
    },
  });
};

export const getCableExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'cable',
    },
  });
};

export const getEZCurlBarExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'ez_curl_bar',
    },
  });
};

export const getBarbellExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'barbell',
    },
  });
};

export const getMedicineBallExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'medicine_ball',
    },
  });
};

export const getKettlebellsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'kettlebells',
    },
  });
};

export const getFoamRollExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'foam_roll',
    },
  });
};

export const getOtherEquipmentExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      equipment: 'other',
    },
  });
};
