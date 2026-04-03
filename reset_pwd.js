const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();

async function main() {
  const email = 'mateen@gmail.com';
  const newPass = 'iak-admin-hr';
  
  // Hash the new password
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(newPass, salt);
  
  // Update the user
  const updated = await prisma.user.update({
    where: { email },
    data: { passwordHash }
  });
  
  console.log('--- Password Reset Success ---');
  console.log('User:', updated.email);
  console.log('New Password set to:', newPass);
  console.log('------------------------------');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
