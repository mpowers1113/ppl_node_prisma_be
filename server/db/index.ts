import prisma from '../../prisma/prisma-client';

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Database connected successfully');
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
