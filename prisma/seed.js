import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 100; i++) { 
    await prisma.contact.create({
      data: {
        name: faker.person.fullName(),
        phone: faker.helpers.replaceSymbols('08############'),
      },
    });
  }
  console.log("Seeding done ✅");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
