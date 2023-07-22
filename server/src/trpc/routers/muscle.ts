import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const muscleRouter = router({
  glutes: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'glutes',
          },
        },
      },
    });
    return exercise;
  }),
  chest: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'chest',
          },
        },
      },
    });
    return exercise;
  }),
  lower_back: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'lower_back',
          },
        },
      },
    });
    return exercise;
  }),
  shoulders: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'shoulders',
          },
        },
      },
    });
    return exercise;
  }),
  quadriceps: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'quadriceps',
          },
        },
      },
    });
    return exercise;
  }),
  biceps: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'biceps',
          },
        },
      },
    });
    return exercise;
  }),
  hamstrings: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'hamstrings',
          },
        },
      },
    });
    return exercise;
  }),
  traps: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'traps',
          },
        },
      },
    });
    return exercise;
  }),
  calves: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'calves',
          },
        },
      },
    });
    return exercise;
  }),
  adductors: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'adductors',
          },
        },
      },
    });
    return exercise;
  }),
  neck: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'neck',
          },
        },
      },
    });
    return exercise;
  }),
  forearms: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'forearms',
          },
        },
      },
    });
    return exercise;
  }),
  lats: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'lats',
          },
        },
      },
    });
    return exercise;
  }),
  middle_back: publicProcedure.query(async () => {
    const exercise = await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'middle_back',
          },
        },
      },
    });
    return exercise;
  }),
});
