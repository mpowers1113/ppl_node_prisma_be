import prisma from './prisma-client';
import seedData from './seed_db/exercises.json';
// @ts-ignore

console.log(seedData);
async function main() {
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
