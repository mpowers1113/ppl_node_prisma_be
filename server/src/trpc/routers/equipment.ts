import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const equipmentRouter = router({
  machine: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'machine',
      },
    });
    return exercise;
  }),
  body_only: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'body_only',
      },
    });
    return exercise;
  }),
  bands: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'bands',
      },
    });
    return exercise;
  }),
  cable: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'cable',
      },
    });
    return exercise;
  }),
  ez_curl_bar: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'ez_curl_bar',
      },
    });
    return exercise;
  }),
  barbell: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'barbell',
      },
    });
    return exercise;
  }),
  medicine_ball: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'medicine_ball',
      },
    });
    return exercise;
  }),
  kettlebells: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'kettlebells',
      },
    });
    return exercise;
  }),
  foam_roll: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'foam_roll',
      },
    });
    return exercise;
  }),
  other: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        equipment: 'other',
      },
    });
    return exercise;
  }),
});
