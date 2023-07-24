import prisma from '../../../../prisma/prisma-client';
import { publicProcedure, router } from '../index';

export const muscleRouter = router({
  glutes: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'glutes',
          },
        },
      },
    });
  }),
  chest: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'chest',
          },
        },
      },
    });
  }),
  lower_back: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'lower_back',
          },
        },
      },
    });
  }),
  shoulders: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'shoulders',
          },
        },
      },
    });
  }),
  quadriceps: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'quadriceps',
          },
        },
      },
    });
  }),
  biceps: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'biceps',
          },
        },
      },
    });
  }),
  hamstrings: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'hamstrings',
          },
        },
      },
    });
  }),
  traps: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'traps',
          },
        },
      },
    });
  }),
  calves: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'calves',
          },
        },
      },
    });
  }),
  adductors: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'adductors',
          },
        },
      },
    });
  }),
  neck: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'neck',
          },
        },
      },
    });
  }),
  forearms: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'forearms',
          },
        },
      },
    });
  }),
  lats: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'lats',
          },
        },
      },
    });
  }),
  middle_back: publicProcedure.query(async () => {
    return await prisma.exercise.findMany({
      where: {
        primaryMuscles: {
          some: {
            muscle: 'middle_back',
          },
        },
      },
    });
  }),
});
