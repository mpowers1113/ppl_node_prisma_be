import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const exerciseCategoryRouter = router({
  strength: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'strength',
      },
    });
  }),
  stretching: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'stretching',
      },
    });
  }),
  plyometrics: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'plyometrics',
      },
    });
  }),
  strongman: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'strongman',
      },
    });
  }),
  olympic_weightlifting: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'olympic_weightlifting',
      },
    });
  }),
  weighted_bodyweight: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'weighted_bodyweight',
      },
    });
  }),
  assisted_bodyweight: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'assisted_bodyweight',
      },
    });
  }),
  cardio: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'cardio',
      },
    });
  }),
  crossfit: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        category: 'crossfit',
      },
    });
  }),
});
