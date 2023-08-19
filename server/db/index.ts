import prisma from '../../prisma/prisma-client';

export const connectDB = async (): Promise<boolean> => {
  let isConnected = false;
  try {
    await prisma.$connect();
    console.log('db connected');
    isConnected = true;
  } catch (error) {
    console.log(error);
    console.log('db failed to connect');
    isConnected = false;
  } finally {
    await prisma.$disconnect();
  }
  return isConnected;
};
