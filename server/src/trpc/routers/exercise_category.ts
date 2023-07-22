import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const exerciseCategoryRouter = router({
  strength: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'strength',
      },
    });
    return exercise;
  }),
  stretching: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'stretching',
      },
    });
    return exercise;
  }),
  plyometrics: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'plyometrics',
      },
    });
    return exercise;
  }),
  strongman: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'strongman',
      },
    });
    return exercise;
  }),
  olympic_weightlifting: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'olympic_weightlifting',
      },
    });
    return exercise;
  }),
  weighted_bodyweight: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'weighted_bodyweight',
      },
    });
    return exercise;
  }),
  assisted_bodyweight: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'assisted_bodyweight',
      },
    });
    return exercise;
  }),
  cardio: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'cardio',
      },
    });
    return exercise;
  }),
  crossfit: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        category: 'crossfit',
      },
    });
    return exercise;
  }),
});
