const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('password123', 10);

  // 1. Create Admin User
  const admin = await prisma.user.upsert({
    where: { email: 'mateen@gmail.com' },
    update: {},
    create: {
      email: 'mateen@gmail.com',
      name: 'Admin Mateen',
      passwordHash: passwordHash,
      role: 'ADMIN',
    },
  });
  console.log('Admin user created/updated:', admin.email);

  // 2. Create Dummy Jobs
  await prisma.jobPost.createMany({
    data: [
      {
        title: 'Senior Developer',
        description: 'Full stack development role',
        location: 'Karachi',
        jobType: 'FULL_TIME',
        status: 'OPEN',
        createdById: admin.id,
        category: 'Engineering',
      },
      {
        title: 'UI/UX Designer',
        description: 'Design premium interfaces',
        location: 'Remote',
        jobType: 'PART_TIME',
        status: 'CLOSED',
        createdById: admin.id,
        category: 'Design',
      },
    ],
  });
  console.log('Dummy jobs created');

  // 3. Create Dummy Messages
  await prisma.contactMessage.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'I would like to volunteer for the NGO.',
        phone: '123456789',
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        message: 'Where is your office located?',
      },
    ],
  });
  console.log('Dummy messages created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
