const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'hr@ait.iak.ngo';
  const adminPass = 'iak-admin-hr';
  
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(adminPass, salt);

  console.log('Resetting/Creating Admin User...');
  
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      passwordHash: passwordHash,
      role: 'ADMIN',
      name: 'HR Admin'
    },
    create: {
      email: adminEmail,
      name: 'HR Admin',
      role: 'ADMIN',
      passwordHash: passwordHash
    }
  });

  console.log('Admin user ready:', admin.email);
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
