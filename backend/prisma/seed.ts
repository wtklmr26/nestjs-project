import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.manga.upsert({
    where: { title: 'キングダム' },
    update: {},
    create: {
      title: 'キングダム',
      volumes: {
        create: [
          {
            volume: 1,
          },
          {
            volume: 2,
          },
          {
            volume: 3,
          },
          {
            volume: 4,
          },
        ],
      },
    },
  });
  await prisma.manga.upsert({
    where: { title: 'スラムダンク' },
    update: {},
    create: {
      title: 'スラムダンク',
      volumes: {
        create: [
          {
            volume: 1,
          },
          {
            volume: 2,
          },
        ],
      },
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
