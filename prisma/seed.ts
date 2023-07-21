import prisma from './prisma-client';
import seedData from './seed_db/seed_data/exercises.json';
import type { Exercise } from './seed_db/seed_data/seed_data.types';

const splitAndApplyUnderscore = (str: string): Exercise['equipment'] | undefined => {
  if (str === 'e-z curl bar') return 'ez_curl_bar' as Exercise['equipment'];
  const splitIt = str.split(' ');
  if (splitIt.length > 1) {
    return splitIt.join('_') as Exercise['equipment'];
  }
  return str as Exercise['equipment'];
};

// @ts-ignore

async function main() {
  const exerciseArray = seedData.exercises as Exercise[];

  for (const [index, exercise] of exerciseArray.entries()) {
    const name = exercise.name;
    const primaryMuscles = exercise.primaryMuscles;
    const secondaryMuscles = exercise.secondaryMuscles;
    const force = exercise?.force;
    const level = exercise.level;
    const mechanic = exercise.mechanic;
    const equipment = exercise.equipment;
    const category = exercise.category;
    const instructions = exercise.instructions;
    const description = exercise?.description;

    const insertedExercise = await prisma.exercise.upsert({
      where: { name },
      update: {
        name: exercise.name,
        force: force,
        level: level,
        mechanic: mechanic,
        equipment: equipment ? splitAndApplyUnderscore(equipment) : undefined,
        category: category
          ? (splitAndApplyUnderscore(category) as Exercise['category'])
          : undefined,
        description: description,
        primaryMuscles: {
          // @ts-ignore
          connectOrCreate: primaryMuscles.map(muscle => ({
            where: { muscle: splitAndApplyUnderscore(muscle) },
            create: { muscle: splitAndApplyUnderscore(muscle) },
          })),
        },
        secondaryMuscles: {
          // @ts-ignore
          connectOrCreate: secondaryMuscles.map(muscle => ({
            where: { muscle: splitAndApplyUnderscore(muscle) },
            create: { muscle: splitAndApplyUnderscore(muscle) },
          })),
        },
        instructions: {
          create: instructions.map(instruction => ({
            content: instruction,
          })),
        },
      },
      create: {
        name: name,
        force: force,
        level: level,
        mechanic: mechanic,
        equipment: equipment ? splitAndApplyUnderscore(equipment) : undefined,
        category: category
          ? (splitAndApplyUnderscore(category) as Exercise['category'])
          : undefined,
        description: description,
        primaryMuscles: {
          // @ts-ignore
          connectOrCreate: primaryMuscles.map(muscle => ({
            where: { muscle: splitAndApplyUnderscore(muscle) },
            create: { muscle: splitAndApplyUnderscore(muscle) },
          })),
        },
        secondaryMuscles: {
          // @ts-ignore
          connectOrCreate: secondaryMuscles.map(muscle => ({
            where: { muscle: splitAndApplyUnderscore(muscle) },
            create: { muscle: splitAndApplyUnderscore(muscle) },
          })),
        },
        instructions: {
          create: instructions.map(instruction => ({
            content: instruction,
          })),
        },
      },
    });
    if (index % 100 === 1) {
      console.log(insertedExercise);
      const exerciseMuscles = await prisma.exercise.findUnique({
        where: { name: insertedExercise.name },
        include: { primaryMuscles: true, secondaryMuscles: true },
      });
      console.log(exerciseMuscles);
    }
  }

  const user1 = await prisma.user.upsert({
    where: { email: 'test1@example.com' },
    update: {},
    create: {
      username: 'test_user1',
      email: 'test1@example.com',
      password: 'password1',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'test2@example.com' },
    update: {},
    create: {
      username: 'test_user2',
      email: 'test2@example.com',
      password: 'password2',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
