import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const equipmentRouter = router({
  machine: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'machine',
      },
    });
  }),
  body_only: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'body_only',
      },
    });
  }),
  bands: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'bands',
      },
    });
  }),
  cable: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'cable',
      },
    });
  }),
  ez_curl_bar: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'ez_curl_bar',
      },
    });
  }),
  barbell: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'barbell',
      },
    });
  }),
  medicine_ball: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'medicine_ball',
      },
    });
  }),
  kettlebells: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'kettlebells',
      },
    });
  }),
  foam_roll: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'foam_roll',
      },
    });
  }),
  other: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        equipment: 'other',
      },
    });
  }),
});
