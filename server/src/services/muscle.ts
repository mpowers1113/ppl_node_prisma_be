import prisma from '../../../prisma/prisma-client';

export const getGlutesExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'glutes',
        },
      },
    },
  });
};

export const getChestExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'chest',
        },
      },
    },
  });
};

export const getLowerBackExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'lower_back',
        },
      },
    },
  });
};

export const getShouldersExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'shoulders',
        },
      },
    },
  });
};

export const getQuadricepsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'quadriceps',
        },
      },
    },
  });
};

export const getBicepsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'biceps',
        },
      },
    },
  });
};

export const getHamstringsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'hamstrings',
        },
      },
    },
  });
};

export const getTrapsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'traps',
        },
      },
    },
  });
};

export const getCalvesExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'calves',
        },
      },
    },
  });
};

export const getAdductorsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'adductors',
        },
      },
    },
  });
};

export const getNeckExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'neck',
        },
      },
    },
  });
};

export const getForearmsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'forearms',
        },
      },
    },
  });
};

export const getLatsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'lats',
        },
      },
    },
  });
};

export const getMiddleBackExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'middle_back',
        },
      },
    },
  });
};

export const getAbdominalsExercises = async () => {
  return await prisma.exercise.findMany({
    where: {
      primaryMuscles: {
        some: {
          muscle: 'abdominals',
        },
      },
    },
  });
};
