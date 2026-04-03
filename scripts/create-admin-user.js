const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'maham@gmail.com';
  const pass = 'iak-admin-hr';
  
  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(pass, salt);
  
  // Upsert the user
  const user = await prisma.user.upsert({
    where: { email },
    update: { passwordHash, role: 'ADMIN' },
    create: {
      email,
      passwordHash,
      role: 'ADMIN',
      name: 'Admin Manager'
    }
  });
  
  console.log('--- Account Created/Updated ---');
  console.log('Email:', user.email);
  console.log('Password set to:', pass);
  console.log('-------------------------------');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
